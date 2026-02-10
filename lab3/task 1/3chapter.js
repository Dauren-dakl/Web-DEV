let user = {
  // объект
  name: "John", // по ключу "name" хранится значение "John"
  age: 30, // по ключу "age" хранится значение 30
};
delete user.age;

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5, // имя свойства взято из переменной fruit
};

alert(bag.apple); // 5 если fruit="apple"

// let obj = {
//   0: "test", // то же что "0": "test"
// };

// оба вызова alert обращаются к одному свойству (число 0 конвертируется в строку "0")
alert(obj["0"]); // test
alert(obj[0]); // test (то же свойство)

// let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

// до вызова
let menu = {
  width: 200,
  height: 300,
  title: "Моё меню",
};

multiplyNumeric(menu);

// после вызова
menu = {
  width: 400,
  height: 600,
  title: "Моё меню",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // undefined (потому что this ссылается на глобальный объект)

function makeUser() {
  return this; // в этот раз нет объектного литерала
}

alert(makeUser().name); // Ошибка: Cannot read property 'name' of undefined

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user = makeUser();

alert(user.ref().name); // John

let calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Сколько добавить?", 0);
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert(new A() == new B()); // true