---
layout: docs
category: docs
title: Deployment
---

## Overview

Deploying a Bowery Environment is as simple as exporting the environment as a tar file, and launching it via Docker or Chroot.

To start the export, select `File > Export` from the Bowery Menu. You'll be prompted with the following options:

![Bowery Export](/static/export.png)

In either case, the steps will be copied directly to your clipboard.

Note: when exporting, Bowery automatically removes your application code from the environment in order to avoid potential code conflicts.

## Docker

After selecting Docker from the prompt, the following will be copied to your clipboard:

~~~
curl -L -f http://kenmare.io/tar/ENV_ID | docker load
~~~

The `ENV_ID` is the same identifier you can find in your `.bowery` file. Executing this command will download the most recent version of your environment and pipe it to docker load. To learn more about saving and merging environments, read here.

Once the environment has been loaded, running `docker images` will show it listed, with the TAG field as your environment identifier.

~~~
$ docker images
CONTAINER ID            TAG     IMAGE ID
quay.io/bowery/ubuntu   ENV_ID  xxxxxxxxxxxx
~~~

You can mount your application code when creating the container by running `docker run -v`. To learn more about mounting volumes with Docker, [read here](https://docs.docker.com/userguide/dockervolumes/).


## Chroot + Tar

After selecting Shell from the pompt, the following will be copied to your clipboard:

~~~
#!/bin/bash
set -e
mp=ENV_ID # mount point
curl -L -f http://kenmare.io/tar/ENV_ID | tar -xzvf -
sudo mkdir -p /tmp/${mp}
hash=$(ls -d */ | sed 's|/||g')
sudo tar xvf ${hash}/layer.tar -C /tmp/${mp}
sudo mkdir -p /tmp/${mp}/proc /tmp/${mp}/dev \
	/tmp/${mp}/dev/pts /tmp/${mp}/sys /tmp/${mp}/etc
sudo mount -o bind /proc /tmp/${mp}/proc
sudo mount -o bind /dev /tmp/${mp}/dev
sudo mount -o bind /dev/pts /tmp/${mp}/dev/pts
sudo mount -o bind /sys /tmp/${mp}/sys
sudo cp /etc/resolv.conf /tmp/${mp}/etc/resolv.conf
echo "To use, run 'sudo chroot /tmp/${mp}/ /bin/bash'
~~~

Again, the `ENV_ID` is the same identifier you can find in your `.bowery` file.

Paste these contents into a file and in your deployment process, execute that bash script, which will download the latest environment and mount it appropriately. Using `chroot` you can then launch the environment and execute the rest of your deployment steps (e.g. installing dependencies, running tests, starting your application).
