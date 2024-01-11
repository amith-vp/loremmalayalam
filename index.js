
import express from 'express';
import { LoremIpsum } from 'lorem-ipsum';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { translateSentence } from './translate.js';
import { generateRandomSentence } from './randomgen.js';


const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});


const getMalayalamWords = async (numWords) => {
  let words = [];

  while (words.length < numWords) {
    const res = await fetch(
      'https://ml.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=100000&exsectionformat=wiki&format=json'
    );
    const data = await res.json();
    const page = Object.values(data.query.pages)[0];
    const content = page.extract;
    const $ = cheerio.load(content);
    const paragraphs = $('p').toArray().map((p) => $(p).text());
    const text = paragraphs.join(' ');
    words = words.concat(text.split(/\s+/));
  }

  return words.slice(0, numWords).join(' ');
};

const generateLoremIpsum = async(numWords) => {
console.log(numWords);
  let loremtext =  lorem.generateWords(Number(numWords));
console.log(loremtext);
  const translatedSentence = await translateSentence(loremtext);
  return translatedSentence;

};

app.get('/', (req, res) => {
  res.render('home.ejs', { result: '' });
});
app.use(express.static('views'));

app.get('/generate', async (req, res) => {
  const { source, numWords } = req.query;
  let result;
  if (source === 'lorem') {
    result = await generateLoremIpsum(numWords);
  } else if (source === 'wikipedia') {
    result = await getMalayalamWords(numWords);
  } else {
    result = await generateRandomSentence(numWords);
  }
  res.type('text').send(result);
});



app.listen('7071','0.0.0.0',()=>{
      console.log("server is listening on 9000 port");
})
