"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.


// Генерируем массив из 5 цифр в диапазоне [0, 9]
const generatedArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));

// Выводим сгенерированный массив
console.log("Сгенерированный массив:", generatedArray);

// 1. Сумма элементов массива
const sum = generatedArray.reduce((acc, num) => acc + num, 0);
console.log("Сумма элементов массива:", sum);

// 2. Минимальное значение в массиве
const min = Math.min(...generatedArray);
console.log("Минимальное значение в массиве:", min);

// 3. Новый массив, содержащий индексы элементов, равных 3
const indicesOfThree = [];
generatedArray.forEach((value, index) => {
  if (value === 3) {
    indicesOfThree.push(index);
  }
});
console.log("Индексы элементов со значением 3:", indicesOfThree);