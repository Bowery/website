// Copyright 2014 Bowery, Inc.
/**
 * @fileoverview Deploy site to s3
 */

var fs = require('fs')
var path = require('path')
var walk = require('walk')
var Q = require('kew')
var knox = require('knox').createClient({
  key: 'AKIAJKTSTYBSHPKQTMPQ',
  secret: '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',
  bucket: 'bowery.io'
})

var promises = []
var files = []
var siteAbsoluteDir = path.join(__dirname, '..', '_site')
var siteRelativeDir = siteAbsoluteDir.split(siteAbsoluteDir)[1]
var w = walk.walk(siteAbsoluteDir)

w.on('file', function (root, stat, next) {
  // Do not upload files in .git/ or deploy/
  var relative = root.split(siteAbsoluteDir + '/')[1]
  if (relative && ['.git', 'deploy'].indexOf(relative.split('/')[0]) != -1) {
    next()
    return
  }

  files.push(root + '/' + stat.name)
  next()
})

w.on('end', function () {
  files.forEach(function (f) {
    var defer = Q.defer()
    promises.push(defer)
    knox.putFile(f, f.split(siteAbsoluteDir + '/')[1], {'x-amz-acl': 'public-read'}, defer.makeNodeResolver())
  })

  Q.all(promises)
  .then(function () {
    console.log('Uploaded site successfully.')
    return process.exit(0)
  })
  .fail(function (err) {
    console.error(err.toString())
    return process.exit(1)
  })
  .end()
})
