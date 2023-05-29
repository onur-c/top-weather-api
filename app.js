let key = "4127e5f4e1df4d24b97152616232905";
let url = "";
let searchParam = "";

async function getData() {
  searchParam = !(searchParam === "")
    ? document.body.querySelector("#input").value
    : "Istanbul";
  url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${searchParam}`;

  let response = await fetch(url);
  let data = await response.json();

  return JSON.stringify(data.location.country);
}

function appendResponse(data) {
  let resText = document.createElement("p");
  resText.innerHTML = data;
  document.querySelector(".content").appendChild(resText);
}

document.querySelector("button").addEventListener("click", () => {
  getData().then((data) => appendResponse(data));
  console.log(url);
});
