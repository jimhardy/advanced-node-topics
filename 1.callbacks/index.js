console.log('before');
// when the result of function is ready, callback function will run
getUser(1, (user) => {
  console.log('user:', user);
  getRepos(user, (repos) => {
    console.log('repos:', repos);
    //! use of callbacks can cause callback hell
  });
});
console.log('after');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('reading from db...');
    callback({ id: id, username: 'jimmy' });
  }, 2000);
}

function getRepos(username, callback) {
  setTimeout(() => {
    console.log('calling github api');
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}
