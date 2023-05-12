// 접근자 프로퍼티 (get)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // 프롶
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log(value);
  }
}

const anko = new Student('앙꼬', '킴');
anko.firstName = '명욱';
console.log(anko.fullName);
anko.fullName = '킴명욱!!!!!';