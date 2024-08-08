module.exports = function check(str, bracketsConfig) {
  const newBracketsConfig = bracketsConfig.map(element => element.join(''));
    while (str.length) {
  	  let newStrLength = str.length;
  	  for(let key of newBracketsConfig) {
    	  str = str.replace(key, '');
      }
      if (newStrLength === str.length) {
        return false;
      }
    }
  return true;
}
