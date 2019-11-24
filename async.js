const urls = [
  "https_//jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

// Promise simple
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
  .catch(err => console.log("Error", err));

// Fetch returns a promise
fetch(urls[0])
  .then(resp => resp.json())
  .then(console.log);

// Promise all
Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json());
  })
)
  .then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(err => console.log(err))
  .finally(() => console.log("Finally fires regardless"));

// Async Await
async function fetchUsers() {
  const resp = await fetch(urls[0]);
  const data = await resp.json();
  console.log(data);
}

// Multiple
const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(resp => resp.json()))
    );
    console.log(users);
    console.log(posts);
    console.log(albums);
  } catch (err) {
    console.log("Error: ", err);
  }
};

// Array of promises
const getMoreData = async function() {
  // Make an array of promises
  const arrayOfPromises = urls.map(url => fetch(url));
  // Loop through promises
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};
