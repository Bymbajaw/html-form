
let container = document.getElementsByClassName("container")




let sectionDiv1 = document.createElement("div")
sectionDiv1.className = "div1"



let todo = document.createElement("h1")
todo.innerText = "Todo List App";
todo.className = "todo"
sectionDiv1.appendChild(todo)


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
    let sDiv = document.createElement("div")
    let aSpan = document.createElement("span");
    let icon1 = document.createElement("i")
    let icon2 = document.createElement("a")
    let icon3 = document.createElement("a")
    
    
    aSpan.innerHTML = inputEl.value;
    aSpan.className = "span"
    sDiv.className = "sDiv"
    icon1.className = "icons"
    icon1.href=""
    icon2.className = "icons"
    icon2.href=""
    icon3.className = "icons"
    icon3.href=""
    





    aDiv.appendChild(sDiv)
    sDiv.appendChild(aSpan)
    sDiv.appendChild(icon1)
    sDiv.appendChild(icon2)
    sDiv.appendChild(icon3)

    
    icon1.innerHTML = "✎"
    icon2.innerHTML = "✓"
    icon3.innerHTML = "🗑️"
    
    
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



    // let icon = document.createElement("i")
    //     icon.innerHTML = '<i class="bi bi-pencil-fill"></i>'
    //     icon.appendChild(jagsaalt)
    //     console.log(icon);



container[0].appendChild(sectionDiv2)


