const axios = require('axios');

async function fetchWebContent() {
    const url = 'http://quotes.toscrape.com';
    const response = await axios.get(url);
}