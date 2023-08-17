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

function getRandomArrNumbers(num) {
  const length = Math.floor(num / 2);
  const result = [];

  for (let i = 0; i < length; i++) {
    const zadanie6 = Math.floor(Math.random() * (num + 1));
    result.push(zadanie6);
  }

  return result;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12)); // zadanie6 Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const zadanie7 = getRandomNumberInRange(10, 20);
console.log(zadanie7); // Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.

const zadanie8 = new Date();
const dateString = zadanie8.toDateString();
console.log(dateString); // zadanie8 Выведите в консоль текущую дату в стандартном режиме.

const zadanie9 = new Date();

const newDate = new Date(zadanie9);
newDate.setDate(zadanie9.getDate() + 73);

console.log(zadanie9.toDateString());
console.log(newDate.toDateString()); // zadanie9 Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.

function formatDateAndTime(date) {
  const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  const formattedDate = `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${weekdays[date.getDay()]}.`;
  const formattedTime = `Время: ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

  return formattedDate + '\n' + formattedTime;
}

const zadanie10 = new Date();
const formattedDateTime = formatDateAndTime(zadanie10);
console.log(formattedDateTime); // zadanie10 Написать функцию, которая на вход принимает дату, а возвращает ее отображение на русском> 

let zadanie11 = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

zadanie11 = zadanie11.sort(() => Math.random() - 0.5);

alert(zadanie11.join('\n'));

const firstGuess = prompt("Чему равнялся первый элемент массива?");
const lastGuess = prompt("Чему равнялся последний элемент массива?");

const smallFirstGuess = firstGuess.toLowerCase();
const smallLastGuess = lastGuess.toLowerCase();
const smallFirstElement = zadanie11[0].toLowerCase();
const smallLastElement = zadanie11[zadanie11.length - 1].toLowerCase();

if (smallFirstGuess === smallFirstElement && smallLastGuess === smallLastElement) {
  alert("Поздравляем, вы угадали оба элемента!");
} else if (smallFirstGuess === smallFirstElement || smallLastGuess === smallLastElement) {
  alert("Вы были близки к победе!");
} else {
  alert("Вы ответили неверно.");
}
 // zadanie11 
