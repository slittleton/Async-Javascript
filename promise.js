const p = new Promise((resolve, reject) => {
  // start some async work
  setTimeout(() => {
    resolve(1);
    reject(new Error("message"));
  }, 2000);
});

p.then(result => console.log("Result", result)).catch(err =>
  console.log("Error", err.message)
);


//////////////////////////////////////////

console.log("Before");
getUser(1)
  .then(user => getRepositories(user))
  .then(repos => getCommits(repos))
  .then(commits => console.log('Latest Commit: ', commits[commits.length-1]))
console.log("After");

function getUser(id){
  return new Promise((resolve, reject)=>{
    setTimeout(()=> {
      console.log('Reading a user from the database...')
      let user ={ id: id, gitHubUsername: 'mosh'}
      resolve(user)
    }, 1000);
  })
}

function getRepositories(user){
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      console.log('calling GitHub Api for user', user.gitHubUsername)
      resolve(['repo1','repo2','repo3'])
    }, 1000)
  })
}

function getCommits(commits){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      console.log('getting commits')
      resolve(commits)
    }, 1000)
  })
}