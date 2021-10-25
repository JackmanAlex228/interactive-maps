import WaterSeries from '../data/WaterData';
import CountryNameToId from '../data/CountryIDs';
const axios = require('axios');
const cheerio = require('cheerio');
const url = "https://www.worldometers.info/water";

async function fetchData(url){
    console.log("Crawling data...")
    // make http call to url
    let response = await axios(url).catch((err) => console.log(err));

    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}

fetchData(url).then( (res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    const statsTable = $('#example2 > tbody > tr');
    
    statsTable.each(function() {
        let country = $(this).find('td:nth-child(1)').text();
        let waterUse = $(this).find('td:nth-child(2)').text();
        let waterCapita = $(this).find('td:nth-child(3)').text();
        let population = $(this).find('td:nth-child(4)').text();

        console.log(country, waterUse, waterCapita, population);
    });
})
