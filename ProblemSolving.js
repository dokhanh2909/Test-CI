// EX1
function findOppositeNumber(n, inputNumber) {
  let num = n / 2;
  let result = num + inputNumber;
  if (inputNumber < 0 || inputNumber >= n)
    alert(`Input Number must be >= 0 or <= ${n - 1}`);
  if (result <= n) return result;
  else return (result = result - n);
}
console.log(findOppositeNumber(10, 2));

// EX2
function merge2String(a, b) {
  let arr1 = a.split("");
  let arr2 = b.split("");
  let arr3 = [];
  let lengt = 0;
  if (arr1.length > arr2.length) lengt = arr1.length;
  else lengt = arr2.length;
  for (let i = 0; i < lengt; i++) {
    arr3.push(arr1[i]);
    arr3.push(arr2[i]);
  }
  return (arr3 = arr3.join(""));
}
console.log(merge2String("abc", "0123"));
