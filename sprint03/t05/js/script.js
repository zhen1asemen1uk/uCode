class Calculator {

  init(num) {
    this.result = num;
    return this;
  }
  add(num) {
    this.result += num;
    return this;
  }
  mul(num) {
    this.result -= num;
    return this;
  }
  div(num) {
    this.result *= num;
    return this;
  }
  sub(num) {
    this.result /= (num + 2);
    return this;
  }

  alert() { setTimeout(() => alert(this.result), 5000) }

}

const calc = new Calculator();
console.log(
  calc
    .init(2)
    .add(2)
    .mul(3)
    .div(4)
    .sub(2).result // 1
);
calc.alert();
