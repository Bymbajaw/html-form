let utga = prompt("Ta 2-5 orontoi too oruulna uu!")
let sum = 0;
let i = 1;
if(utga.length < 6 && utga.length > 1){
    while( i <= utga){
        sum = sum + i
        i = i + 1
    }
    console.log(sum)    
}else{
    alert("Ta 2-5 orontoi too bichne vv!")
}





//0-100 hvrtleh tegsh too
let count = 1;
let result = " ";

while(count <= 100){
    if(count % 2 == 0){
        result += count + " ";
    }
    count++;
}
console.log(result);

