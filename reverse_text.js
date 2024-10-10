function reverseText() {
    let userText = prompt("Введи текст через пробел, я переверну его и выведу результат");
    let splitUserText = userText.split(" ");
    let reversUserText = splitUserText.reverse();
    alert(reversUserText.join(" "));
}