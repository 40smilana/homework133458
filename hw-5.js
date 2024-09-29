function min(a, b) {
    return (a < b ? a : b);
  }
  console.log(min(4, 6));
  console.log(min(7, 3));
  console.log(min(5, 5));

  function evenOdd() {
    const num = parseInt(prompt("Введите число"));
  
    if (num % 2 === 0) {
        return "Число четное";
    } else {
      return "Число нечетное";
    }
  }
  
  const result = evenOdd();
  console.log(result);

  
  function squage() {
    let enterN = prompt("Введите число");
    let quage = enterN * enterN;
    console.log(quage);
  }
  
  squage();

  function age() {
    let enterAge = prompt("Введи сколько тебе полных лет");

    if (enterAge < 0) {
      alert('Вы ввели неправильное значение');
    } else if (enterAge > 0 && enterAge < 12) {
      alert('Привет, друг!');
    } else if (enterAge >= 13) {
      alert('Добро пожаловать!');
    }
    
  }

  age();

  function twoN() {
    let enterFirstN = prompt('Введи первое число');
    let enterSecondN = prompt('Введи второе число');
    const firstN = parseInt(enterFirstN);
    const secondN = parseInt(enterSecondN);
    if (!isNaN(firstN && secondN)) {
      alert(firstN * secondN);
    } else {
      alert('Одно или оба значения не являются числом');
    } 
  }

  twoN();

  function ifNum() {
    let enterNum = prompt('Введите число');
    if (!isNaN(enterNum)) {
      const inCube = enterNum * enterNum * enterNum;
      console.log(`n в кубе равняется <${inCube}>`);
    } else {
      console.log('Переданный параметр не является числом');
    }
  }
  ifNum();
  
    const circle1 = {
      radius: 10,
      getArea: function() {
        console.log(this.radius * this.radius * 3.14);  
      },
      getPerimeter: function() {
        console.log(this.radius * 2 * 3.14);
      }
    }

    const circle2 = {
      radius: 20,
      getArea: function() {
        console.log(this.radius * this.radius * 3.14);  
      },
      getPerimeter: function() {
        console.log(this.radius * 2 * 3.14);
      }
    }

    circle1.getArea();
    circle1.getPerimeter();
    circle2.getArea();
    circle2.getPerimeter();
    

