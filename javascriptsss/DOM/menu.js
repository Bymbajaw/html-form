// let menus = [{id:1, name:"Home", href:""},
//             {id:2, name:"Contact", href:""},
//             {id:3, name:"About", href:""},
//             {id:4, name:"Library", href:""},
//             {id:5, name:"Quit", href:""}]
// let ulEl= document.createElement("ul")
// console.log(ulEl)
// let mainEl = document.getElementById("menu")
// console.log(mainEl);
// for (let i = 0; i < menus.length; i++) {
//     let liE= document.createElement("li");
    
//     let aE= document.createElement("a");
//     aE.innerHTML= menus[i].name;
//     aE.href= menus[i].href;
//     liE.appendChild(aE)
//     ulEl.appendChild(liE)
//     console.log(liE);
//     console.log(aE);
// }
// mainEl.appendChild(ulEl)
// console.log(ulEl)






function createString(){
    let cards ="";
    for (let i = 0; i < 3; i++) {
        let card = `<div class="card" style="border-sizing:border-box; width:18rem; background-color: rgb(245, 214, 184); text-align:center; border-radius: 10px;"> <img class="card-img-top" style="width: 100%; border-radius: 10px; "src="https://media.istockphoto.com/id/481199969/photo/open-book.jpg?s=612x612&w=0&k=20&c=eZQgEiRyKmdwgvk-2l_nE17OYOKhivPNwyDZV5STCcw=">
        <div class="card-body">
        <h5 class="card-title" style="font-size:20px;">Card title</5>
        <p class="card-text" style="margin-top:10px; padding:10px;"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        </div>`;
        
        cards+=card;
    }
    console.log(cards);

    card.innerHTML=cards;
}
createString();