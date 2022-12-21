let input = document.querySelector(".entered-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");



input.addEventListener("heyup",() => {
    if(input.ariaValueMax.trim() !== 0){
        addBtn.classList.add("active")
    }else{
        addBtn.classList.remove("active")
    }
})

addBtn.addEventListener("click", () => {
    if(input.value.trim() != 0){
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.className = "new-item";
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
            <i class="fa-sharp fa-solid fa-trash"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = "";
    }else{
        alert("ta utgaa oruulna uu.")
    }
})




tasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash")){
        e.target.parentElement.parentElement.remove();
    }
})