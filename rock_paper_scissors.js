const arrayRockPaperScissors = ['камень', 'ножницы', 'бумага'];

function rockPapeScissors() {
    const userСhoice = prompt('Привет! Что выбираешь: камень, ножницы или бумага?').toLocaleLowerCase();
    const randomIndex = Math.floor(Math.random() * arrayRockPaperScissors.length);
    const computerСhoice = arrayRockPaperScissors[randomIndex].toLocaleLowerCase();
    console.log(`Выбор пользователя ${userСhoice}`);
    console.log(`Выбор компьютера ${computerСhoice}`);

    if (userСhoice === computerСhoice) {
        alert(`Я тоже загадал ${computerСhoice}, поэтому у нас ничья`);
    } else if 
    ((userСhoice === 'камень' && computerСhoice === 'ножницы') ||
    (userСhoice === 'ножницы' && computerСhoice === 'бумага') ||
    (userСhoice === 'бумага' && computerСhoice === 'камень')) {
        alert(`А я выбрал ${computerСhoice}, поэтому ты победил, поздравляю! :)`);
    } else {
        alert(`Я выиграл, т.к. загадал ${computerСhoice}`);
    }
}