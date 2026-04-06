/*let p = fetch("https://techhubindia.org/gth_video_material");
p.then((val) => val.text()).then((d) => {console.log(d)}).catch((err) => console.log());
*/
const cheerio = require("cheerio");

async function scrape() {
    const response = await fetch("https://techhubindia.org/gth_practice_test");
    const html = await response.text();

    const $ = cheerio.load(html);

    console.log($("p").text());
}

scrape();