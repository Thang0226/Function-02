function findAppearTimes(array, character) {
  let count = 0;
  let ind = -1;
  for (let index in array) {
    if (character === array[index]) {
      count++;
      ind = index;
    }
  }

  if (ind > -1) return count;
  else return -1;
}

let arr = "Helloworld1223".split("");
let char = "l";
console.log(findAppearTimes(arr, char));
