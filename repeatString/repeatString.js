var repeatString = function(inputString, numberOfRepititions) {
  if (numberOfRepititions >= 0){
    let newString = '';
    for (let i = numberOfRepititions; i > 0; i--) {
      newString += inputString;
    }
    return newString;
  } else {
    return 'ERROR';
  }
}

module.exports = repeatString
