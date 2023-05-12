// 접근제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = '과일';

  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#type} ${this.#name} ${this.#emoji}`);
  }
}

const apple = new Fruit('apple', '사과아이콘');
// 이런식으로 외부에서 수정이 불가능하게 하기 위해 접근제어자가 필요 ex) #name;
// apple.name = '오랜쥐'
console.log(apple);