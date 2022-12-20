let aimagEl = document.createElement("aimagsName");
aimagEl = [value:1, name:"sadfasdf"];

let soumEl = document.getElementById("soumsName")

 aimagEl.addEventListener("change", (event)=> fillSoum(event.target.value));


 let soums = [
    {id:1, aimagId: 1, name: "Батцэнгэл"},
    {id:2, aimagId: 1, name: "Булган"},
    {id:3, aimagId: 2, name: "Алтай"},
    {id:4, aimagId: 2, name: "Бугат"},
    {id:5, aimagId: 3, name: "Бууцагаан"},
    {id:6, aimagId: 3, name: "Галуут"},
    {id:7, aimagId: 4, name: "Рашаант"},
    {id:8, aimagId: 4, name: "Сэлэнгэ"},
    {id:9, aimagId: 5, name: "Тонхил"},
    {id:10, aimagId: 5, name: "Төгрөг"},
    {id:12, aimagId: 6, name: "Сүмбэр"},
    {id:13, aimagId: 6, name: "Баянтал"},
    {id:14, aimagId: 7, name: ""},
    {id:15, aimagId: 7, name: ""},
    {id:16, aimagId: 8, name: "Алтанширээ"},
    {id:17, aimagId: 8, name: "Сайншанд"},
    {id:18, aimagId: 9, name: ""},
    {id:19, aimagId: 9, name: ""},
    {id:20, aimagId: 10, name: ""},
    {id:21, aimagId: 10, name: ""}
 ];

 function fillSoum(aimagId){
    let str= "";
    for (let i = 0; i < soums.length; i++){
        if(soums[i].aimagId == aimagId){
            str += `<option>${soums[i].name}</option>`;
        }
    }
  soumEl.innerHTML= str;
 }