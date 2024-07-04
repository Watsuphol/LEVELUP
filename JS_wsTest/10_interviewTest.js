function bossBaby(input) {
  console.log(input);

  for (const str of input) {
    console.log(str);
    if (input[0] === "R") {
      return "Bad boys";
    }
    return "Good boys";
  }
}

console.log(bossBaby("SRSSRRR"));
console.log(bossBaby("RSSRR"));
console.log(bossBaby("SSSRRRRS"));
