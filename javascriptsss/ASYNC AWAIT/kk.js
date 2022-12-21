const data = [
    {
      productName: "Bakery",
      unitPrice: 5000,
      amount: 200,
      totalPrice: 500000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate",
      unitPrice: 3000,
      amount: 18,
      totalPrice: 54.0,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Bakery",
      unitPrice: 5000,
      amount: 200,
      totalPrice: 500000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate",
      unitPrice: 3000,
      amount: 18,
      totalPrice: 4.0,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Bakery",
      unitPrice: 5000,
      amount: 200,
      totalPrice: 50000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate",
      unitPrice: 3000,
      amount: 18,
      totalPrice: 5.0,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Bakery",
      unitPrice: 5000,
      amount: 200,
      totalPrice: 10000000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate",
      unitPrice: 3000,
      amount: 18,
      totalPrice: 54.0,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Bakery",
      unitPrice: 5000,
      amount: 200,
      totalPrice: 5000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate",
      unitPrice: 3000,
      amount: 18,
      totalPrice: 54.0,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Bakery",
      unitPrice: 5000,
      amount: 200,
      totalPrice: 600,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate",
      unitPrice: 3000,
      amount: 18,
      totalPrice: 554.0,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate",
      unitPrice: 3000,
      amount: 18,
      totalPrice: 999999554.0,
      casherId: 1,
      date: "2022-11-01",
    },
  ];
  
  // Дэлгүүрийн боруулалтын мэдэээл өгөгдсөн.
  // productName, unitPrice, amount, price, casherId(Ajiltanii dugaar), date гэсэн мэдээлэл агуулна.
  // Өгөгдлийг. өөрсдөө зохионо.  30 хүртэлх мөртэй.
  
  // const data = [
  //          {productName:"Bakery", unitPrice:5000, amount: 200, totalPrice: 500000  casherId:1, date: '2022-11-01'},
  //          {productName:"Chocolate", unitPrice:3000, amount: 18, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
  //          {.}
  //          {.}
  //          {.}
  // ];
  // Дараах даалгаварыг хийж гүйцэтгэнэ үү.
  // 1. Нийт борлуулалтын дүнг тооцоолох.
  // 2. Нийт борлуулагдсан барааны тоог тооцоолох.
  // 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
  // 4. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
  // 5. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
  // 6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.
  // 7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
  // 8. Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
  // 9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
  // 10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
  
  //1-100
  
  let data1 = [];
  function generateTempData(start, end) {
    for (let a = start; a < end; a++) {
      let uPrice = Math.random() * 10000;
      let am = Math.floor(Math.random() * 100);
  
      let product = {
        productId: a + 1,
        productName: "Bakery",
        unitPrice: uPrice,
        amount: am,
        totalPrice: uPrice * am,
        casherId: Math.floor(Math.random() * 100),
        date: new Date(),
      };
  
      data1.push(product);
    }
  
    console.log(data1);
  }
  
  generateTempData(1, 100);
  
  // 1. Нийт борлуулалтын дүнг тооцоолох.
  // 2. Нийт борлуулагдсан барааны тоог тооцоолох.
  // 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
  // 4. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
  // 5. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
  // 6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.
  // 7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
  
  let sortTotal = data1
    .sort((a, b) => a.totalPrice - b.totalPrice)
    .slice(data1.length - 10);
  console.log(sortTotal);
  
  //100 - totalprice /
  
  // for (let t = 0; t < data1.length; t++) {
  //   // const element = array[t];
  // }
  
  // 8. Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
  // 9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
  // 10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.