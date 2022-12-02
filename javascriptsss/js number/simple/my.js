//0-100random
alert(Math.floor(Math.random(1) * (100)));





//50-255random
alert(Math.floor(Math.random(1) * (255 - 55) + 55));



//random number between
var a = Number(prompt("Enter first number"));
var b = Number(prompt("Enter second number"));x``
alert(Math.floor(Math.random()*(a - b + 1)+ b));





//numbers sum
let  num = 999;
let sum = 0;
while(num > 0){
    let rem = num % 10;
    sum = sum + rem;
    num = parseInt(num / 10);
}
console.log(sum);