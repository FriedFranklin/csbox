const fs = require('fs');

fs.readFile('daten/obscuredstring.json', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(typeof(data) + typeof(JSON.parse(data)));
    const price = JSON.parse(data).loaderData[3];
    console.log("Current Genesis Terminal Price: " + price + typeof(price));
    const priceString = JSON.parse(price).buckets;
    console.log("Current Genesis Terminal Price: " + JSON.stringify(priceString[0].strPrice) + typeof(priceString));
    var uncompellingprice = JSON.stringify(priceString[0].strPrice);
    uncompellingprice = uncompellingprice.replace(/[^a-zA-Z0-9]/g, '');
    uncompellingprice = uncompellingprice / 100;
    console.log("Uncompelling Price: " + uncompellingprice + typeof(uncompellingprice));
});