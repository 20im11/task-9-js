"use strict";

// task 1

fetch("https://reqres.in/api/unknown", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (migebuliInfo) {
    migebuliInfo.data.forEach((item) => {
      let ulEl = document.createElement("ul");
      let liEl = document.createElement("li");
      liEl.innerText = item.name + " " + item.color;
      ulEl.appendChild(liEl);
      document.querySelector(".names-colors").appendChild(ulEl);
    });
  })
  .catch(function (error) {
    if (error == 404) {
      let heading = document.createElement("h3");
      heading.innerText = "Server is currently offline";
      document.querySelector(".names-colors").appendChild(heading);
    }
  });

//   task 2

let request = new XMLHttpRequest();
request.addEventListener("load", function () {
  let mosuli = this.responseText;
  let forParse = JSON.parse(mosuli);
  console.log(forParse.data);

  forParse.data.forEach((item) => {
    let ulElement = document.createElement("ul");
    let liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    document.querySelector(".task2").appendChild(ulElement);
    liElement.innerText =
      item.first_name + " " + item.last_name + " " + item.email;
  });
});

request.open("GET", "https://reqres.in/api/users?page=2");
request.send();
