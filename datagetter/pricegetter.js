const fs = require('fs');

var europrice = 0;

fs.readFile('daten/obscuredstring.json', 'utf-8', (err, data) => {
    if (err) throw err;
    //console.log(typeof(data) + typeof(JSON.parse(data)));
    var price = JSON.parse(data).loaderData[3];
    //console.log("Current Genesis Terminal Price: " + price + typeof(price));
    price = JSON.parse(price).buckets;
    //console.log("Current Genesis Terminal Price: " + JSON.stringify(priceString[0].strPrice) + typeof(priceString));
    price = JSON.stringify(price[0].strPrice);
    //remove al nonumeric characters from the string
    price = price.replace(/[^a-zA-Z0-9]/g, '');
    //divide by 100 to get the price in euros
    price = price / 100;
    console.log("Uncompelling Price: " + price);
    europrice = price;
     
});
