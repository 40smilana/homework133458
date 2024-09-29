const n = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < n.length; i++) {
    const el = n[i];
    if (el === 10) break;
    console.log(el);
}

const num = [1, 5, 4, 10, 0, 3];
let index = num.indexOf(4);
console.log(index);

const numb = [1, 3, 5, 10, 20];
let space = numb.join(" ");
console.log(space);

const array = [];
for (let i = 0; i < 3; i++) {
    const subarray = [];
    for (let i = 0; i < 3; i++) {
        subarray.push(1);
    }
    array.push(subarray);
}
console.log(array);

one = [1, 1, 1];
one.push(2, 2, 2);
console.log(one);

del = [9, 8, 7, 'a', 6, 5];
del.sort();
del.pop();
console.log(del);

guess = [9, 8, 7, 6, 5];
let userGuess = Number(prompt("Угадай число: "));
if (guess.includes(userGuess)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

words = ['a', 'b', 'c', 'd', 'e', 'f'];
const revWords = words.reverse();
const str = revWords.join("");
console.log(str);

array = [[1, 2, 3],[4, 5, 6]];
console.log(array.flat());
