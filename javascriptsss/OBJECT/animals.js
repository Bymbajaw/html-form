function myFunction() {
    let animals =
    [{
        type: "dog", 
        sound: "woof woooooffff wooffff",
    },
    {
        type: "cow",
        sound: "moo mooo mmmoooo"
    },
    {
        type: "cat",
        sound: "meow meow meow"
    }] 
    console.log(animals)    
    for (let i = 0; i < animals.length; i++) {
        console.log("What does the" + " "+ animals[i].type + " " + "say?" + " "+animals[i].sound);
    }
}
myFunction();