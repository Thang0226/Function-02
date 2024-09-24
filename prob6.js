function isZPlus(number) {
  if (number % 1 == 0) {
    if (number > 0) return true;
  }

  return false;
}

num = +prompt("Nhap vao mot so bat ky:");
if (isZPlus(num)) {
  alert("Day la so nguyen duong");
} else {
  alert("Day KHONG la so nguyen duong");
}
