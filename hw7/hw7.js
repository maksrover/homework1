let originalString = "js";
let upperCaseString = originalString.toUpperCase();

console.log(upperCaseString); // Преобразуйте строку js в верхний регистр JS.


function zadanie2(arr, searchString) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const currentString = arr[i].toLowerCase();
    const searchSubstring = searchString.toLowerCase();

    if (currentString.startsWith(searchSubstring)) {
      result.push(arr[i]);
    }
  }

  return result;
}

const array1 = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const searchString1 = 'ко';
console.log(zadanie2(array1, searchString1));

const array2 = ['яблоко', 'груша', 'гриб', 'огурец'];
const searchString2 = 'гру';
console.log(zadanie2(array2, searchString2));

const array3 = ['Дом', 'Банк', 'Больница', 'Театр'];
const searchString3 = 'Кино';
console.log(zadanie2(array3, searchString3)); // [] // zadanie2 Создайте функцию, которая в качестве параметров принимает массив строк и строку.

let zadanie3 = 32.58884;

let roundedMin = Math.floor(zadanie3);
let roundedMax = Math.ceil(zadanie3);
let roundedNearest = Math.round(zadanie3);

console.log(roundedMin);
console.log(roundedMax);
console.log(roundedNearest); // zadanie3 Округлите число 32.58884 

let zadanie4 = [52, 53, 49, 77, 21, 32];

let minNumber = Math.min(...zadanie4);
let maxNumber = Math.max(...zadanie4);

console.log(minNumber);
console.log(maxNumber); // zadanie4 Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.


function getRandomNumber() {
  const zadanie5 = Math.floor(Math.random() * 10) + 1;
  console.log(zadanie5);
}

getRandomNumber(); // Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

