// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자~!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // super는 부모클래스를 말하고 부모클래스에 정의된 컬러를 가져온 것이다.
    this.ownerName = ownerName;
  }

  play() {
    console.log('놀자!');
  }

  // 부모 클래스에 eat 메서드가 있지만 
  // 이렇게 오버라이딩 할 수도 있다.
  eat() {
    super.eat(); // 부모클래스의 eat 메서드를 호출하고, 아래 내가 추가한 기능까지 읽게 된다.
    console.log('댕댕이가 먹는다!');
  }
}
const dog = new Dog('누렁이', '명욱');
console.log(dog);
dog.play();
dog.eat();