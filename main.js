let randomUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => randomFriend(data.results));
};

let randomFriend = (friends) => {
  let userInfo = document.getElementById("info");
  let img = document.getElementById("img");
  for (friend of friends) {
    userInfo.innerHTML = `My Name Is ${friend.name.title} ${friend.name.last}`;
    img.src = friend.picture.large;
  }
  // // photos
  // let img = document.getElementById("img");
  // img.src = friend.picture.large;

  // Phone
  document.getElementById("phone").addEventListener("mouseover", function () {
    userInfo.innerHTML = `My Phone Number Is <h3 class="information"> ${friend.phone}</h3> `;
  });
  // User Name
  document.getElementById("name").addEventListener("mouseover", function () {
    userInfo.innerHTML = `My Name Is <h3 class="information">${friend.name.title} ${friend.name.first} ${friend.name.last}</h3>`;
  });
  // User Email
  document.getElementById("email").addEventListener("mouseover", function () {
    userInfo.innerHTML = `My Email Is <h3 class="information">${friend.email}</h3>`;
  });
  // User Adress
  document.getElementById("address").addEventListener("mouseover", function () {
    userInfo.innerHTML = `My Adress Is <h3 class="information"> ${
      friend.location.street.name
    }, ${(friend.location.city, friend.location.country)} </h3>`;
  });
};

// Add friend list
document.getElementById("add-friend").addEventListener("click", function () {
  let ol = document.getElementById("list");
  let li = document.createElement("li");
  li.innerHTML = `<img class="rounded-full" src=${friend.picture.thumbnail}> <p>${friend.name.last}</p>`;
  ol.append(li);
});

randomUser();
