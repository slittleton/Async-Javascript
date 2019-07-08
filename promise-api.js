// Creating Settled Promises
// sometimes you want to create a promise that is already resolved
// this is useful during unit testing
// so you can simulate a condition where an asynchronous action completes successfully

const p = Promise.resolve({id: 1});

p.then(result=> console.log(result))

// similarly you may want to create a promise that has already been rejected

const r = Promise.reject(new Error('reason for rejection...'))

r.catch(error => console.log(error));