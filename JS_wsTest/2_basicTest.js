// input เเยกด้วย split ใส่ใน array
// loop array เพื่อได้ ตำเเหน่ง
// math pow เลขยกกำลัง

let input = 321;
let splitInt = input.toString().split("");
console.log(splitInt);

let paper = 0
for (let i = 1; i <= splitInt.length; i++) {
  let index = i;
  console.log(index);
  
  let replyAns = splitInt[index - 1];
  let ans = replyAns ** index;
  console.log(ans);
  paper += ans;
}

console.log(paper);




