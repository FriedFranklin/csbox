const axios = require('axios');
const fs = require('fs');

async function fetchWebContent() {
    try {
        // Fetch content from a website
        const url = 'https://steamcommunity.com/market/listings/730/G18B8283004';
        const response = await axios.get(url);

        if (response.status === 200) {
            console.log("Content fetched successfully!");
            console.log(response.data.substring(0, 500));  // Display the first 500 characters of the webpage content
            // Save the content to a file
            fs.writeFileSync('/daten/webpage_content.html', response.data);
            console.log("Content saved to '/daten/webpage_content.html'");
        } else {
            console.log("Failed to fetch content.");
        }
    } catch (error) {
        console.log("Error fetching content:", error.message);
    }
}

fetchWebContent();