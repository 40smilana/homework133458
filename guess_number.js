function guessNumbre() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess = 0;
    
    do {
      guess = prompt("Попробуй угадать число от 1 до 100");
      if (!/^\d+$/.test(guess)) {
          alert("Введи число");
          continue;
      }
      guess = Number(guess);
      if (guess < randomNumber) {
          alert("Мало, попробуй ещё раз");
      } else if (guess > randomNumber) {
          alert("Много, попробуй ещё раз");
      }
  } while (guess !== randomNumber);

  alert(`Ты угадал! Это было число ${randomNumber}!`);
}