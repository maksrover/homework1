
let salut = 0;

while (salut < 2) {
    console.log("Привет");
    salut++;
} //Выведите в консоль 2 раза слово «Привет»

for (let i = 1; i <= 5; i++) {
    console.log(i);
} // Выведите в консоль цифры от 1 до 5.    

for (let i = 7; i <= 22; i++) {
    console.log(i);
} //Выведите в консоль числа от 7 до 22

let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
} // Дан объект obj с ключами «Коля», «Вася», «Петя» и с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля — зарплата 200 долларов.'

let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log("Результат деления: " + n);
console.log("Количество итераций: " + num); // Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация — это проход цикла), и запишите его в переменную num.

let dayofweek = 5;
let day = 1;

while (day <= 31) {
  if (dayofweek === 5) { // Если день недели равен 5 (пятница)
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
  }

  // Увеличиваем день недели на 1 и день месяца на 1, чтобы перейти к следующему дню.
  dayofweek = (dayofweek % 7) + 1;
  day++;
} //"Сегодня пятница, ...-е число. Необходимо подготовить отчет."
