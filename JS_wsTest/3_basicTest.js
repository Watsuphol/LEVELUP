// หาผลรวมสุดท้ายของตัวเลขที่รับมา
// 39 --> (because 3*9=27, 2*7=14, 1*4=4)

const number = `${39}`
// การประกาศตัวแปร if else loop

function sunDigit(num) {
  let strNum = String(num); // "39"
  let strNumArr = strNum.split(""); // ["3","9"]
  let len = strNumArr.length;

  while (len > 1) {
    let mul = 1;
    for (let n of strNumArr) {
      mul *= n; // 1 * 3 * 9 = 27
    }
    strNum = String(mul); // "27"
    strNumArr = strNum.split(""); // ["2","7"]
    len = strNumArr.length; // 2, 2 , 1
  }
  return strNumArr[0];
}

console.log(sunDigit(39));
console.log(sunDigit(999));
