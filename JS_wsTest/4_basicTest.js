//  Return ค่าของอักษรที่อยู่กลางข้อความ
// Str  'test'
// SplitStr ["t","e","s","t"] --> str[2], str[3] --> if lenght เลขคู่ 4%2 --> เอาตำแหน่ง [2],[2+1]
// SplitStr ["t","e","s","t","i","n","g"] --> str[7] -->  เอา lenght 7+1 %2 --> [4]
// SplitStr  ["m","i","d","d","l","e"] --> lenght =6 --> 6%2 --> 3 --> return ค่า [3],[3+1]
// ต้องการตัวที่อยู่ กึ่งกลาง
// Answer ตัวกึ่งกลาง "es"

function getMiddle(s) {
  let len = s.length;
  let indexOfmiddle = Math.floor(len / 2);
  if (len % 2 === 0) {
    return `${s[indexOfmiddle - 1]}${s[indexOfmiddle]}`;
  } else {
    console.log(indexOfmiddle);
    return `${s[indexOfmiddle]}`;
  }
}

console.log(getMiddle("testing"));
console.log(getMiddle("test"));
console.log(getMiddle("a"));
