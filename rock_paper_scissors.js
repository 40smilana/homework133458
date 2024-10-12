const arrayRockPaperScissors = ['камень', 'ножницы', 'бумага'];

function rockPapeScissors() {
    const userСhoice = prompt('Привет! Что выбираешь: камень, ножницы или бумага?')
    const randomIndex = Math.floor(Math.random() * arrayRockPaperScissors.length);
    const computerСhoice = arrayRockPaperScissors[randomIndex];
    console.log(`Выбор пользователя ${userСhoice}`);
    console.log(`Выбор компьютера ${computerСhoice}`);

    if (userСhoice.toLowerCase() === computerСhoice.toLowerCase()) {
        alert(`Я тоже загадал ${computerСhoice}, поэтому у нас ничья`);
    } else if 
    ((userСhoice.toLowerCase() === 'камень' && computerСhoice.toLowerCase() === 'ножницы') ||
    (userСhoice.toLowerCase() === 'ножницы' && computerСhoice.toLowerCase() === 'бумага') ||
    (userСhoice.toLowerCase() === 'бумага' && computerСhoice.toLowerCase() === 'камень')) {
        alert(`А я выбрал ${computerСhoice}, поэтому ты победил, поздравляю! :)`);
    } else {
        alert(`Я выиграл, т.к. загадал ${computerСhoice}`);
    }
}