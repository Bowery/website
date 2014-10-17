/**
 * Copyright 2014 Bowery, Inc.
 */

// @enum Transition time.
var TRANSITION_TIME_MS = 250

// @enum Update interval
var UPDATE_INTERVAL_MS = 10

// @enum Decimal round off.
var DECIMAL_POINTS = 2

// Previous frame.
var prevActiveFrame = 0

// Current frame.
var newActiveFrame

// Current distance from top of page (in pixels).
var scrollTop = 0

// Container. All events happen within this element.
// It also defines the background color.
var containerEl = document.getElementsByClassName('container')[0]

// Step list.
var $stepListEl

// Window.
var $window = $(window)

// Current window height.
var windowHeight = 0

// Current body height.
var bodyHeight = 0

// Frames.
// 
// Selector: the wrapping parent.
// 
// Duration: how long the animation runs for. A duration of 1
// means that a full window scroll is required to complete that
// step, in other words if the window height is 1000px, the user
// must scroll 1000px before moving onto the next frame.
// 
// Animations: the changes that will occur during that frame. Changes
// occur evenly distributed through the lifetime of that frame.
// If duration is 1 and opacity of .intro-step-content is animated
// from 1 to 0, at 0.5, opacity is 0.5. The only styles that should
// be animated are translateX, translateY, and opacity.
// 
// Step: which step the animation is at. Used to update the step list.
// 
// IsStable: A `stable` frame is one that is not meant to be a major
// transition frame (e.g. the user can read the content).
var frames = [
  {
    selector: '#intro',
    duration: 1,
    animations: [
      {
        selector: '.intro-step-content',
        translateY: [0, -140],
        opacity: [1, 0]
      }
    ],
    step: 0,
    isStable: false
  },
  {
    selector: '#add',
    duration: 0.5,
    animations: [
      {
        selector: '.add-step-content',
        translateY: [140, 0],
        opacity: [0, 1]
      }
    ],
    step: 1,
    isStable: false
  },
  {
    selector: '#add',
    duration: 1,
    animations: [],
    step: 1,
    isStable: true
  },
  {
    selector: '#choose',
    duration: 1,
    animations: [],
    step: 2,
    isStable: true
  },
  {
    selector: '#share',
    duration: 0.5,
    animations: [
      {
        selector: '.chat-window',
        translateX: [-300, -500],
        translateY: [0, -140],
        opacity: [0, 1]
      }
    ],
    step: 3,
    isStable: true
  },
  {
    selector: '#share',
    duration: 1,
    animations: [
      {
        selector: '.share-step-content',
        translateY: [0, -140],
        opacity: [1, 0]
      }
    ],
    step: 3,
    isStable: false
  },
  {
    selector: '#try',
    duration: 0.5,
    animations: [
      {
        selector: '.get-started-wrapper',
        translateY: [-120, -120],
        opacity: [0, 1],
        scale: [1, 1.25]
      },
      {
        selector: '.learn-more',
        opacity: [0, 1],
        translateY: [0, -60],
        translateX: [-50, -50]
      }
    ],
    step: 4,
    isStable: false
  },
  {
    selector: '#try',
    duration: 0.5,
    animations: [],
    step: 4,
    isStable: true
  }
]

$(document).ready(function() {
  function init() {
    if ('ontouchstart' in window)
      return
      
    $stepListEl = $('.step-list')
    setScroll()
    setScrollTo()
    build()
    setInterval(update, UPDATE_INTERVAL_MS)
  }

  function setScroll() {
    scrollTop = $window.scrollTop()
  }

  function setScrollTo() {
    ['.scroll-to-add', '.scroll-to-choose', '.scroll-to-share'].forEach(function(location) {
      $(location).click(function(e) {
        e.preventDefault()
        var selector = '#' + location.split('-')[2]
        var offset
        for (var i = 0; i < frames.length; i++) {
          if (frames[i].selector == selector && frames[i].isStable) {
            offset = frames[i].offsetTop
            break
          }
        }

        $('html, body').animate({
          scrollTop: offset
        }, TRANSITION_TIME_MS)
      })
    })
  }

  function build() {
    windowHeight = $window.height()
    for (var i = 0; i < frames.length; i++) {
      frames[i].height = windowHeight * frames[i].duration
      frames[i].offsetTop = bodyHeight
      bodyHeight += frames[i].height
    }

    $('body').height(bodyHeight + windowHeight)
  }

  function update() {
    window.requestAnimFrame(function() {
      setScroll()
      var frame
      var animation
      for (var i = 0; i < frames.length; i++) {
        frame = frames[i]
        if (frame.offsetTop <= scrollTop && scrollTop < (frame.offsetTop + frame.height)) {
          newActiveFrame = i
          break
        }
      }

      frame = frames[newActiveFrame]
      if (frame.animations && frame.animations.length) {
        for (var i = 0; i < frame.animations.length; i++) {
          animation = frame.animations[i]
          animate(frame, animation, scrollTop)
        }
      }

      var isNewStep = frames[newActiveFrame].step != frames[prevActiveFrame].step
      if (isNewStep) {
        updateStepList(frames[newActiveFrame].step)
      }

      var isNewFrame = frames[newActiveFrame].selector != frames[prevActiveFrame].selector
      if (isNewFrame) {
        updateBackground(newActiveFrame)
        prevActiveFrame = newActiveFrame
      }
    })
  }

  function updateStepList(num) {
    if ([0, 4].indexOf(num) != -1) {
      $stepListEl.removeClass('visible')
    } else {
      $stepListEl.addClass('visible')
      $stepListEl.find('li').removeClass('active')
      $($stepListEl.find('li')[num - 1]).addClass('active')
    }
  }

  function updateBackground(num) {
    var selectorName = frames[num].selector.split('#')[1]
    containerEl.className = 'container container-' + selectorName
    $('.wrapper').removeClass('visible')
    $(frames[num].selector).addClass('visible')
  }

  function calcValue(start, finish, percentComplete) {
    return start - percentComplete * (start - finish)
  }

  function animate(frame, animation, scrollTOp) {
    var percentComplete = (scrollTop - frame.offsetTop) / frame.height
    var attr = {
      translateX: 0,
      translateY: 0,
      opacity: 1,
      scale: 1
    }
    Object.keys(animation).forEach(function(key) {
      attr[key] = calcValue(animation[key][0], animation[key][1], percentComplete)
    })

    $(animation.selector).css({
      transform: 'translate3d(' + Math.round(attr.translateX) + 'px,' + Math.round(attr.translateY) + 'px, 0) scale(' + attr.scale.toFixed(DECIMAL_POINTS) + ')',
      opacity: attr.opacity.toFixed(DECIMAL_POINTS)
    })
  }

  init()
})

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function(callback){
            window.setTimeout(callback, 1000 / 60);
          };
})();
