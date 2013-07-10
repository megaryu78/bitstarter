var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var BUF_LEN = 512;
  var fs = require('fs');
  var buf = new Buffer(BUF_LEN);

  fd = fs.openSync('index.html','r');
  pos = 0;
  pos += fs.readSync(fd,buf,pos,BUF_LEN);
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
