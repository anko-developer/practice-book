function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => EGG`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => Fry`);
}

function getChicken() {
  // return Promise.reject(new Error('치킨을 가지고 올 수 없음'));
  return Promise.resolve(`풀떼기 => 치킨`);
}

async function chickenLife() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '췩힌';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

chickenLife().then(data => console.log(data));

