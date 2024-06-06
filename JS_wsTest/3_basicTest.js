// หาผลรวมสุดท้ายของตัวเลขที่รับมา
// 39 --> (because 3*9=27, 2*7=14, 1*4=4)

// 3 * 9  --> 27 --> 2 * 7

// หยุด loop เทื่อ array 1ตัว

// let input = 39; // ขอเเค่เอา p
// let str = String(input);
// let splitStr = str.split("");
// let paper = 1;
// for (const num of splitStr) {
//   console.log(num);
//   let number = Number(num);
//   console.log(number);
//   paper *= number;
// }

let input = 39;
let str = String(input);
let splitStr = str.split("");
let paper = 1;
while (splitStr.length == 1) {
  for (const num of splitStr) {
    let number = Number(num);
    paper *= number;
    console.log(paper);
    splitStr.length --;
    break;
  }
}
console.log(paper);
// บรรทัดไหนที่ทำให้ splitStr ออกจาก loop
