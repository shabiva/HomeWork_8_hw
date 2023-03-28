//1 Вывести на страницу в одну строку через запятую числа от 10 до 20.
// 2 Вывести квадраты чисел от 10 до 20.
let task1 = []; 
let task2 = [];

for (let i = 10; i < 21; i++) {
    task1.push(i)
    task2.push(i*i)
}
document.write(task1.join(`, `), `<br><br>`);
document.write(task2.join(`, `), `<br><br>`);

// 3 Вывести таблицу умножения на 7.
let task3 = []; 

for (let j = 1; j < 11; j++) {
    task3.push(`7 * ${j} = ${7*j}`)
}
document.write(task3.join(`, `), `<br><br>`);

// 4 Найти сумму всех целых чисел от 1 до 15.
let task4 = [];
let sum = 0;

for (let i = 1; i<16; i++) {
    task4.push(i)
    sum+= i
}
document.write(`${task4.join(` + `)} = ${sum}`, `<br><br>`);

// 5 Найти произведение всех целых чисел от 15 до 35.
let task5 = [];
let prod = 1;

for (let j = 15; j < 36; j++) {
    task5.push(j)
    prod*= j
}
document.write(`${task5.join(` * `)} = ${prod}`, `<br><br>`);

// 6 Найти среднее арифметическое всех целых чисел от 1 до 500.
let task6 = [];
let sumForAverage = 0;

for (let i = 1; i < 501; i++) {
    task6.push(i)
    sumForAverage+= i
}

document.write(`(${task6.join(` * `)}) / ${task6.length} = ${sumForAverage/task6.length}`, `<br><br>`);

// 7 Вывести сумму только четных чисел в диапазоне от 30 до 80.
let task7 = [];
let sumForEven = 0;

for (let j = 15; j<41; j++){
    task7.push(j*2)
    sumForEven+= j*2
}

document.write(`${task7.join(` + `)} = ${sumForEven}`, `<br><br>`);

// 8 Вывести все числа в диапазоне от 100 до 200 кратных 3.
let task8 = [];

for (let i = 34; i<67; i++) {
    task8.push(i*3)
    
}

document.write(task8.join(`, `),  `<br><br>`);

// 9 Дано натуральное число. Найти и вывести на страницу все его делители.

let randomNumber = Math.floor(Math.random() * 100);
let task9 =[];

for (let j = 2; j < randomNumber; j++) {
    if(randomNumber % j == 0){task9.push(j)}
}
document.write("<br>");
// 10 Определить количество его четных делителей.

let task10 = [];
for (let p = 0; p<task9.length;p++) {
    if(task9[p] % 2 == 0){task10.push(task9[p])}
    
}
document.write(`All divisors of a number ${randomNumber}: ${task9.join(`, `)}`,  `<br><br>`);
document.write(`Quantity of even divisors is ${task10.length} of a number ${randomNumber}. [${task10.join(`, `)}]`,  `<br><br>`);
// 11 Найти сумму его парных делителей. 

// 12 Напечатайте полную таблицу умножения от 1 до 10.

let sumOfEvenDivisors= 0;
for (let q=0; q<task10.length; q++) {
    sumOfEvenDivisors +=task10[q]
}
document.write(`Sum of even divisors is ${sumOfEvenDivisors} of a number ${randomNumber}. [${task10.join(`, `)}]`,  `<br><br>`);

let task12 = [];
for (let r=1; r<11; r++) {

    for (let i = 1; i<11; i++){
        task12.push(` ${r} * ${i} = ${r*i}`)
       
    }   
}
console.log(task12);
document.write(task12.join(`;   `));








