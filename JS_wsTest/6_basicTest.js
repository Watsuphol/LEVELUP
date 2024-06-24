let arr1 = [1, 2, 4];
let arr2 = [100,2,1,10]

let uniqueArr1 = []
let uniqueArr2 = []
for (i =0; i < arr2.length;i++) {
    console.log(arr2[i])
    isUniqueId = true
    for(j=0; j< arr1.length;j++) {
        if(arr2[i] === arr1[j]) {
            isUniqueId = false
            break
        }
    }
    if (isUniqueId) {
        uniqueArr2.push(arr2[i])
    }
}

for (i =0; i < arr1.length;i++) {
    console.log(arr1[i])
    isUniqueId = true
    for(j=0; j< arr2.length;j++) {
        if(arr1[i] === arr2[j]) {
            isUniqueId = false
            break
        }
    }
    if (isUniqueId) {
        uniqueArr1.push(arr1[i])
    }
}

let ans = uniqueArr1.concat(uniqueArr2)
ans.sort(function(a,b) {return a - b})

console.log(ans);
console.log(uniqueArr2);
console.log(uniqueArr1);