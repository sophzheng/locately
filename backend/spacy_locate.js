const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const got = require('got');

let url = "https://www.cnn.com/travel/article/experts-guide-to-great-american-road-trips/index.html"
// does not include title -> concat later 
// includes script text which we don't want

async function analyzeText(){
  let text = await got(url).then(res => {
    const dom = new JSDOM(res.body);
    return dom.window.document.querySelector("body").textContent;
  }).catch(err => {
    console.log(err);
  });
  console.log(text);
}

analyzeText();