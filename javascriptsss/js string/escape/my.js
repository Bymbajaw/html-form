let hello = 'Hello I am \"Name Here.\"';
let Iam = "I am \'Age here\' years old.";
let black = "This is the new line with tab and some \\backslashes\\."
let full = `${hello} \n${Iam} \n  ${black}`;
console.log(full)





//ognoo hewleh
// console.log("date");
// let year = prompt("Ta tursun onoo oruulna uu!")
// if(year.length==4 && year>=1000 && year<=2022){

// }else{
//     alert("onoo oruulna uu!!!")
// }
// let month = prompt("Ta tursun saraa oruulna uu!")
// let month2;
// let day =prompt("Ta tursun saraa oruulna uu!")
// let day2;
// if (month.length==2 && month<=12 && month>=1){
//     month2=month
// }else if(month.length==1 && month<=12 && month>=1){
//     month2="0"+month
// }else{
//     alert("Ta sariin dugaaraa oruulna uu!")
// }


// if (day.length==2 && day<=31 && day>=1){
//     day2=day
// }else if(day.length==1 &&  day<=31  && day>=1){
//     day2="0"+day
// }else{
//     alert("Ta uduriin dugaaraa oruulna uu!");
// }

// console.log(year + "-" + month2 + "-" + day2);







//utasnii dugaar 
let dugaar = prompt("Utasnii dugaaraa bichne vv?")
let dugaar2 = dugaar.substring(0, 2);
if(dugaar.length < 9 && dugaar.length > 7){
    if( dugaar2 == 99 || dugaar2 == 95 || dugaar2 == 85 || dugaar2 == 94 ){
        console.log(dugaar2 +" Mobicom");    
    }else if(dugaar2 == 90 || dugaar2 == 96 || dugaar2 == 91){
        console.log(dugaar2 +" Skytel");
    }else if(dugaar2 == 80 || dugaar2 == 86 || dugaar2 == 88 || dugaar2 == 89){
        console.log(dugaar2 +" Unitel");
    }else if(dugaar2 == 93 || dugaar2 == 97 || dugaar2 == 83 || dugaar2 == 98){
        console.log(dugaar2 +" GMobile");
    }else{
        alert("tanii ehnii 2 oron buruu baina.")
    }
}else{
    alert("Ta dugaaraa zuw oruulna 8 orontoi!");
    }

