const cheerio = require('cheerio');
const fs = require('fs');


async function getPrice() {
    const sitedata = await fs.readFile('daten/webpage_content.html', 'utf-8', (err, data) => {
        if (err) throw err;
        const scriptstring = cheerio.load(data);
        //console.log(scriptstring('#valve-ssr-data').text());
        fs.writeFileSync('daten/obscuredstring.json', scriptstring('#valve-ssr-data').text());
        console.log("Content saved to '/daten/obscuredstring.json'");
    });
}

getPrice();