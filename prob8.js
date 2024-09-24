function reverseArray(array) {
  // change the array in-place
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

let arr = [1, 2, 3, 4, 5, 6];
reverseArray(arr);
console.log(arr);
