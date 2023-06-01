function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve('끝났어유'), seconds * 1000);
  });
}

runInDelay(2)
.then((response) => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('끝'));