
let lastName = document.querySelector(".lastname");
let firstName = document.querySelector(".firstname");
let gender = document.querySelector(".gender");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");
let point = document.querySelector(".point");



lastName.addEventListener("heyup",() => {
    if(lastName.ariaValueMax.trim() !== 0){
        addBtn.classList.add("active")
    }else{
        addBtn.classList.remove("active")
    }
})

addBtn.addEventListener("click", () => {
    if(lastName.value.trim() != 0 && firstName.value.trim() != 0 && gender.value.trim() != 0 && point.value.trim() != 0){
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.className = "new-item";
        newItem.innerHTML = `
        <p>lastname: ${lastName.value}<br> firstname: ${firstName.value}<br> gender: ${gender.value}<br> point: ${point.value} </p>
        <div class="item-btn">
            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
            <i class="fa-sharp fa-solid fa-trash"></i>
        </div>
        `
        tasks.appendChild(newItem);
        lastName.value = "";
        firstName.value = "";
        gender.value = value; 
        point.value = "";
    }else{
        alert("ta utgaa oruulna uu.")
    }
})



tasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash")){
        e.target.parentElement.parentElement.remove();
    }
})