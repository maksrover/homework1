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

