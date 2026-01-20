let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 1 done");
    resolve();
  }, 1000);
});
// console.log(promise1);
promise1.then(function () {
  console.log("promise 1 resolved");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2 done");
    resolve(10);
  }, 2000);
}).then((val) => {
  console.log("promise 2 resolved", val);
});

let promise3 = new Promise((resolve, reject) => {
  let error = false;
  setTimeout(() => {
    if (!error) {
      resolve({ username: "Umra", course: "WMA" });
    } else {
      reject(new Error("Something went wrong!"));
    }
  }, 3000);
});
promise3
  .then((user) => {
    console.log(user);
    return user.course;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err);
  });

let promise4 = new Promise((resolve, reject) => {
  let error = true;
  setTimeout(() => {
    if (!error) {
      resolve({ username: "Sameen", course: "WMA", password: "123" });
    } else {
      reject(new Error("Something went wrong!"));
    }
  }, 3000);
});

async function consumedFunc4() {
  try {
    let response = await promise4;
    console.log(response);
  } catch (error) {
    console.log(error);
    
  }
}
consumedFunc4();


