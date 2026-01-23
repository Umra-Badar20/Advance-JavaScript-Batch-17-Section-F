// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let err = true;
//     if (err) {
//       reject(new Error("Error aagya"));
//     } else {
//       resolve({ userName: "Umra", password: "12jkdh" });
//     }
//   }, 1500);
// });
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let err = false;
//     if (err) {
//       reject();
//     } else {
//       resolve();
//     }
//   }, 1500);
// });

// async function asyncFunc() {
//   try {
//     let response = await promise2;
//     console.log(response);
//   } catch (error) {
//     console.log(error);

//   }
// }

// asyncFunc();

// promise1.then(function(param){
//     console.log(param);
//     return param.userName
// }).then((name)=>{
//     document.write(name)
// })
// .catch((error)=>{
// console.log(error);
// })

// fetch("https://fakestoreapi.com/products")
// .then((response) => {
// //   console.log(response.json());

//   return response.json()
// })
// .then((response)=>{
//     console.log(response);
// })

var col = document.getElementById("col");

fetch("https://dummyjson.com/products/search?q=phone")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.products);
    let products = res.products;
    for (product of products) {
      console.log(product);
      col.innerHTML += `
 <div class="col">
                <div class="card h-100">
                    <img src=${product.images[0]} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <h5 class="text-dark fw-bold">Rs.$ ${product.price}</h5>
                        <button class="btn btn-primary float-end">Buy Now</button>
                    </div>
                </div>
            </div>`;
    }
  })
  .catch((err) => console.log(err));

var col2 = document.getElementById("col2");
fetch("https://dummyjson.com/products")
  .then((response) => {
    //   console.log(response.json());

    return response.json();
  })
  .then((res) => {
    // console.log(response);
    console.log(res.products);
    let products = res.products;
    for (product of products) {
      console.log(product);
      col2.innerHTML += `
 <div class="col">
                <div class="card h-100">
                    <img src=${product.images[0]} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <h5 class="text-dark fw-bold">Rs.$ ${product.price}</h5>
                        <button class="btn btn-primary float-end">Buy Now</button>
                    </div>
                </div>
            </div>`;
    }
  });
