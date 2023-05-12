// static 정적 프로퍼티, 메서드
class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    return new Fruit('banana', '바나나아이콘');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name} ${this.emoji}`);
  }
}

const banana = Fruit.makeRandomFruit();
const apple = new Fruit('apple', '사과아이콘');
const orange = new Fruit('orange', '오렌지아이콘');

console.log(apple.name);
console.log(apple.emoji);
console.log(orange.name);
console.log(orange.emoji);
apple.display();
console.log(banana);