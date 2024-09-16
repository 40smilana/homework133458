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

for (let n = 1000; n <= 1000 ; n = n / 2) {
    if (n < 50) {
        break;
    }
    console.log(n / 2);
}

let firstFriday = 5
console.log("Сегодня пятница " + firstFriday + "-е число. Необходимо подготовить отчет.");
      for (let Friday = 5; Friday <= 31; Friday = Friday + 7) {
    if (Friday >= 31 - 7) {
        break
    }
    console.log("Сегодня пятница " + [Friday + 7] + "-е число. Необходимо подготовить отчет.");
}
              
