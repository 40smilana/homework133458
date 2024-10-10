//1
const str = 'js';
console.log(str.toUpperCase());

//2
function arrStr(arr, str) {
    const string = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(string));
}
console.log(arrStr(['LAN', 'Java', 'link'], 'l'));

//3
const pi = 32.58884;
console.log(Math.floor(pi));
console.log(Math.ceil(pi));
console.log(Math.round(pi));

//4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//5
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

//6
function getMass() {
    let userN = prompt('Введи число');
    const array = [];    
    for (let index = 0; index < userN; index++) {
        array.push(Math.floor(Math.random() * userN));
    }
    const halfArray = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, halfArray);
    console.log(firstHalf);
}
getMass();

//7
function range(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const userMin = prompt("Введи min");
const userMax = prompt("Введи max");
const minValue = parseInt(userMin, 10);
const maxValue = parseInt(userMax, 10);
const randomValue = range(minValue, maxValue);
console.log(randomValue);

//8
const toDate = new Date();
console.log(toDate);

//9
const currentDate = new Date(toDate);
currentDate.setDate(toDate.getDate() + 73);
console.log(currentDate);

//10
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];


function dateTime() {
    const date = new Date();
    const today = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const day = days[date.getDay()]
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(`${today} ${month} ${year} — это ${day}`);
    console.log(`${hours}:${minutes}:${seconds}`);
}
dateTime();