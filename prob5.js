function findMin(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < c) {
    return b;
  } else {
    return c;
  }
}

let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
let num3 = +prompt("Enter third number:");
alert(`Minimum number: ${findMin(num1, num2, num3)}`);
