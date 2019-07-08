// Async Await
// helps you write asynchronous code that looks like synchronous code
// put async before name of function you want to use await inside of
// async await uses promises but makes it look more like synchronous code

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  }
  catch(err) {
    console.log(err)
  }

}

displayCommits();


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