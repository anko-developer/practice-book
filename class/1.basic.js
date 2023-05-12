// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스

class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name} ${this.emoji}`);
  }
}

const apple = new Fruit('apple', '사과아이콘');
const orange = new Fruit('orange', '오렌지아이콘');

console.log(apple.name);
console.log(apple.emoji);
console.log(orange.name);
console.log(orange.emoji);
apple.display();