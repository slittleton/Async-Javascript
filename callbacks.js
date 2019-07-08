// CALLBACKS

console.log('Before');
getUser(1, (user)=>{
  getRepositories(user.gitHubUsername, (repos)=> {
    console.log('Repos ')
  })
});
console.log('After');


function getUser(id, callback){
  setTimeout(()=> {
    console.log('Reading a user from the database...')
    callback({ id: id, gitHubUsername: 'mosh'})
  }, 2000);
}

function getRepositories(username, callback){
  setTimeout(()=> {
    console.log('calling GitHub Api')
    callback(['repo1','repo2','repo3'])
  }, 2000)
}