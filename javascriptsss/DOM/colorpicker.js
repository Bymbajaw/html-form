document.getElementById("car").addEventListener("click",img);

function img() {
    var x = document.createElement("CAR")
    x.setAttribute("src", "white.jpeg");
    x.setAttribute("src", "grey.jpeg");
    document.body.appendChild(x);
}
