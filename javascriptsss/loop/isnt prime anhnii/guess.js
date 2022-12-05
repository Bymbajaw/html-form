let RandomNumber= prompt("Ta 1-100 hoorond toog oruulna uu");
let num = Math.ceil(Math.random()*100);
let a = 0;

if(RandomNumber>=1 && RandomNumber<=100) {
    while (num >= RandomNumber){    
        if(num >= a){
            num<a  ;
        }
        a++;
        console.log(num+ a);
    }
}else{
    alert("Ta oruulsan too buruu baina")
}