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

function isPositive(number) {
  return number > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  const result = [];
  
  for (const item of arr) {
    if (ruleFunction(item)) {
      result.push(item);
    }
  }
  
  return result;
}

console.log(filter([3, -4, 1, 9], isPositive)); 

const zadanie2 = [
   { name: 'Глеб', gender: 'male' },
   { name: 'Анна', gender: 'female' },
   { name: 'Олег', gender: 'male' },
   { name: 'Оксана', gender: 'female' }
];

console.log(filter(zadanie2, isMale));  // zadanie2

let zadanie3 = 0;

function printCurrentDate() {
  console.log(new Date());
  zadanie3 += 3; 
  if (zadanie3 >= 30) {
    clearInterval(interval); 
    console.log("30 секунд прошло");
  }
}

const interval = setInterval(printCurrentDate, 3000); // zadanie3




