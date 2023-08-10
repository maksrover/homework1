const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
  if (array[i] === 10) {
    console.log(array[i]);
    break;
  }
  console.log(array[i]); // Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.
}

const zadanie2 = [1, 5, 4, 10, 0, 3];
const index = zadanie2.indexOf(4);

console.log(` ${index}`); // Найдите позицию (индекс) числа 4 в этом массиве.

const zadanie3 = [1, 3, 5, 10, 20];
const result = zadanie3.join(' ');

console.log(result); // С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

let a = [1, 1, 1];
let b = a;
let c = b;
const zadanie4 = [a, b, c];

console.log(zadanie4); //С помощью вложенных циклов создайте многомерный массив вида:[[1, 1, 1], [1, 1, 1], [1, 1, 1]]

const zadanie5 = [1, 1, 1];
zadanie5.push(2, 2, 2);

console.log(zadanie5); // Добавьте в конец массива значения 2, 2, 2.


const zadanie6 = [9, 8, 7, 'a', 6, 5];
zadanie6.sort();

const filteredZadanie6 = zadanie6.filter(item => typeof item === 'number');

console.log(filteredZadanie6); //Oтсортируйте массив и удалите букву 'a' из данного массива.

const zadanie7 = [9, 8, 7, 6, 5];
const guess = parseInt(prompt('Угадай число из массива: 9, 8, 7, 6, 5'));

if (zadanie7.includes(guess)) {
  alert('Угадал');
} else {
  alert('Не угадал');
} // вывести в alert «Угадал», в противном случае вывести «Не угадал».Zadanie7

const zadanie8 = 'abcdef';

const reverse = zadanie8.split('').reverse().join('');

console.log(reverse); // Reverse. Zadanie8

const zadanie9 = [[1, 2, 3], [4, 5, 6]];
const merge = [].concat(...zadanie9);

console.log(merge); // Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6]

const zadanie10 = [3, 7, 2, 9, 5, 8, 1, 4, 6, 10];

for (let i = 0; i < zadanie10.length - 1; i++) {
  const currentElement = zadanie10[i];
  const nextElement = zadanie10[i + 1];
  const sum = currentElement + nextElement;
  
  console.log(`Сумма ${currentElement} и ${nextElement} равна ${sum}`);
} //Задание 10

function zadanie11(num) {
  const squaredArray = num.map(number => number ** 2);
  return squaredArray;
}

const input = prompt('Введите массив целых чисел через пробел:');
const inputArray = input.split(' ').map(Number);

const squaredResult = zadanie11(inputArray);

console.log(squaredResult); // Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.











