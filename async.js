// Promise
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff worked");
  } else {
    reject("Error, it broke");
  }
});

promise
  .then(result => console.log(result))
  .then(result2 => {
    throw Error;
    console.log(result2);
  })
  .catch(() => console.log("Error"));

// Promise all
const urls = [
  "https_//jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

// Async Await
