let registerNo= "УК04251277";
let aimags = [
    ["А", "Архангай"],
    ["Б", "Баян-Өлгий"],
    ["В", "Баянхонгор"],
    ["Г", "Булган"],
    ["Д", "Говь-Алтай"],
    ["Е", "Дорноговь"],
    ["Ж", "Дорнод"],
    ["З", "Дундговь"],
    ["И", "Завхан"],
    ["Й", "Өвөрхангай"],
    ["К", "Өмнөговь"],
    ["Л", "Сүхбаатар"],
    ["М", "Сэлэнгэ"],
    ["Н", "Төв"],
    ["О", "Увс"],
    ["П", "Ховд"],
    ["Р", "Хөвсгөл"],
    ["С", "Хэнтий"],
    ["Т", "Дархан-Уул"],
    ["Ф", "Орхон"],
    ["Х", "Говьсүмбэр"],
    ["У,Ц", "Улаанбаатар"],
];
function isCorrectReg(register){
    let letters = "АБВГДЕЖЗИЙКЛМНОПРСТФХУ";

    if(register.length==10){
        if(
            !Number.isNaN(register.substr(0, 2)) && 
            Number.isNaN(register.substr(2))
        ){
            if(
                letters.split("").includes(register[0])&&
                letters.includes(register[1 ])
            ){
                for(let i = 0; i <= aimags.length - 1; i++){
                    if(aimags[i][0]==register[0]){
                        console.log(aimags[i][1]);
                    }
                }
            }
        }
        console.log(registerNo)
    }else{
        console.log("Buruu utga baina!");
    }
    
}

isCorrectReg(registerNo);
