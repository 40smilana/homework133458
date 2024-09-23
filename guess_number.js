function guessNumbre() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess = Number(prompt("Попробуй угадать число от 1 до 100"));
    while (guess != randomNumber) {
      if (guess < randomNumber) {
        guess = Number(prompt(`Мало, попробуй ещё раз`));
      } else if (guess > randomNumber) {
        guess = Number(prompt(`Много, попробуй ещё раз`));
      }
    }
    alert(`Ты угадал! Это было число ${randomNumber}!`);
  }