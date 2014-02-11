module.exports = function(scriptText, callback) {
  var type = typeof scriptText;
  if (type !== 'string') {
    var eM = 'coffeescript-detector usage: fn(string, function)';
    return callback(new Error(eM));
  } else {
    callback(null);
  }
};
