const itCompanies = ["Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"];
let i = 0;
console.log(itCompanies);
while (i < itCompanies.length) {
    for(let a = 0; a < itCompanies[i].length; a++){
        console.log(itCompanies[i][a].length);
    }
    console.log(itCompanies[i].length);
    i++
}