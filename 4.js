"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

for (let i = 1; i <= 20; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "x";
  }
  console.log(row);
}
