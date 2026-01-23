var col2 = document.getElementById("col2");
fetch("https://api.escuelajs.co/api/v1/users")
  .then((response) => {
    //   console.log(response.json());

    return response.json();
  })
  .then((res) => {
    // console.log(response);
    console.log(res);
    let users = res;
    for (user of users) {
      console.log(user);
      col2.innerHTML += `
 <div class="col">
                <div class="card h-100">
                    <img src=${user.avatar} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text">${user.role}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <h5 class="text-dark fw-bold">${user.email}</h5>
                        <button class="btn btn-primary float-end">Buy Now</button>
                    </div>
                </div>
            </div>`;
    }
  });
