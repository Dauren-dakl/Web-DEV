let john = {
  name: "John",
  sayHi: function () {
    alert("Привет, дружище!");
  },
};

john.sayHi(); // Привет, дружище!

let str = "Привет";

str.test = 5; // (*)

alert(str.test); // undefined (у примитивов нет свойств)

alert(Number.isFinite(123)); // true
alert(Number.isFinite(Infinity)); // false
alert(Number.isFinite(2 / 0)); // false


alert(Number.isFinite("123")); // false, потому что "123" принадлежит строковому типу, не числовому
alert(isFinite("123")); // true, потому что isFinite преобразует строку "123" в число 123

alert(parseInt("0xff", 16)); // 255
alert(parseInt("ff", 16)); // 255, без 0x тоже работает

alert(parseInt("2n9c", 36)); // 123456

function readNumber() {
  let num;

  do {
    num = prompt("Введите число, пожалуйста?", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

alert(`Прочитано: ${readNumber()}`);

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

alert(randomInteger(1, 5)); // 1
alert(randomInteger(1, 5)); // 3
alert(randomInteger(1, 5)); // случайное число от 1 до 5

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("john")); // John

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

alert(checkSpam("купи ViAgRA сейчас"));
alert(checkSpam("бесплатный xxxxx"));
alert(checkSpam("невинный кролик"));

function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert(extractCurrencyValue("$120")); // 120


let arr = [
  "Яблоко",
  { name: "Джон" },
  true,
  function () {
    alert("привет");
  },
];

// получаем объект по индексу 1 и выводим его имя
alert(arr[1].name); // Джон

// получаем функцию по индексу 3 и запускаем её
arr[3](); // привет

let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;

shoppingCart.push("Банан");

alert(fruits.length); // 4

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift()); // Джаз
styles.unshift("Рэп", "Регги");

// let arr = ["a", "b"];
//
arr.push(function () {
  alert(this);
});

arr[2](); // a,b,function(){...}

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // для каждого элемента массива
    partialSum += item; // добавляем его к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум
    if (partialSum < 0) partialSum = 0; // обнуляем если отрицательный
  }

  return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // удаляем если вне интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// let arr = [5, 3, 8, 1];
// let arr = [5, 2, 1, -10, 8];
//
filterRangeInPlace(arr, 1, 4); // удалены числа кроме от 1 до 4

alert(arr); // [3, 1]

arr.sort((a, b) => b - a); // сортировка по убыванию

alert(arr);

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((item) => item.name);

alert(names); // John, Pete, Mary

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и соединяем обратно
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

// два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages содержит 2 элемента

// ...давайте снова прочитаем первое сообщение!
readMessages.add(messages[0]);
// readMessages все еще имеет 2 уникальных элемента

// ответ: было ли сообщение[0] прочитано?
alert("Прочитано сообщение 0: " + readMessages.has(messages[0])); // true

messages.shift();
// теперь readMessages содержит 1 элемент (технически память может быть очищена позже)

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
// Объект Date мы изучим позже

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

alert(sumSalaries(salaries)); // 650

function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 января 2014
alert(getWeekDay(date)); // ПТ

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1)); // 1, (1 января 2015)
alert(getDateAgo(date, 2)); // 31, (31 декабря 2014)
alert(getDateAgo(date, 365)); // 2, (2 января 2014)

function getSecondsToday() {
  let now = new Date();

  // создаем объект с текущей датой без времени
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // разница в мс
  return Math.round(diff / 1000); // переводим в секунды
}

alert(getSecondsToday());

function getSecondsToTomorrow() {
  let now = new Date();

  // дата завтра
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now; // разница в мс
  return Math.round(diff / 1000); // переводим в секунды
}

function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // форматирование
  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (diffSec < 1) {
    return "только что";
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`;
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}

let room = {
  number: 23
};

let meetup = {
  title: "Конференция",
  occupiedBy: [{name: "Джон"}, {name: "Алиса"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));

/*
{
  "title":"Конференция",
  "occupiedBy":[{"name":"Джон"},{"name":"Алиса"}],
  "place":{"number":23}
}
*/