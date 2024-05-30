// QUS1
function remove(str) {
  let len = str.length - 1;
  console.log(str[len]);

  if (str[len] === "!") {
    let arr = [];
    for (const e of str) {
      console.log(e);
      arr.push(e);
    }
    arr.pop();
    return arr.join("");
  }
  return str;
}

function remove3(str) {
  let len = str.length - 1;
  console.log(str[len]);

  if (str[len] === "!") {
    // str.slice(-1);
    // let newStr = str.split("");
    // newStr.pop();
    return str.slice(0, len);
  }
  return str;
}

console.log(remove3("Hi!"));
console.log(remove3("Hi!!!"));
console.log(remove3("!Hi"));
console.log(remove3("!Hi!"));
console.log(remove3("Hi! Hi!"));
console.log(remove3("Hi"));

// Input str
// เอา str มาเเยก ใส่ใน array
// ทำการ ลบ array ตำแหน่งสุดท้าย
// concat กลับมารวม

//if else เผื่อเช็คตัวสุดท้าย if == ! else !== !
// str.split(!)

//if > (str มีตัว !) > str.pop() == !
//else > (str ไม่มี !) > str.pop()
