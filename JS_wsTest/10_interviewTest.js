function bossBaby(input) {
  console.log(input);

  // create arr R and S
  let arrR = [];
  let arrS = [];

  // For str for added to emtry array
  for (const str of input) {
    console.log(str);

    if (str === "R") {
      arrR.push(str);
      console.log(arrR);
      console.log(arrR.length);
    }
    if (str === "S") {
      arrS.push(str);
      console.log(arrS);
    }
  }

  // Divice Solution
  if (input[0] === "R") {
    return "Bad boys";
  }
  if (input[0] === "S") {
    if (arrS.length == arrR.length) {
      return "Bad boys";
    }
    if (arrR.length > arrS.length) {
      return "Good boys";
    }
  }
}

console.log(bossBaby("SRSSRRR"));
console.log(bossBaby("RSSRR"));
console.log(bossBaby("SSSRRRRS"));
console.log(bossBaby("SRRSSR"));
console.log(bossBaby("SSRSRRR"));
