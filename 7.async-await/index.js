console.log('before');
//! Callback based approach
// getUser(1, (user) => {
//   getRepos(user, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });

//! Promise based approach
// getUser(1)
// .then((user) => getRepos(user.username))
// .then((repos) => getCommits(repos[0]))
// .then((commits) => console.log(commits))
// .catch((err) => {
//   console.log(err);
// });

//! Async/Await based approach
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepos(user.username);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log(err);
  }
}
displayCommits();

console.log('after');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('reading from db...');
      resolve({ id: id, username: 'jimmy' });
    }, 2000);
  });
}

function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('calling github api');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getting commits');
      resolve(['commit1', 'commit2', 'commit3']);
    }, 2000);
  });
}
