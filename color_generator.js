const button = document.getElementById('changeColor');
const back = document.getElementById('secondBlock');

function colorGenerator() {
    const colors = ['#003333', '#333333', '#330066', '#660000', '#000033', '#CC6600', '#669966', '#000000'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    back.style.backgroundColor = colors[randomIndex];
}

button.addEventListener('click', colorGenerator);