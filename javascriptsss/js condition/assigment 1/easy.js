//1
let a = 100, b=89, c=79, d=69, f=59 ;
let dun = prompt("Tanii dun hed ve")
 
if (dun >= 90 && dun <= 100){
    console.log("A")
} else if (dun >= 80 && dun <= 89) {
    console.log("B")
} else if(dun >= 70 && dun <= 79) {
    console.log("C")
} else if(dun >= 60 && dun <= 69) {
    console.log("D")
} else if(dun <= 59) {
    console.log("F")
}
else{
    console.log("Buruu dun")
}













//2
//3
//4
let n = prompt("number nega or posi");
if(n > 0){
    console.log("Positive")
}else{
    console.log("Negative")
}













//5
let w = 60, h = 1.75;
let indeks = w / (h ** 2);
if(indeks <= 42 && indeks >= 40 ){
    console.log( "Хэт таргалалттай")
}else if(indeks <= 39 && indeks >= 30 ){
    console.log( "Таргалалттай")
}else if(indeks <= 29 && indeks >= 25 ){
    console.log( "Илүүдэл жинтэй")
}else if(indeks <= 25 && indeks >= 18 ){
    console.log( "Эрүүл")
}else if(indeks <= 17 && indeks >= 12 ){
    console.log( "Жингийн дутагдалтай")
}










//6,7
let NaP = prompt("duriin too bich N or P bj bolno.") ; 
if(NaP >= 0){
    console.log(NaP,  "Positive")
}else{
    console.log(NaP,  "Negative")
}













//8
let yearOfBirth = prompt("Tanii tursun on hed we?")
let currentYear = new Date().getFullYear();
let old = currentYear - yearOfBirth;
if( old < 1){
    console.log(old +"  Infant")
}else if( old < 3 ){
    console.log(old +"  Toddler")
}else if( old < 5){
    console.log(old +"  Preschool")
}else if(old < 12){
    console.log(old +"  Gradeschooler")
}else if( old < 18){
    console.log(old +"  Teen")
}else if( old < 21){
    console.log(old +"  Young adult")
}else if(21 < old){
    console.log(old +"  Adult")
}







 