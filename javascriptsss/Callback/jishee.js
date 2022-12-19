function compareTwo(a, b, callback1, callback2) {
    console.log(a, b);
    let res1 = callback1(a, b);
    let res2 = callback2(a, b);
    console.log(res1, "add");
    console.log(res2, "mul");
    let str =
      res2 < res1
        ? "Urjver n nemegdehuunees baga bna"
        : "Urjver n nemegdehuunees ih bna";
    console.log(str);
    return str;
  }
  compareTwo(
    23,
    45,
    (a, b) => a + b,
    (a, b) => a * b
  );