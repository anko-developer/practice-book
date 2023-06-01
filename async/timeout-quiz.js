function runInDelay(callback, seconds) {
  const timeSeconds = seconds * 1000;
  if(timeSeconds < 0) console.log('오마이갓');
  setTimeout(callback, seconds * 1000);
}

runInDelay(() => {
  console.log('test');
}, 3);