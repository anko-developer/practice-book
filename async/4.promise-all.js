function getBanana() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('바나나');
    }, 1000);
  });
}

function getApple() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('사과');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 함께 가지고 오기
getBanana()
  .then(banana => getApple().then(apple => [banana, apple]))
  .then(result => console.log(result));

Promise.all([getBanana(), getApple()])
.then(fruits => console.log('all', fruits));

Promise.race([getBanana(), getApple()])
.then(fruit => console.log('race', fruit));

Promise.allSettled([getBanana(), getApple(), getOrange()])
.then(fruits => console.log('all', fruits))
.catch(error => console.log(error));