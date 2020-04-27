maxChar = str => {
  let charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  console.log(maxChar);
};

maxChar("pkkusherloueeeeeeederpackayyy");

reverseString = str => {
  //console.log(str.split("dog").join("cat"));
};

reverseString("my name is petey dog kusherpack");
