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
// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих

console.log(students)
function myFunction(){
    for(let i = 0; i < students.length; i++){
        for (let j = 0; j < students[i].gender; j++) {
            
        }
        console.log(students[i].gender)
    }
}
myFunction();


// Сурагчдын насны дунджийг олох функц бичих 
let p = 0;
let z = 0;
console.log(students.length);
function ageUp(){
    for (let k = 0; k < students[k].age; k++) {
        let dundaj =  students[k].age / students.length;
        console.log( dundaj)
        
    }
}
ageUp();