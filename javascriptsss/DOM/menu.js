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
    for (let i = 0; i < 1; i++) {
        let card = `<div class="card" style="border-sizing:border-box;  width:23rem;   background-color: rgb(153, 187, 242); text-align:center; border-radius: 10px;">
         <img class="card-img-top" style="width: 100%; object-fit:cover; height: 250px; border-radius: 10px; 
         "src="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/270234689_1101442243936567_2786025096140716686_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGkikcxbh59wV4LlMFPwbOkI8R5lBSTL88jxHmUFJMvzzdWvNsPhIhckjvWideS-AJduEgUx_EKGDShqmnkuA6O&_nc_ohc=qy5FhneyYtsAX_TAbHG&_nc_ht=scontent.fuln1-1.fna&oh=00_AfBzxRLY4tMqSoLa3xzazOF8STnAJv8Dhj8WkUeBRaaDOQ&oe=639D9C34">
        <div class="card-body">
        <h5 class="card-title" style="font-size:20px;">🤍 Мэндчилгээ 🤍</5>
        <p class="card-text" style="padding:10px 20px; font-size:20px;">Эрхэм хүндэт Г.Үжин танд шинэ оны баярын мэндийг хүргэе 🎄🎁 </p>
        <p class="card-about" style="padding:10px 20px;">Ирэх он нь инээд хөөр баяр баясал, аз жаргал, амжилт бүтээлээр дүүрэн жил нь байгаасай🤍🫰🏻🫶🏻</p>
        <p class="card-about" style="text-align:right; padding:10px;">Хүндэтгэсэн: Bebe</p>
        </div>
        </div>`;
        
        cards+=card;
    }
    console.log(cards);

    card.innerHTML=cards;
}
createString();