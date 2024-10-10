const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

let counter = 0;

function askUser(quizItem) {
    let questionText = quizItem.question + '\n';
    quizItem.options.forEach(option => {
        questionText += option + '\n';
    });

    const userAnswer = prompt(questionText);
    
    if (parseInt(userAnswer) === quizItem.correctAnswer) {
        alert("Верно, ты заработал + балл :)");
        counter++;
    } else {
        alert("Не угадал, балл останется у меня. Верный ответ:" + " " + quizItem.options[quizItem.correctAnswer - 1]);
    }
}
askUser(quiz[0]);
askUser(quiz[1]);
askUser(quiz[2]);
alert(`Твои баллы: ${counter}`);