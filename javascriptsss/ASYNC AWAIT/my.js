// console.log("a");
// console.log("b");
// console.log("c");
// for (let i = 0; i < 1_000; i++) {
//     for (let i = 0; i < 1_000; i++) {
        
        
//     }
// }

// console.log("final")



// async function fryEgg() {
//     let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
//     });
//     let result = await promise; // энд 1 сэкүнд хүлээнэ
//     console.log(result);
//     }
//     console.log("a");
//     console.log("b");
//     fryEgg();
//     console.log("final");





//  async function fryEgg() {
//     let promise = Promise.resolve(12);
//     let result = await promise; // Syntax error
//     console.log(promise);
// }

// fryEgg();





function prepare_breakfast() {
    let coffee_promise = new Promise((resolve, reject) => resolve("coffee ready"));
    let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("finished frying egg");
    }, 1000);
    });
    let combined_promise = Promise.all([coffee_promise, egg_promise]);
    return combined_promise;
    }
    async function morning() {
    let result = await prepare_breakfast();
    console.log(result);
    }
 morning();