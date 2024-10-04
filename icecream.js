const icecreame = {
    chocolate: {
        flavor: "chocolate",
        price: 200,
        quantity: 50
    },
    vanilla: {
        flavor: "vanilla",
        price: 180,
        quantity: 40
    },
    strawberry: {
        flavor: "strawberry",
        price: 220,
        quantity: 30
    }
};
icecreame.mango= {flavor: "mango",price: 250,quantity: 45};
console.log(icecreame);
let totalquantity=icecreame.chocolate.quantity+icecreame.vanilla.quantity+icecreame.strawberry.quantity+icecreame.mango.quantity;
console.log(totalquantity);
let totalprice=icecreame.chocolate.price+icecreame.vanilla.price+icecreame.strawberry.price+icecreame.mango.price;
console.log(totalprice);
      
