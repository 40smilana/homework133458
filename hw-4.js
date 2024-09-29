let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}

let q = 1;
while (q <= 5) {
    console.log(q);
    q++;
}

let k = 7;
do {
    console.log(k);
    k++;
} while (k <= 22);

const obj = {
    nameOne: 'Коля - зарплата 200 доллоров',
    nameTwo: 'Вася - зарплата 300 доллоров',
    nameTree: 'Петя - зарплата 400 доллоров'
}
for (const key in obj) {
    console.log(`${obj[key]}`);
}

let n = 1000;
let num = 0;
while (n <= 1000) {
    n = n/2
    if (n < 50) {
        break
    }
    num++;
    console.log(n);
}
console.log(num);

let firstFriday = 5;
for (let friday = firstFriday; friday <= 31; friday += 7) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    
}
              
