let register = prompt("Registeriin dugaaraa oruulna uu!")
let register2 = register.substring(0, 2);
let register3 = register.substring(2, 11);
if(register.length < 11 && register.length > 9){
    if(!Number.isInteger(Number(register2)) && Number.isInteger(Number(register3))) {
        console.log(register2+ register3)
    }else{
        alert("ehnii hyr utga buruu baina!")
    }
}else{
    alert("Ta registeriin dugaaraa zuw oruulna uu!")
}