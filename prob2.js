const PI = Math.PI;

function area(radius) {
  let area = PI * radius ** 2;
  return Math.round(100 * area) / 100;
}

function perimeter(radius) {
  per = 2 * PI * radius;
  return Math.round(100 * per) / 100;
}

let r = +prompt("Enter circle radius:");
alert(`Area of the circle: ${area(r)}`);
alert(`Perimeter of the circle: ${perimeter(r)}`);
