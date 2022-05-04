

function capitalizeString(str) {
  let newString = '';
  for(let i = 0; i <= str.length; i++) {
    return newString = str.replace(str[0], str[0].toUpperCase());
    
  }
}

// console.log(capitalizeString('maman'));
module.exports = capitalizeString;