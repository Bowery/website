#!/bin/bash

# this will serve the website, but gem and myth need to be installed

# 'npm install -g myth' (might need sudo if on )
myth static/bowery.css static/out.css
if [ $? != 0 ]
then
    echo "install myth with 'npm install -g myth'. might need a sudo"
    exit 1
fi

# check if jekyll is installed
jekyll --version > /dev/null 2>&1
if [ $? != 0 ]
then
    echo "installing jekyll"
    gem install jekyll
fi

myth --watch static/bowery.css static/out.css &

# serve
jekyll serve
