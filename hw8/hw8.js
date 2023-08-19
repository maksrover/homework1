const zadanie1 = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

zadanie1.sort((a, b) => {
 if (a.age > b.age) {
   return 1;
 }
 if (a.age < b.age) {
   return -1;
 }
 return 0;
});

console.log(zadanie1); // zadanie1




