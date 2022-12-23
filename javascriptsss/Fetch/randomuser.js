let container = document.getElementById("container");
let nameEl = document.getElementById("name")
let imgEl = document.getElementById("img")

let userData = [];
fetch("https://randomuser.me/api")
  .then((res) => res.json())
  .then(res => res.results[0])
//   .then((data) => {
//     console.log(data);

//     userData = [...data];

//     data.map((c, i) => {
//         nameEl.innerHTML += `${first, last}`
//     });
//   });
  .then(printData);
function printData(data){
    console.log(data.picture);
    let {first, last} = data.name;
    let {thumbnail} = data.picture;
    let {city, state, country} = data.location
    city.className = "asdf";
    document.querySelector("h3").innerHTML = `${first} ${last}`;
    document.querySelector("img").src = thumbnail;
    document.querySelector("p").innerHTML = `Улс: ${country} <br> Хот: ${city} <br> Муж: ${state} `;
}