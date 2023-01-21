'use strict';

//filter - фильтрует по заданным значениям

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(name => {
   return name.length < 5;
});
console.log(shortNames);

//map - модифицируют части массива

const answers = ['IvaN','Anna','Hello'];

const result = answers.map(item =>item.toLowerCase());

console.log(result);

//every/some - дают булевые значения

const some = [4, 'qq', 'qwfwqfew'];

console.log(some.some(item => typeof(item) === 'number'));

const every = [4, 'qq', 'qwfwqfew'];

console.log(every.every(item => typeof(item) === 'number'))

//reduce схлопывает или собирает массив в единое целое

const arr = [4, 5, 1, 2, 6]; //number

const resultTwo = arr.reduce((sum, current) => sum + current);
console.log(resultTwo);

const arrTwo = ['IvaN','Anna','Hello']; //string

const resultThree = arrTwo.reduce((sum, current) => `${sum}, ${current}`);
console.log(resultThree);


//Применение нескольких методов

const obj = {
   ivan: 'persone',
   anna: 'persone',
   dog: 'animal',
   cat: 'animal'
};

const arrThree = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(arrThree);



