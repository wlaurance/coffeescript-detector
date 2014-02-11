module.exports = function(scriptText, callback) {
  var type = typeof scriptText;
  if (type !== 'string') {
    var eM = 'coffeescript-detector usage: fn(string, function)';
    return callback(new Error(eM));
  } else {
    var lines = scriptText.split('\n');
    var obj = {};
    var postives = [];
    for (var i = 0; i < lines.length; i++) {
      
    }
    obj.lines = postives;

    callback(null, postives.length > 0 ? obj: void 0);
  }
};
