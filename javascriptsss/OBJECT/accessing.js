let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 23,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]
console.log(students)
function myFunction(){
    for(let i = 1; i < students.length -1; i++){
        if(students[i].gender == male){
            console.log(students[i].name + " " + gender + "хүйс")
        }
    }
}
myFunction();
