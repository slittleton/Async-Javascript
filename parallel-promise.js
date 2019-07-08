// sometimes you want to run muliple asynchronous operations in parallel
// and when they all complete you want something to happen afterword
// such as if you need data from two different apis
// then for example you may want to take data from those apis and combine them
// and then use that data set in some way

const p1 = new Promise((resolve, reject)=> {
  setTimeout(()=> {
    console.log('Async Operation 1...');
    resolve(1);
  }, 1000)
})

const p2 = new Promise((resolve, reject)=> {
  setTimeout(()=> {
    console.log('Async Operation 2...');
    resolve(2);
  }, 1000)
})

// Promise.all takes an array of promises
// will return a new promise that will be resolved 
// when all the promises in the array have been resolved
Promise.all([p1, p2])
  .then(result => console.log('array of data from parallel promises:', result))


  // Promise.race takes an array of promises
  // as soon as one promise in the array is fulfilled
  // the promise return from Promise.race will be considred fullfilled

  const r1 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      console.log('Async 1 - Slower Operation...');
      resolve(1);
    }, 1500)
  })
  
  const r2 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      console.log('Async 2 - Faster Operation...');
      resolve(2);
    }, 1000)
  })
  

  Promise.race([r1,r2])
    .then(result=>console.log('the value of the first fullfilled promise in promise race was:', result))
    