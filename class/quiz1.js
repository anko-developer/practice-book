// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기

class Counter {
  #value;

  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  
  // 외부에서 읽을 수만(볼 수만) 있기 때문에 접근제어자 get으로
  get value() {
    return this.#value;
  }

  increment = () => {
    // this.#value = ++this.#value;
    ++this.#value;
    console.log(this.#value);
  }
}

const counter = new Counter(2);
counter.increment(); // 3
counter.increment(); // 4
counter.increment(); // 5
counter.increment(); // 6
counter.increment(); // 7
counter.increment(); // 8
