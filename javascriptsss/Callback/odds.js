let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function filter(numbers, callback){
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if(callback(numbers[i])){
            result.push(numbers[i]);
        }
        
    }
    
    console.log(result)
}

let evens = filter(numbers, (n)=>{return n%2===0});
let odds = filter(numbers, (n)=>{return n%2!==0});
let ods = filter(numbers, (n)=>{return n%3===0});
let odes = filter(numbers, (n)=>{return n%4===0});
let oddes = filter(numbers, (n)=>{return n%5===0});



function a(){
    console.log("Ta hoyr");
    function b(){
        console.log("bol")
        function c(){
            console.log("Mundag");
            function d(){
                console.log("Suragchid shvv");
            }
            setTimeout(d, 1000);
        }
        setTimeout(c, 1000);
    }
    setTimeout(b, 1000);
}

setTimeout(a, 1000);
