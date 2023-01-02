

let arrProducts = [];
let proEl = document.getElementById("products")
let headEl = document.getElementById("head")


function getData() {

    fetch("https://dummyjson.com/products")
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
        arrProducts = [...data.products]
        drawHTML();
    })
    .catch((err=>console.log(err)))
}

getData();
fillCategory();



function drawHTML() {

    console.log(arrProducts);

let row = ""
    arrProducts.map((product)=>{
        // console.log(product.title);

        row += `<div class="col-md-3"> <div class="card" style="width: 18rem;">
        <img src="${product.thumbnail}" class="card-img-top " alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.price}$</p>
          <a href="#" class="btn btn-primary">Buy</a>  <a href="#" class="btn btn-warning ms-5">Bag</a>
        </div>
      </div>
      </div> `;
        // console.log(row);
    })  

    proEl.innerHTML = row;
}
 function fillCategory() {

    fetch("https://dummyjson.com/products/categories")
    .then(res => res.json())
    .then(data=> {
        console.log(data);
        category = [...data]

        data.map((c, i) => {
            headEl.innerHTML += `<div onclick="filterCat('${c.trim()}')" class="col-2" style="cursor:pointer" >${c}</div>`;
          });
    })
    .catch((error=> console.log(error)))

}

    // console.log(headEl);

    // for (let i = 0; i < headEl.length; i++) {
    //     headEl[i].onclick = function(){
    //         for (let i = 0; i < headEl.length; i++) {
                
    //         }
    //     }
        
    // }
   


    function filterCat (category) {

        console.log(category);
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res)=> res.json())
    .then((result)=>{
        console.log(result);
        productSmart = [...result.products];
        console.log(productSmart);
        
        drawHTML();

        ``
    })
    .catch((err)=> console.log(err))
    
}

  