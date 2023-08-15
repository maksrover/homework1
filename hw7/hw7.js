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
console.log(zadanie2(array3, searchString3)); // [] // zadanie 2Создайте функцию, которая в качестве параметров принимает массив строк и строку.

