let dog = {
    breed : "Blonka",
    age : 3,
    name : "Niki",
    color : "White",
    affection : "Uhuurdum, jijighen, uurtai, hugjiltei",
    getDogInfo: function () {
        console.log( 
            "" +
            this.breed +
            "\n" +
            this.age +
            "\n" +
            this.name +
            "\n"+
            this.color+
            "\n"+
            this.affection
            );
        }
}
console.log(dog);
    dog.getDogInfo();


