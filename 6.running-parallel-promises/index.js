const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('async op1');
    // reject(new Error('something failed'));
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('async op2');
    resolve(2);
  }, 2000);
});

// if any promise is rejected, then Promise.all is considered rejected
Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// resolves as soons as the first async operation completes
Promise.race([p1, p2])
  .then((result) => console.log(result, 'finished first'))
  .catch((err) => console.log(err));
