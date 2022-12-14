
let container = document.getElementsByClassName("container")




let sectionDiv1 = document.createElement("div")
sectionDiv1.className = "div1"



let todo = document.createElement("h1")
todo.innerText = "Todo List App";
todo.className = "todo"
sectionDiv1.appendChild(todo)


// let de =  Date();
// sectionDiv1.append(de)
// console.log(de);

let inputEl = document.createElement("input");

inputEl.name = "task"
inputEl.id = "inputTask";
inputEl.className = "inp"

sectionDiv1.appendChild(inputEl)

let btn = document.createElement("button");
btn.textContent = "+нэмэх";
btn.className = "btn"

sectionDiv1.appendChild(btn)


btn.addEventListener("click", addTask)


function addTask(){
    // let value = document.getElementsByTagName("input")[0].value;



    let aDiv = document.createElement("div");
    let aSpan = document.createElement("span");

    aSpan.innerHTML = inputEl.value;
    
    aDiv.appendChild(aSpan)

    sectionDiv2.appendChild(aDiv)


    // console.log(value);
}





container[0].appendChild(sectionDiv1)







let sectionDiv2 = document.createElement("div")
sectionDiv2.className = "div2"



let jagsaalt = document.createElement("h1")
jagsaalt.innerText = "Жагсаалт";
jagsaalt.className = "todo2"
sectionDiv2.appendChild(jagsaalt)







container[0].appendChild(sectionDiv2)


