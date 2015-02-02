---
layout: docs
category: docs
title: downloads
---

## Downloads
Below are all available downloads for the lastest version of Bowery ({{ site.version }}). You can see SHA256 checksums for these packages [here](http://desktop.bowery.io/{{ site.version }}_SHA256SUMS).

## Mac OS X
<!-- ![apple](/static/apple.png) -->
For Mac OS X, we use a signed pkg installer that will put `Bowery.app` in your `/Applications` directory.

[Download Bowery for Mac OS X](http://desktop.bowery.io/{{ site.version }}_darwin_amd64.zip){: .track-download.btn.skeleton}

Download the [64-bit installer](http://desktop.bowery.io/{{ site.version }}_darwin_amd64.zip){: .track-download}. Extract it and run `bowery.pkg`.


Congrats! Your installation was successful. Now open the Bowery app that can be found in `/Applications`. This will take you to your finder to select a directory where you will be working on your code.

You can also download the installer via [brew](http://brew.sh/).

~~~
$ brew install caskroom/cask/brew-cask
$ brew cask install bowery
~~~

## Windows
<!-- ![apple](/static/windows.png) -->
You can install Bowery with [Chocolatey](https://chocolatey.org/). Run the following in your Command Prompt:

~~~
choco install bowery
~~~

## Linux

We're currently working on integrating with major Linux package managers, but for now you have to download and execute our installers.

[Download Bowery for 32-bit Linux](http://desktop.bowery.io/{{ site.version }}_linux_386.zip){: .track-download.btn.skeleton}

[Download Bowery for 64-bit Linux](http://desktop.bowery.io/{{ site.version }}_linux_amd64.zip){: .track-download.btn.skeleton}

Download the [32-bit installer](http://desktop.bowery.io/{{ site.version }}_linux_386.zip){: .track-download} or [64-bit installer](http://desktop.bowery.io/{{ site.version }}_linux_amd64.zip){: .track-download}. Unzip the downloaded files into your preferred directory. Then open a terminal and run

~~~
cd <path/to/unzipped/contents>
chmod +x bowery.run
./bowery.run
~~~

Once that's done a shortcut to Bowery will be added to your Desktop. 


