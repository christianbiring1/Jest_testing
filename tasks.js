
function stringLength(str) {
  if(str.length >= 1 && str.length <= 10) {
    return true;
  }
  return false;
};

// console.log(stringLength('comeond'));

module.exports = stringLength;
