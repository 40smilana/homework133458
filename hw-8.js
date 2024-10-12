//1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));

//2
function isPositive(n) {
    return n >= 0;
    }
    function isMale(obj) {
    return obj.gender === 'male';
    }
    function filter(arr, ruleFunction) {
    const mass = [];
    arr.map((i) => {
        if(ruleFunction(i)) {
            mass.push(i);
        }
    });
    return mass;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const peoples = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(peoples, isMale));

//3
function funcCurrentDate() {
    const currentDate = new Date();
    console.log(`Сейчас ${currentDate}`);
}
const int = setInterval(funcCurrentDate, 3000);
const stop = 30 * 1000;
setTimeout(() => {
    clearInterval(int);
    console.log('30 секунд прошло');
}, stop);

//4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})


//5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))