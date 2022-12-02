let phone = prompt("Ta +976 gej baigaad utasnii dugaaraa oruulna uu")
let phone2 = phone.substring(0, 4);
if(phone.length < 13 && phone.length > 11){
    if(phone2 > Number.isInteger("4")){
        console.log(phone2);
    }else("ehnii 4 oron buruu baina.")
}else{
    alert( "Та монгол улсын утасны дугаарыг буруу орууллаа.")
}