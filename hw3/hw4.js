const fibonacci = [1, 1, 2, 3, 5, 8];

// TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
const multipleByTwoFib = fibonacci.map((arr) => arr*2);
// Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
const plusTenFib = fibonacci.map((number) => number +10 );
// Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
const onlyBigFib = fibonacci.filter((number) => number > 3);

console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
console.log(onlyBigFib); // => [5, 8]

function callbackWithArrayLength(arr, callback) {
    console.log(arr);
    callback(arr.length);
    callback(-1);
  }
  
  callbackWithArrayLength([1], (length) => {
    console.log(length);
  });
  
  callbackWithArrayLength([1, 1], (len) => {
    console.log(len);
  });
  callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
    console.log(l);
  });