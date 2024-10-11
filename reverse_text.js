function reverseText() {
    let userWord = prompt("Введи слово, я переверну его и выведу результат");
    let arrayWord = userWord.split('');
    let reverseWord = arrayWord.reverse();
    alert(reverseWord.join(''));
}