let admin, name; // можно объявить две переменные одновременно

name = "John";

admin = name;

alert(admin); // "John"

// выражение - число 1
alert(`hello ${1}`); // hello 1

// выражение - строка "name"
alert(`hello ${"name"}`); // hello name

// выражение - переменная, вставляем её
alert(`hello ${name}`); // hello John

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 3

// 5 > 4 → true
// "apple" > "pineapple" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
      ? "Greetings"
      : login == ""
        ? "No login"
        : "";

// Выполнится.
// Результат -1 || 0 = -1, истинное значение
if (-1 || 0) alert("first");

// Не выполнится
// -1 && 0 = 0, ложное значение
if (-1 && 0) alert("second");

// Выполнится
// Оператор && имеет более высокий приоритет чем ||
// поэтому -1 && 1 выполняется первым, получаем цепочку:
// null || -1 && 1  ->  null || 1  ->  1
if (null || (-1 && 1)) alert("third");

let userName = prompt("Кто там?", "");

if (userName === "Admin") {
  let pass = prompt("Пароль?", "");

  if (pass === "TheMaster") {
    alert("Добро пожаловать!");
  } else if (pass === "" || pass === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (userName === "" || userName === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}

let i = 3;

alert(i--); // показывает 3, уменьшает i до 2

alert(i--); // показывает 2, уменьшает i до 1

alert(i--); // показывает 1, уменьшает i до 0

// готово, проверка while(i) останавливает цикл

// let i = 0;
while (i < 3) {
  alert(`число ${i}!`);
  i++;
}

let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

// let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2,3");
    break;
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте положительное целое число`);
} else {
  alert(pow(x, n));
}

let age = prompt("Сколько вам лет?", 18);

let welcome;

if (age < 18) {
  welcome = function () {
    alert("Привет!");
  };
} else {
  welcome = function () {
    alert("Здравствуйте!");
  };
}

welcome(); // теперь работает

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение."),
);

// let age = prompt("Ваш возраст?", 18);

switch (age) {
  case 18:
    alert("Не сработает"); // результат prompt - строка, не число
    break;

  case "18":
    alert("Это работает!");
    break;

  default:
    alert("Любое значение, не равное указанным выше");
}



// выражение справа
// let sum = (a, b) => a + b;

// или многострочный синтаксис с { ... }, здесь нужен return:
let sum = (a, b) => {
  // ...
  return a + b;
}

// без аргументов
let sayHi = () => alert("Привет");

// с одним аргументом
let double = n => n * 2;