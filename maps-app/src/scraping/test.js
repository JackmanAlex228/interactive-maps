const axios = require('axios');
const cheerio = require('cheerio');
const url = "https://www.worldometers.info/water";

fetchData(url).then( (res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    const statsTable = $('#example2 > tbody > tr');
    
    // Test regex here: https://regexr.com/
    /* Use these strings for test:
United Arab Emirates3,998,000,0002,387 4,588,225
United Kingdom8,420,000,000348 66,297,944
United States444,300,000,0003,794 320,878,310
Uruguay3,660,000,0003,021 3,319,736
Uzbekistan54,560,000,0004,754 31,441,751
Venezuela22,630,000,0002,275 27,247,610
Vietnam82,030,000,0002,681 83,832,661
Yemen3,565,000,000486 20,107,409
Zambia1,572,000,000393 10,971,698
Zimbabwe3,570,000,000798 12,255,922
     */
    var country_regex =         /([A-Z])\D+/g;
    var water_total_regex =     /([0-9]).+(000)/g;
    var water_capita_regex =    /()/g;
    var population_regex =      /()/g;
    
    statsTable.each(function() {
        let row = $(this).find('td').text()
        console.log(
            row.match(country_regex), 
            row.match(water_total_regex),
            row.match(water_capita_regex),
            row.match(population_regex)
        );
    });
})

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