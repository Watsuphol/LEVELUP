// ([1,2,3],[100,2,1,10]) => [3,10,100]
// if else condition => เอาตัวซ้ำออก
// เเล้วมาเรียงใหม่
function diffArray(x, y) {
  for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
    let arr = []
    for (let j = 0; j < y.length; y++) {
      console.log(y[j]);
      if (x[i] < y[j]) {
        arr.push(x[i])
      }
    }
    console.log(arr);
  }
}

console.log(diffArray([1, 2, 3], [100, 2, 1, 10]));
