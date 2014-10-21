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
    if (isMobile())
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

  function animate(frame, animation, scrollTop) {
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

function isMobile() {
  var check = false;
  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
