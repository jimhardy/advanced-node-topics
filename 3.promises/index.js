const p = new Promise((resolve, reject) => {
  // kick off async work
  // ...
  setTimeout(() => {
    resolve(1);
    reject(new Error('err'));
  }, 2000);
});

p.then((result) => {
  // resolve
  console.log(result);
}).catch((err) => {
  // reject
  console.log(err.message);
});
