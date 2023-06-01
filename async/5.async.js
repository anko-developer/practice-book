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

async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits().then(data => console.log(data));