//  "abcd"
// [1], [2], [3], [4]
// "a", "b", "c", "d"

// ["a","b","c","d"]
// loop ->

function textNumber(str) {
  let len = str.length;
  let newStr = "";

  for (let i = 0; i < len; i++) {
    console.log(i);
    if (i !== 0) {
      newStr += "-";
    }
    for (j = 0; j <= i; j++) {
      newStr += str[i];
    }
    console.log(newStr);
  }
  return newStr;
}

console.log(textNumber("abcd"));
