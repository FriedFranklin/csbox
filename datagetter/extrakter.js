const cheerio = require('cheerio');
const fs = require('fs');


async function getPrice() {
    const sitedata = await fs.readFile('daten/webpage_content.html', 'utf-8', (err, data) => {
        if (err) throw err;
        const $ = cheerio.load(data);
        console.log($('h1').text());
    });
}

getPrice();