//1
const n = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < n.length; i++) {
    const el = n[i];
    if (el === 10) break;
    console.log(el);
}

//2
const num = [1, 5, 4, 10, 0, 3];
let index = num.indexOf(4);
console.log(index);

//3
const numb = [1, 3, 5, 10, 20];
let space = numb.join(" ");
console.log(space);

//4
const array = [];
for (let i = 0; i < 3; i++) {
    const subarray = [];
    for (let i = 0; i < 3; i++) {
        subarray.push(1);
    }
    array.push(subarray);
}
console.log(array);

//5
one = [1, 1, 1];
one.push(2, 2, 2);
console.log(one);

//6
del = [9, 8, 7, 'a', 6, 5];
del.sort();
del.pop();
console.log(del);


//7
const guess = [9, 8, 7, 6, 5];
let userGuess = Number(prompt("Угадай число: "));
if (guess.includes(userGuess)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//8
words = ['a', 'b', 'c', 'd', 'e', 'f'];
const revWords = words.reverse();
const str = revWords.join("");
console.log(str);

//9
array = [[1, 2, 3],[4, 5, 6]];
console.log(array.flat());

//10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] >= 10) {
        break;
    }
    console.log(numbers[index] + numbers[index + 1]);
}

//11
function quad(r) {
    return r.map(x => x ** 2);
}
console.log(quad([2, 5, 8]));

//12
const line = ["ромашка", "факел", "йогурт"];
const lengths = getL(line);
function getL(letter) {
    return letter.map(l => l.length);
}
console.log(lengths);

//13
function filterN() {
    const getN = prompt("Введи числа через пробел, я выведу отрицательные из них");
    const allN = getN.split(' ').map(Number);
    const negativeN = allN.filter(num => num < 0);
    return negativeN;
}
const result = filterN();
console.log("Gena na", result);

//14
function genArray() {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 10) + 1);
    }
    return randomArray;
}

function findEvenN(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers;
}
const randomArray = genArray();
const evenNumbers = findEvenN(randomArray);
console.log(randomArray);
console.log(evenNumbers);

//15
function generArray() {
    const rArray = [];
    for (let i = 0; i < 6; i++) {
        rArray.push(Math.floor(Math.random() * 6) + 1);
    }
    return rArray;
}

function calc(arrMath) {
    const sum = arrMath.reduce((acc, o) => acc + o);
    return sum / arrMath.length;
}
const randomNumbers = generArray(6, 1, 10);
const average = calc(randomNumbers);
console.log(randomNumbers);
console.log(average);