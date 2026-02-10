function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert(`Степень ${n} не поддерживается,
      пожалуйста, введите целое число больше нуля`);
} else {
  alert(pow(x, n));
}

describe("Возводит x в степень n", function () {
  it("5 в степени 1 равно 5", function () {
    assert.equal(pow(5, 1), 5);
  });
  it.only("5 в степени 2 равно 25", function () {
    assert.equal(pow(5, 2), 25);
  });

  it("5 в степени 3 равно 125", function () {
    assert.equal(pow(5, 3), 125);
  });
});

if (!Math.trunc) {
  // если такой функции нет
  // реализуем её
  Math.trunc = function (number) {
    
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}