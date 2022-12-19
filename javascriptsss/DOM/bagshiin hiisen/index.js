let mainEle = document.getElementById("main");

mainEle.style = "margin: 0 auto; max-width: 500px";

let sectionDiv1 = document.getElementById("section1");
let sectionDiv2 = document.getElementById("section2");

//section 1 title
let title = document.createElement("h1");

title.style.color = "orange";
title.style.textAlign = "center";
title.innerHTML = "To do list app";

sectionDiv1.appendChild(title);

//section 1 div
let subDiv = document.createElement("div");
subDiv.id = "addTask";
subDiv.style.display = "flex";

//section 1 div input
let input = document.createElement("input");
input.type = "text";
input.id = "inputTask";
input.style.border = "none";
input.style.borderBottom = "1px solid orange";
input.style.backgroundColor = "white";
input.placeholder = "Та таскаа оруулна уу";
input.style.width = "30rem";

let btn = document.createElement("button");

btn.style.padding = "15px";
btn.style.backgroundColor = "orange";
btn.style.color = "white";
btn.innerHTML = "+add";
btn.style.border = "none";

//btn click

btn.addEventListener("click", fnAddTask);

subDiv.appendChild(input);
subDiv.appendChild(btn);

sectionDiv1.appendChild(subDiv);

//section 2 title
let listTitle = document.createElement("h1");

listTitle.style.color = "orange";
listTitle.style.textAlign = "center";
listTitle.innerHTML = "List";

//section 2 div tasks
let subDiv2 = document.createElement("div");
subDiv2.id = "tasks";

sectionDiv2.appendChild(listTitle);
sectionDiv2.appendChild(subDiv2);

//fnAddTask

function fnAddTask() {
  let aDiv = document.createElement("div");
  aDiv.className = "task";

  let inputTask = document.createElement("input");
  inputTask.style.border = "none";
  inputTask.readOnly = truve;
  inputTask.value = input.value;

  let actionsDiv = document.createElement("div");
  actionsDiv.id = "actions";
  actionsDiv.className = "flex";

  let editBtn = document.createElement("span");
  editBtn.innerHTML = "Засах";

  editBtn.addEventListener("click", function () {
    //ene bol same =>  inputTask.readOnly = true;
    // inputTask.setAttribute("readonly", false);

    console.log("inputTask.readOnly", inputTask.readOnly);
    // if (inputTask.readOnly) {
    //   inputTask.readOnly = false;
    // } else {
    //   inputTask.readOnly = true;
    // }
    inputTask.readOnly = !inputTask.readOnly;
  });

  let delBtn = document.createElement("span");
  delBtn.innerHTML = "Устгах";

  delBtn.addEventListener("click", function () {
    //parent.removeChild();
    subDiv2.removeChild(aDiv);
  });

  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(delBtn);

  aDiv.appendChild(inputTask);
  aDiv.appendChild(actionsDiv);

  subDiv2.appendChild(aDiv);
  input.value = "";
}