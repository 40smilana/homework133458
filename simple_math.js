const operator = ['+', '-', '*', '/'];

function simpleMath() {
  const numOne = Math.floor(Math.random() * 10) + 1;
  const numTwo = Math.floor(Math.random() * 10) + 1;
  const operation = operator[Math.floor(Math.random() * operator.length)];
  const randomTask = `${numOne} ${operation} ${numTwo}`;
  const userReply = Number(prompt(`Привет! Реши задачу: ${randomTask}`));
  const rightReply = eval(randomTask);

if (operation === '/' && numTwo < 0) {
  return randomTask();
} else if (userReply === rightReply) {
  alert(`Верно`);
} else {
  alert(`Неверно, ответ ${rightReply}`);
}
}
