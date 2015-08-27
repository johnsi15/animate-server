const os = require('os')
const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
const async = require('async')
const dataURIBuffer = require('data-uri-to-buffer');
const EventEmitter = require('events').EventEmitter

module.exports = function (images) {
  events = new EventEmitter();
  count = 0
  baseName = uuid.v4()
  tmpDir = os.tmpDir()

  async.series([
    decodeImages,
    createVideo,
    encodeVideo,
    cleanup
  ], convertFinished);

  function decodeImages(done){
    async.eachSeries(images, decodeImage, done);
  }

   function decodeImage(image, done){
    nuevo = count++;
    fileName = baseName+nuevo+'.jpg';
    buffer = dataURIBuffer(image)
    ws = fs.createWriteStream(path.join(tmpDir, fileName))

    ws.on('error', done)
      .end(buffer, done)

    events.emit('log', 'Converting '+ fileName);
  }
 
  function createVideo(done){
    done();
  }

  function encodeVideo(done){
    done();
  }

  function cleanup(done){
    done();
  }

  function convertFinished(err){    
    setTimeout(function () {
      events.emit('video', 'this will be the encoded video');
    }, 1000);
  }

  return events
}