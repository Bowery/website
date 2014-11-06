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
    var xMovement = isMobile() ? 0 : 80;

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
        mixpanel.track("coffin opened")
        xMovement = Infinity;
        touchEnd();
    }

    // simple helper to force coffin close
    function closeCoffin () {
        mixpanel.track("coffin closed")
        xMovement = -Infinity;
        touchEnd();
    }

    // try a native matchesSelector on a selector with an element
    function matchesSelector(element, selector) {
        var matcher = element.matchesSelector || element.mozMatchesSelector || element.webkitMatchesSelector || element.oMatchesSelector || element.msMatchesSelector
        return matcher && matcher.call(element, selector);
    }

    // detect the closest element based on a selector. For simple delegation.
    function closest (element, selector) {
      while (element && !matchesSelector(element, selector)) {
          element = element.parentNode;
      }
      return element;
    }

    // handle touch start event
    window.addEventListener('touchstart', function (e) {

        // reset direction property
        direction = '';

        // reset xMovement to left/right position
        xMovement = isOpen ? coffinSize : (isMobile() ? 0 : 80);

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
        if (direction != 'horizontal') {
            if (isOpen && isMobile() && closest(e.target, '.page')) {
                toggleCoffin()
            }
            return;
        }

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
        xEnd = xMovement <= (isOpen ? (coffinSize - (fraction * coffinSize)) : fraction * coffinSize) ? (isMobile() ? 0 : 80) : coffinSize;

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
        // Toggling Window
        if (closest(e.target, '.subscribe')) return direction = ''

        if (!direction && closest(e.target, '[data-coffin=toggle]')) toggleCoffin()
        else if (isOpen && closest(e.target, '.page')) toggleCoffin()

        return direction = '';
    })
}();

function isMobile() {
   var check = false;
   (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
   return check;
}
