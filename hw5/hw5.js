
function retMin(a, b) {
  return a < b ? a : b;
} // Напишите функцию, которая возвращает меньшее из 2 чисел
//console.log(remin(7,3));

function retOdd(c) {
  if (c % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
} // Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.
//console.log(retOdd(3));
//console.log(retOdd(6));

function consSquare(d) {
  const square = d * d;
  console.log(`Квадрат числа ${d}: ${d}`);
}

//consSquare(7); // Выведет: Квадрат числа 7: 49

function retConsSquare(d) {
  return d * d;
}
  // 3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

  function ageCheck() {
    let age = prompt('введите ваш возраст?');
  
    if (age < 0) {
      console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) { 
      console.log('Привет, друг!');
    } else {
      console.log('Добро пожаловать!');
    }
  }
  
  ageCheck(); // Задание 4

  function multNums(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
    } else {
      return num1 * num2;
    }
  } 
 
  //console.log(multNums(10, 8)); 
  //console.log(multNums('test', 7)); // Задание 5












