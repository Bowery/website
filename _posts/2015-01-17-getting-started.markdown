---
layout: docs
category: docs
title: Getting Started
---


## Basic
Open the Bowery app. This will take you to your finder to select a directory where you will be working on your code.

![file dialog](/static/step1.png)

Once you select the directory with your code, the Bowery Terminal will appear. Type `ls` and you will see that the code from the folder you selected on your computer is being synced to your development enviroment.

![terminal](/static/step2.png)

The basis of any new Bowery Environment is a clean install of Ubuntu 14.04, but you can [contact us](mailto:hello@bowery.io) to customize this. You're free to install and run any software supported by this OS. Since Ubuntu comes with Python pre-installed, go ahead and try running a simple http server:

~~~
$ cd myapp
$ python -m SimpleHTTPServer 80
~~~

Select `File > Open in Browser` and see your site there.

If for any reason you need to connect to your instance directly, you can get ssh information via `File > Info`.

## Bash

Provisioning through the shell is an easy way to get your environment set up, especially if you aren't using an existing system like Chef or Puppet, or if the requirements of your environment aren't as demanding. You may even already have a script, whether it sits in the root of your application directory (`setup.sh`) or is bundled inside of a `Dockerfile` or `Vagrantfile` (in which case you can just pull at the individual steps).

When your environment launches, enter the directory of your application (which is located in the home directory). Execute your synced script. Once it has completed, you can simply save the environment (File > Save).

## Chef Solo

To start off, you'll need to install [Chef](https://www.chef.io/) in your Bowery Environment. You can do so by running:

~~~
$ curl -L https://www.opscode.com/chef/install.sh | bash
~~~

Once Chef is installed you can execute your existing recipe to configure the environment:

~~~
$ sudo chef-solo -c ~/myapp/path/to/solo.rb
~~~

Whenever you or your teammates launch a new Bowery Environment, all configurations executed by Chef will be present. You will only have to run Chef again if you've made a change to the recipe.

## Puppet Apply

First, you'll need to install [Puppet](http://puppetlabs.com/) in your Bowery Environment, you can do so by running:

~~~
$ wget https://apt.puppetlabs.com/puppetlabs-release-trusty.deb
$ sudo dpkg -i puppetlabs-release-trusty.deb
$ sudo-apt-get update
~~~

Once Puppet has installed, you can execute your existing Puppet manifest to configure the environment:

~~~
$ puppet apply ~/myapp/path/to/manifests/file.pp
~~~

Whenever you or your teammates launch a new Bowery Environment, all configurations executed by Puppet will be present. You will only have to run Puppet if you've made a change to the manifest.

## Ansible
You won't need to change anything about your Bowery environment to provision it with Ansible. You'll just need to get your ssh info by clicking on `File > Info` in the menu.

![info](/static/ansible-info.png)

You will need to update your [Inventory](http://docs.ansible.com/intro_inventory.html) to include this info. For example:

~~~
[web]
104.154.63.17	ansible_ssh_port=23
~~~

Then when you run `ansible-playbook` include the `--ask-pass` parameter and enter the password you see in the app after doing `File > Info`.
