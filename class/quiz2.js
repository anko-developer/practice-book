class Employee {
  constructor(name, department, time, payRate)  {
    this.name = name;
    this.department = department;
    this.time = time;
    this.payRate = payRate;
  }

  calcPay = () => {
    return this.time * this.payRate; 
  }
}

class FullTime extends Employee {
  static #PAY_RATE = 10000;
  constructor(name, department, time) {
    super(name, department, time, FullTime.#PAY_RATE);
  }
}

class PartTime extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, department, time) {
    super(name, department, time, PartTime.#PAY_RATE);
  }
}

const wook = new FullTime('명욱', '개발팀', 30);
const anko = new PartTime('앙꼬', '댕댕이팀', 20);

console.log(wook.calcPay());
console.log(anko.calcPay());
