"use strict";

var _dropbox = require("dropbox");

var dbx = new _dropbox.Dropbox({
  accessToken: 'bTyO7qBXsHAAAAAAAAAASkK6LzviDe9lRdsVEXcHZwLtt1iEtZANfdY2n8eDyaM4',
  fetch: fetch
});
dbx.fileListFolder({
  path: '' //this specify the root path

}).then(function (res) {
  return console.log(res);
});