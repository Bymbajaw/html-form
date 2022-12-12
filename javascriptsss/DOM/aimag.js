// Хамгийн эхний li элементийг аван утгыг console.log дээр хэвлэх
let ulEl = document.getElementsByTagName("ul")

console.log(ulEl);
console.log(ulEl[0].firstElementChild)





// Хамгийн сүүлийн li элементийг аван утгыг console.log дээр хэвлэх
console.log(ulEl[0].lastElementChild)




// Сүхбаатар аймгийг элементийн id-аар аван console.log дээр хэвлэх
console.log(document.getElementById("aimag-315"));





// Тухайн жагсаалтын элементүүдэд загвар оруулах (текстийн фонт, хэмжээ, текстийн өнгө, хүрээ, padding, margin)
console.log(document.getElementById("aimag-101").style.color = "red");
console.log(document.getElementById("aimag-202").style.padding = "20px");
console.log(document.getElementById("aimag-103").style.fontSize = "50px");
console.log(document.getElementById("aimag-104").style.backgroundColor = "purple");
console.log(document.getElementById("aimag-406").style.border = "solid 3px black");
console.log(document.getElementById("aimag-406").style.padding= "10px");
console.log(document.getElementById("aimag-205").style.margin = "20px");
console.log(document.getElementById("aimag-406").style.borderRadius = "20px");







// Аймгуудыг бүс, бүсээр ялган өөр, өөр background color  өгөх  (1 - Хангайн бүс, 2 - Баруун бүс, 3 - Зүүн бүс, 4 - Төвийн бүс, 5 - Улаанбаатар ) Жишээ нь id = aimag-321 ийм байгаа 3 нь бүсийн дугаар, 21 нь аймгийн дугаар юм.
let aa = document.getElementById("aimagNames");
console.log(aa);

for (let i = 0; i < aa.children.length; i++) {
    console.log(aa.children[i].id);
    let x = aa.children[i].id.substring(6, 7);
    if(x == 1){
        aa.children[i].style.backgroundColor= "orange";
    }else if (x == 2 ){
        aa.children[i].style.backgroundColor= "red"; 
    }else if (x == 3){
        aa.children[i].style.backgroundColor= "blue"; 
    }else if (x == 4){
        aa.children[i].style.backgroundColor= "purple"; 
    }else if (x == 5){
        aa.children[i].style.backgroundColor= "yellow"; 
    }
}
