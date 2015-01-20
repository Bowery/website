---
layout: docs
category: docs
title: Getting Started
---


## Basic

### Basic Install 

The basis of any new Bowery Environment is a clean install of Ubuntu 14.04. You're free to install and run any software supported by this OS. Since Ubuntu comes with Python pre-installed, go ahead and try running a simple http server:

~~~
$ cd myapp
$ python -m SimpleHTTPServer 80
~~~

Select `File > Open in Browser` and see your site there.

## Bash

Provisioning through the shell is an easy way to get your environment set up, especially if you aren't using an existing system like Chef or Puppet, or if the requirements of your environment aren't as demanding. You may even already have a script, whether it sits in the root of your application directory (`setup.sh`) or is bundled inside of a `Dockerfile` or `Vagrantfile` (in which case you can just pull at the individual steps).

When your environment launches, enter the directory of your application (which is located in the home directory). Execute your synced script. Once it has completed, you can simply save the environment (File > Save).

## Chef Solo

To start off, you'll need to install Chef in your Bowery Environment. You can do so by running:

~~~
$ curl -L https://www.opscode.com/chef/install.sh | bash
~~~

Once Chef is installed you can execute your existing recipe to configure the environment:

~~~
$ sudo chef-solo -c ~/myapp/path/to/solo.rb
~~~

Whenever you or your teammates launch a new Bowery Environment, all configurations executed by Chef will be present. You will only have to run Chef again if you've made a change to the recipe.

## Puppet Apply

First, you'll need to install Puppet in your Bowery Environment, you can do so by running:

~~~
$ wget https://apt.puppetlabs.com/puppetlabs-release-trusty.deb
$ sudo dpkg -i puppetlabs-release-trusty.deb
$ sudo-apt-get update
~~~

Once Puppet has installed, you can execute your existing Puppet manifest to configure the environment:

~~~
$ puppet apply ~/myapp/path/to/manifests/file.pp
~~~

Whenevery you are your teammates launch a new Bowery Environment, all configurations executed by Puppet will be present. you will only have to run Puppet again if you've made a change to the manifest.
