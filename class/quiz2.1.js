class Staff {
  constructor(name, team, time, pay) {
    this.name = name;
    this.team = team;
    this.time = time;
    this.pay = pay;
  }

  monthPay = () => {
    return this.pay * this.time;
  };
}

class FullTime extends Staff {
  static #PAY_RATE = 10000;
  constructor(name, team, time) {
    super(name, team, time, FullTime.#PAY_RATE);
  }
}

class PartTime extends Staff {
  static #PAY_RATE = 8000;
  constructor(name, team, time) {
    super(name, team, time, PartTime.#PAY_RATE);
  }
}

const wook = new FullTime('명욱', '개발팀', 30);
const anko = new PartTime('앙꼬', '댕댕이팀', 20);
console.log(wook);
console.log(anko);
console.log(wook.monthPay());