# Bowery Website
This document includes some notes about how to develop new pages for the bowery website.

## Coffin
We use a modified version of [coffin](https://github.com/fat/coffin) for the side nav. In order to use it on a page:

```
<div class="coffin" data-coffin="toggle">
  <a href="#" class="logo"></a>
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
