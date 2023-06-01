function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => EGG`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => Fry`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음'));
  // return Promise.resolve(`풀떼기 => 치킨`);
}

getChicken()
.catch(error => {
  console.log(error);
  return '췩힌';
})
.then(chicken => fetchEgg(chicken))
.then(egg => fryEgg(egg))
.then(friedEgg => console.log(friedEgg));

