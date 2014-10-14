# Bowery Website
This document includes some notes about how to develop new pages for the bowery website.

## Getting Started

The bowery website is a series of static pages and can be easily run using a tool like [serve](https://www.npmjs.org/package/node-serve). We preprocess our CSS using [Myth](http://www.myth.io/). To get going:

```
$ cd website && serve
```

```
$ cd website && myth -w static/bowery.css static/out.css
```

## Coffin
We use a modified version of [coffin](https://github.com/fat/coffin) for the side nav. In order to use it on a page:

```
<div class="coffin" data-coffin="toggle">
  <button href="#" class="logo"></button>
  <div class="padding"></div>
  <ul class="nav">
    <li>
      <a data-coffin="click" href="/start">Get Started</a>
    </li>
    <li>
      <a data-coffin="click" href="/images">Images</a>
    </li>
    <li>
      <a data-coffin="click" href="/learn">Learn More</a>
    </li>
  </ul>
</div>
<div class="page">

<!-- Content Goes here!!! -->

</div>
```
You'll also want to add a class to the `.coffin` div that will adjust the drawer background color to match the rest of your page.

## Index Page Animations

In the desktop view of the homepage, the sequence of animations are defined by a set of frames. All animations for the home page are in `static/home.js`. Here is an example:

```javascript
var frames = [
  {
    // The parent selector for this animation.
    selector: '#intro',

    // The length of the animation. If duration is 0.5 and
    // the current window height is 750px, the user
    // must scroll 375px to move onto the next frame.
    duration: 1,

    // The animations to run during this frame.
    // Each animation transitions evenly throughout
    // the alloted time.
    animations: [
      {
        // Selector of the DOM element to animate.
        selector: '.intro-step-content',

        // Animations can be done using translateX,
        // translateY, translateZ, and opacity. Each
        // animation has a start and stop value.
        translateY: [0, -140],
        opacity: [1, 0]
      }
    ],

    // This is used to display what step the
    // entire animation is on.
    step: 0,

    // A "stable" frame is one in which it is
    // neither entering or exiting. It's a frame
    // that would be able to be read by a user.
    isStable: true
  }
]
```
