function checkForBracketsPair(bracket, bracketsConfig) {
  for (let i=0;i<bracketsConfig.length; i++) {
    let j = bracketsConfig[i].indexOf(bracket);
    if (j===0) {
      return [bracketsConfig[i][j], bracketsConfig[i][j+1]];
    } else if (j===1) {
      return [bracketsConfig[i][j-1], bracketsConfig[i][j]];
    }
  }
  return false;
}

module.exports = function check(str, bracketsConfig) {
 let array = str.split('');
 let stack = [];
 let flag = false;
 let currentPair;
 for (let i=0; i<array.length; i++) {
  let pair = checkForBracketsPair(array[i], bracketsConfig);
   if (i===0 && pair.indexOf(array[i])===0) {
    stack.push(array[i]);
   } else if (pair[0]===pair[1] && stack[stack.length-1]===pair[0]) {
    stack.pop();
   } else if(pair[0]===pair[1] && stack[stack.length-1]!==pair[0]) {
    stack.push(array[i]);
   } else if (pair.indexOf(array[i])===0 && pair[0]!==pair[1]) {
     stack.push(array[i]);
   } else if (pair.indexOf(array[i])===1 && pair.indexOf(stack[stack.length-1])===0){
     stack.pop();
   } else if (pair[0]===pair[1]  && array[i]!==stack[stack.length-1]) {
     stack.push(array[i]);
   } else if (pair[0]===pair[1]  && array[i]===stack[stack.length-1]) {
    stack.pop();
  } else if (pair[0]!==pair[1]  && pair[0]===stack[stack.length-1] && pair.indexOf(array[i])===1) {
   stack.pop();
  } else if ((pair[0]!==pair[1] && pair.indexOf(stack[stack.length-1])===-1)) {
    return false;
  }
  }
  if (stack.length) {
  return false;
  }
  return true;
}

