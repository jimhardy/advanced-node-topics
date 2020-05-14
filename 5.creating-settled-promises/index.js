//* creating settled promises
//? useful for creating unit tests
const p = Promise.resolve({ id: 1 });
const q = Promise.reject(new Error('reason something failed'));

p.then((result) => console.log(result));
q.catch((error) => console.log(error));
