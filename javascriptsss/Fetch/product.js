let indicator = document.querySelector(".indicator").children;
console.log(indicator);
let main = document.querySelector(".items").children;
console.log(main);

for (let i = 0; i < indicator.length; i++) {

    indicator[i].onclick = function(){
        for (let j = 0; j < indicator.length; j++) {
            indicator[j].classlist.remove("active");
                        
        }
        this.classlist.remove("active");
        const dispalyItems = this.getAttribute("data-filter");
        for (let z = 0; z < main.length; z++) {
            main[z].style.transform = 'scale(0)';
            setTimeout(() => {
                main[z].style.display = 'none';
            },500);
            if((main[z].getAttribute("data-category") == dispalyItems) || dispalyItems == "all")
            {
                main[z].style.transform = "scale(1)";
                setTimeout(() =>{
                    main[z].style.display = "block";
                }, 500);
            }
        }
    }
}