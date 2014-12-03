---
layout: post
title:  "Try Orchestrate with Node + Bowery"
date:   2014-11-5 07:00:54
categories: posts
tags:
- tutorials
- orchestrate.io
- node.js
---

Want to try out [Orchestrate.io's](http://orchestrate.io) amazing database without installing anything locally? We've added an Orchestrate image to make the process as simple as launching a new Bowery app.

### Step 0: Download the Orchestrate Node.js example app
[Orchestrate has an example Node.js app on Github](https://github.com/Bowery/orchestrate-bowery-userauth). [Click here to download it](https://github.com/Bowery/orchestrate-bowery-userauth/archive/master.zip).

### Step 1: Click "Add App"

![Imgur](http://i.imgur.com/gmziqM5.png)

### Step 2: Under image, select "Orchestrate.js"

![Imgur](http://i.imgur.com/nEXhOwK.png)

### Step 3: Set up your app
Make `npm install && node index.js` your start step and point to the local folder that you downloaded in step 0 containing the app code.

![Imgur](http://i.imgur.com/R1gD4rp.png)

### Step 4: Add your Orchestrate key to config.js

<pre>
// config.js/
module.exports = {
  "db": "INSERT-YOUR-ORCHESTRATE-KEY-HERE"
}
</pre>

### Step 5: That's it!

And that's it! Once the app is provisioned, you'll have a new machine with the [Orchestrate Node.js library](https://www.npmjs.org/package/orchestrate) installed.

Check out Orchestrate's post on [their blog](http://orchestrate.io/blog/2014/11/17/the-quickest-way-to-get-a-node-app-with-user-login/) about running Node.js and Bowery

![Imgur](http://i.imgur.com/S7jbcmZ.png)
