



//http- 200
// let rows = document.getElementById("rows");
// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     console.log(data.products);

//     // data.products.map((item) => console.log(item.title));
//   });
// let obbj = {id: 1, name: "Bold"}
// console.log(obbj);

// console.log(JSON.stringify(obbj));

//   JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//     })
  


  // fetch('https://dummyjson.com/products/add', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' }, //text/html
  //   body: JSON.stringify({
  //   title: 'BMW Pencil',
  //   /* other product data */
  //   })
  //   })
  //   .then(res => res.json())
  //   .then((data)=>console.log(data));


  //   fetch('https://dummyjson.com/products/1', {
  //     method: 'DELETE',
  //     })
  //     .then(res => res.json())
  //     .then((data)=>console.log(data));


//obj[i].title

let countryEl = document.getElementById("country");
let divCountry = document.getElementById("countries");

let countriesData = [];
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    countriesData = [...data];

    data.map((c, i) => {
      countryEl.innerHTML += `<option value=${c.name.common}>${c.name.common}</option>`;
    });
  });

let inputEl = document.getElementById("searchTxt");

inputEl.addEventListener("input", (e) => {
  // console.log(e);
  console.log(e.target.value);

  let newARR = countriesData.filter((co) => {
    console.log("jsjs");
    return co.name.common.includes(e.target.value) == true;
  });

  // let newARR1 = countriesData.filter((co) => co.name.common.includes(e.target.value) == true);


  divCountry.innerHTML = "";
  newARR.map((item) => {
    divCountry.innerHTML += `<div>${item.name.common}</div>`;
  });

  console.log(newARR);
});






