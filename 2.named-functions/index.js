console.log('before');
getUser(1, getRepos);

console.log('after');

function getRepos(user) {
  console.log('getrepos');
  getRepos(user.username, getCommits);
}

function getCommits(repo) {
  console.log('getcommits');
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log('reading from db...');
    console.log('username');
    callback({ id: id, username: 'jimmy' });
  }, 2000);
}

function getRepos(username, callback) {
  setTimeout(() => {
    console.log('calling github api');
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}
