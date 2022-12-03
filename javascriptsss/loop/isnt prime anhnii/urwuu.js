 let num = prompt("Ta duriin heden c orontoi too oruulna uu")
    temp = 0,
    last = 0,
    rem =0;
temp=num;

while(num > 0){
    rem = num % 10;
    num = Math.floor(num / 10);
    last = last * 10 + rem;
}
if(temp == last){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}
console.log(last);