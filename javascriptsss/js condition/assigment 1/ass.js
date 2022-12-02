//1
let i = 4 > 3; //true
console.log(i)
let iii =  4 < 3; //false
console.log(iii)
let ii =  4 >= 3; //true
console.log(ii)
let iv =  4 <= 3; //false
console.log(iv)
let v =  4 == 4; //true
console.log(v)
let vi =  4 === 4; //true
console.log(vi)
let vii =  4 != 4; //false
console.log(vii)
let iix =  4 !== 4; //false
console.log(iix)
let ix =  4 != "4"; //false
console.log(ix)
let x =  4 == "4"; //true
console.log(x)
let xi =  4 === "4"; //false
console.log(xi)


//2
let one = 4 > 3 && 10 < 12;
console.log(one)
let two = 4 > 3 && 10 > 12;
console.log(two)
let three = 4 > 3 || 10 < 12;
console.log(three)
let four = 4 > 3 || 10 > 12;
console.log(four)
let five = !(4 > 3);
console.log(five)
let six = !(4 < 3);
console.log(six)
let eight = !(4 > 3 && 10 < 12);
console.log(eight)
let nine = !(4 > 3 && 10 > 12);
console.log(nine)
let ten = !(4 === "4");
console.log(ten)




//3
let age = prompt("ЧиниЙ нас чинь хэд вэ?");
let MyAge = 18;
if (age > MyAge){

    console.log( "Надаас ахмад юм байна" )
} else if(age == MyAge){
    console.log( "Надтай чацуу юм байна" )
}else {
    console.log("Надаас дүү юм байна")
}

//4
let day = 2;
switch (day) {
case 1:
case 2:
case 3:
case 4:
case 5:
console.log('Ажлын өдөр');
break;
case 6:
case 7:
console.log('Амралт');
break;
}





//5
let ratePerHour = 28;
let hours = prompt("Ta heden tsag ajillasan be?")
let tsalin = hours * ratePerHour;
if(hours * ratePerHour){
    console.log(tsalin + " tugrugnii tsalin awahaar baina");
}else if(hours > 0){
    console.log("Ta ajillaagvi baina")
}
else{
    console.log("Ta ajillaagvi baina")
}






