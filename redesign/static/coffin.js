/*
 * Coffin.js V1.0.0
 * Copyright 2012, @fat
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

!function () {

    // touchend listener
    var touchEnd;

    // start of X scroll pos
    var xStart;

    // start of Y scroll pos
    var yStart;

    // direction of scroll
    var direction;

    // movement offset
    var xMovement = 0;

    // end scroll position
    var xEnd = 0;

    // percent ofscroll offset to trigger close/open action
    var fraction = 3/10;

    // window size cache
    var windowSize = window.innerWidth;

    // coffin size
    var coffinSize = 270;

    // is coffin open
    var isOpen = false;

    // is modal open
    var modalIsOpen = false;

    // page element
    var page = document.querySelector('.page');

    // coffin element
    var coffin = document.querySelector('.coffin');

    // test element
    var skeletor = document.createElement('skeletor')

    // is this a touch device
    var isTouch = 'ontouchstart' in skeletor;

    // transition end event names
    var transitionEndEventNames = {
       'WebkitTransition' : ['webkitTransitionEnd', 'webkitTransform', '-webkit-transform'],
       'MozTransition'    : ['transitionend', 'transform', 'transform'],
       'transition'       : ['transitionend', 'transform', 'transform']
    }

    // the transitionend event name
    var transitionEndEventName;

    // the transition property
    var transitionProperty;

    // transform property in js
    var transformProperty;

    // transform property in css
    var transformCSSProperty;

    // define the property and event name
    for (name in transitionEndEventNames) {
        if (skeletor.style[name] !== undefined) {
            transitionProperty = name
            transitionEndEventName = transitionEndEventNames[name][0]
            transformProperty = transitionEndEventNames[name][1]
            transformCSSProperty = transitionEndEventNames[name][2]
            break
        }
    }

    // function for 3d transforms
    function translate3d (i) {
        page.style[transformProperty] = 'translate3d(' + i + 'px,0,0)';
    }

    // clearTransform
    function clearTransform () {
        page.style[transformProperty] = '';
    }

    // simple helper to toggle coffin
    function toggleCoffin () {
        direction = 'horizontal'
        isOpen ? closeCoffin() : openCoffin()
    }

    // simple helper to force coffin open
    function openCoffin () {
        xMovement = Infinity;
        touchEnd();
    }

    // simple helper to force coffin close
    function closeCoffin () {
        xMovement = -Infinity;
        touchEnd();
    }

    // try a native matchesSelector on a selector with an element
    function matchesSelector(element, selector) {
        var matcher = element.matchesSelector || element.mozMatchesSelector || element.webkitMatchesSelector || element.oMatchesSelector
        return matcher && matcher.call(element, selector);
    }

    // detect the closest element based on a selector. For simple delegation.
    function closest (element, selector) {
      while (element && !matchesSelector(element, selector)) {
          element = element.parentNode;
      }
      return element;
    }

    // Unrelated to coffin. Opens image info modal
    function openImageModal (id) {
      var overlay = document.querySelector('.modal-overlay')
      overlay.style.display = 'block'
      overlay.style.backgroundColor = "rgba(255, 255, 255, 0.8)"

      modalIsOpen = true

      // TODO (thebyrd) ajax call for image with ID
      var image = {
        name: 'Zend PHP',
        author: 'Jacob Heftmann',
        version: '5.5',
        size: '200mb',
        lastUpdated: '5 min',
        downloads: '157',
        description: 'Zend Framework version 1.7 requires PHP 5.2.4 or later. Previous versions required PHP 5.1.4 or later, although the ZF Programmer\'s Reference Guide strongly recommended PHP 5.2.3 or later for security and performance improvements included in these versions of PHP. Zend Framework 2.0 requires PHP 5.3.3 or later. PHPUnit 3.0 or later is required to run the unit tests shipped with Zend Framework. Many components also require PHP extensions.'
      }
    }

    // Unrelated to coffin. Closes image info modal
    function closeImageModal () {
      var overlay = document.querySelector('.modal-overlay')
      overlay.style.backgroundColor = "rgba(255, 255, 255, 0)";
      overlay.style.display = 'none'
      modalIsOpen = false
    }

    // handle touch start event
    window.addEventListener('touchstart', function (e) {

        // reset direction property
        direction = '';

        // reset xMovement to left/right position
        xMovement = isOpen ? coffinSize : 0;

        // set touch start position for x axis
        xStart = e.touches[0].screenX;

        // set touch start position for y axis
        yStart = e.touches[0].screenY;

    });

    // handle touchmove event
    window.addEventListener('touchmove', function (e) {

        // don't allow scrolling the page up and down when nav open
        if (direction == 'vertical' && isOpen) e.preventDefault();

        // if direction is vertical then exit
        if (direction == 'vertical') return;

        // calculate offsets to see if scroll direciton is vertical or horizontal
        var xOffset = Math.abs(e.touches[0].screenX - xStart);
        var yOffset = Math.abs(e.touches[0].screenY - yStart);

        // set direction based on offsets
        if (yOffset > xOffset) return direction = 'vertical';

        // the first time a horizontal move, set the pulling class
        if (direction != 'horizontal') coffin.classList.add('coffin-pulling');

        // if not vertical, than horizontal :P
        direction = 'horizontal';

        // prevent scrolls if horizontal
        e.preventDefault();

        // calcuate movement based on last scroll pos
        xMovement = e.touches[0].screenX - xStart + xEnd;

        // if xmovement is within valid range, scroll page
        if (xMovement <= coffinSize && xMovement >= 0) {
            translate3d(xMovement);
        }

    });

    // listen for touchend event
    window.addEventListener('touchend', (touchEnd = function (e) {

        // if direction isn't horizontal than exit (w maybe toggle)
        if (direction != 'horizontal') return;

        var transitionEnd = function () {

            // reset transform
            if (!isOpen) clearTransform();

            page.style[transitionProperty] = '';

            page.removeEventListener(transitionEndEventName, transitionEnd);

            // remove the pulling
            coffin.classList.remove('coffin-pulling');

            // toggle the coffin open class
            coffin.classList[isOpen ? 'add' : 'remove']('coffin-open');

        };

        // calculate which side to transition to
        xEnd = xMovement <= (isOpen ? (coffinSize - (fraction * coffinSize)) : fraction * coffinSize) ? 0 : coffinSize;

        // check if transitioned open
        isOpen = xEnd === coffinSize;

        // set transition property for animation
        page.style[transitionProperty] = transformCSSProperty + ' .1s linear';

        // tranform element along x axis
        translate3d(xEnd);

        // listen for transition complete
        page.addEventListener(transitionEndEventName, transitionEnd);

        // if exit is at edge, force transitionEnd because transition won't be fired anyways
        if (xMovement == coffinSize) transitionEnd();

    }));

    window.addEventListener('click', function (e) {
        // Opening Modals (totally unrelated)
        if (!isOpen && !modalIsOpen && closest(e.target, '.image-btn')) return openImageModal(e.target.dataset.image)

        // Closes Modal (totally unrelated)
        if (!isOpen && modalIsOpen && closest(e.target, '.modal-overlay')) return closeImageModal()

        // Toggling Window
        if (!direction && closest(e.target, '[data-coffin=toggle]')) toggleCoffin()
        else if (isOpen && closest(e.target, '.page')) toggleCoffin()

        return direction = '';
    })

}();
