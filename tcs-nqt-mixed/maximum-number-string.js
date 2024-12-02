{
  /* 
    Given a string S(input) consisting of * and #. The length of the string is variable. The task is to find the 
minimum number of * and # required to make it a valid string. The string is considered valid if the number of 
* and # are equal. The * and # can be at any position in the string.
    */
}

function numberCount(S) {
  let asterCount = 0,
    hashCount = 0,
    i,
    finalResult;
  for (i = 0; i < S.length; i++) {
    if (S.charAt(i) === "*") {
      asterCount++;
    } else if (S.charAt(i) === "#") {
      hashCount++;
    }
  }
  if (asterCount === hashCount) {
    finalResult = 0;
  } else if (asterCount > hashCount) {
    finalResult = asterCount - hashCount;
  } else {
    finalResult = hashCount - asterCount;
  }
  return finalResult;
}

let s1 = "###****";
let res = numberCount(s1);
console.log(res);
