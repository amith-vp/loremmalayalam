const Consonants = [
    'ക', 'ഖ', 'ഗ', 'ഘ', 'ങ',
    'ച', 'ഛ', 'ജ', 'ഝ', 'ഞ',
    'ട', 'ഠ', 'ഡ', 'ഢ', 'ണ',
    'ത', 'ഥ', 'ദ', 'ധ', 'ന',
    'പ', 'ഫ', 'ബ', 'ഭ', 'മ',
    'യ', 'ര', 'റ', 'ല', 'ള', 'ഴ', 'വ', 'ശ', 'ഷ', 'സ', 'ഹ'
];
const dependentVowels = ['ാ', 'ി', 'ീ', 'ു', 'ൂ', 'ൃ', 'െ', 'േ', 'ൈ', 'ൊ', 'ോ', 'ൌ'];
const independentVowels = ['അ', 'ആ', 'ഇ', 'ഈ', 'ഉ', 'ഊ', 'ഋ', 'ൠ', 'ഌ', 'ൡ', 'എ', 'ഏ', 'ഐ', 'ഒ', 'ഓ', 'ഔ'];
const endConsonants = ['ം', 'ഃ'];
const conjuncts = [
    'ക്ക', 'ഗ്ഗ', 'ങ്ങ', 'ച്ച', 'ജ്ജ', 'ഞ്ഞ',
    'ട്ട', 'ഡ്ഡ', 'ണ്ണ', 'ത്ത', 'ദ്ദ', 'ന്ന',
    'പ്പ', 'ബ്ബ', 'മ്മ', 'യ്യ', 'ശ്ശ',
    'ര്ര', 'സ്സ', 'ല്ല', 'ള്ള', 'വ്വ',
    'ങ്ക', 'ഗ്ന', 'ഗ്മ', 'ഞ്ച', 'ഞ്ജ',
    'ണ്മ', 'ണ്ട', 'ണ്ഡ', 'ന്മ', 'ന്ത', 'ന്ദ',
    'ത്മ', 'മ്പ', 'ഹ്ന', 'ഹ്മ', 'ക്ഷ', 'ജ്ഞ',
    'ശ്ച', 'ത്ഥ', 'ത്ഭ', 'ത്സ', 'സ്ഥ', 'സ്റ്റ', 'ന്റ', 'ന്റെ', 'ന്ധ', 'ദ്ധ'
];
const chillu = ['ർ', 'ൽ', 'ൻ', 'ൾ'];

function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateWord() {
    let word = '';
    const numLetters = Math.floor(Math.random() * 5) + 3;

    // First letter
    let letter;
    if (Math.random() < 0.5) {
        letter = getRandomItemFromArray(Consonants);
    } else if (Math.random() < 0.75) {
        letter = getRandomItemFromArray(independentVowels);
    } else {
        letter = getRandomItemFromArray(Consonants) + getRandomItemFromArray(dependentVowels);
    }
    word += letter;

    // Middle letters
    for (let i = 1; i < numLetters - 1; i++) {
        let prevLetter = word[i - 1];
        let possibleLetters;
        if (conjuncts.includes(prevLetter)) {
            possibleLetters = Consonants.concat(dependentVowels).concat(conjuncts);
        } else if (dependentVowels.includes(prevLetter[prevLetter.length - 1])) {
            possibleLetters = Consonants.concat(conjuncts);
        } else {
            possibleLetters = Consonants.concat(dependentVowels).concat(conjuncts);
        }
        letter = getRandomItemFromArray(possibleLetters);
        word += letter;
    }

    // Last letter
    let prevLetter = word[word.length - 1];
    let possibleLetters;
    if (conjuncts.includes(prevLetter)) {
        possibleLetters = Consonants.concat(dependentVowels).concat(endConsonants);
    } else if (dependentVowels.includes(prevLetter[prevLetter.length - 1])) {
        possibleLetters = Consonants.concat(endConsonants);
    } else {
        possibleLetters = Consonants.concat(dependentVowels).concat(endConsonants);
    }
    letter = getRandomItemFromArray(possibleLetters);
    word += letter;

    return word;
}

function generateWords(numWords) {
    let words = [];
    for (let i = 0; i < numWords; i++) {
        words.push(generateWord());
    }
    return words;
}

function generateRandomSentence(numWords) {
    const words = generateWords(numWords);
    let sentence = words.join(' ');
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
    return sentence;
}

// lorem
const randomWords ={
  "et": "എറ്റ്",
  "anim": "ആനിം",
  "occaecat": "ഒക്കേകാറ്റ്",
  "magna": "മാഗ്നാ",
  "fugiat": "ഫ്യൂജിറ്റ്",
  "eu": "എയു",
  "cupidatat": "ക്യൂപിഡാറ്റ്",
  "ex": "എക്സ്",
  "minim": "മിനിം",
  "duis": "ഡ്യൂയിസ്",
  "do": "ഡോ",
  "aliqua": "ആലിക്വാ",
  "ipsum": "ഇപ്സം",
  "deserunt": "ഡിസെറുന്റ്",
  "proident": "പ്രൊഇഡന്റ്",
  "consequat": "കോൺസെക്വാറ്റ്",
  "exercitation": "എക്സെർസിറ്റേഷൻ",
  "in": "ഇൻ",
  "ullamco": "ഉല്ലാംകോ",
  "laboris": "ലാബോറിസ്",
  "cillum": "ചില്ലം",
  "elit": "എലിറ്റ്",
  "ea": "ഈ",
  "veniam": "വെനിയം",
  "irure": "ഇറൂറെ",
  "sit": "സിറ്റ്",
  "aliquip": "അലിക്വിപ്പ്",
  "Lorem": "ലോറം",
  "esse": "എസ്സെ",
  "amet": "അമെറ്റ്",
  "eiusmod": "എയ്യൂസ്മോഡ്",
  "sunt": "സുന്ത്",
  "ad": "ആഡ്",
  "mollit": "മൊല്ലിറ്റ്",
  "excepteur": "എക്സെപ്റ്റെർ",
  "aute": "ഓട്ടെ",
  "est": "എസ്റ്റ്",
  "culpa": "കുൽപ്പ",
  "non": "നോൺ",
  "incididunt": "ഇൻസിഡിഡുന്റ്",
  "quis": "ക്വിസ്",
  "reprehenderit": "റെപ്രഹെൻഡെറിറ്റ്",
  "pariatur": "പാരിയാതൂർ",
  "adipisicing": "അഡിപിസിസിംഗ്",
  "id": "ഐഡി",
  "nulla": "നല്ല",
  "sint": "സിന്‍റ്",
  "laborum": "ലബോറും",
  "velit": "വെലിറ്റ്",
  "enim": "എനിം",
  "ut": "ഉട്ട്",
  "dolore": "ഡോളോരെ",
  "dolor": "ഡോളോർ",
  "officia": "ഓഫീഷ്യ",
  "nostrud": "നോസ്ത്രുഡ്",
  "consectetur": "കോൺസെക്റ്റെത്ർ",
  "qui": "ക്വി",
  "tempor": "ടെംപോർ",
  "voluptate": "വൊളുപ്‌ടേറ്റ്",
  "commodo": "കൊമ്മോഡോ",
  "labore": "ലബോറെ",
  "nisi": "നിസി"
}


const kilikiWords=[
"നിംമ്ഡാ",
    "ഗോജ്രാസ്",
    "തെൽമി",
    "ആര്ധ",
    "ഭോസ്",
    "ക്ക്രാക്‌വികാന",
    "ഭൂംലെ",
    "മോഹിനോജുകൂ",
    "ലിയോഹക്വേ",
    "ഉനു",
    "കാസ്റ്റാ",
    "പീസ്രാ",
    "രൂപുവീമിന്ന്",
    "ബഹാത്തീ",
    "സരത്രാമാ",
    "ഭ്രീംസാ",
    "ഇങ്ക്നൂം",
    "മിന്മഹക്കി",
    "ചോഹോ",
    "ചൂന്നമതസ്വീക്ക്‌ധീ",
    "ത്രാ",
    "ഘ്രാക്ഷ്",
    "ഹൂർ",
    "ആര്ര്",
    "ബീറ്റ്",
    "ക്രുവൂല്",
    "ഡുന്ക്ര",
    "ലൂർഷ",
    "ക്വേ",
    "നിംക്ലെ",
    "ഗഡീറ്റ്‌വൂട്ട",
    "കൊറോറ്റ",
    "ജ്ര",
    "റെയ്",
    "ഫുഹൂക്ലെ",
    "ശ്വീക്",
    "മിന്",
    "സുരപ്പ്",
    "ഉനോ",
    "ധബ്",
    "സാസ്സ്ലാ",
    "ഫിനീ",
    "ഡംബഡംബ",
    "ജിവ്ല",
    "ബാഹാന",
    "ഗന്ധാരാഡാല",
    "കിലിക്കി",
    "പൊളിഞ്ചലി",
    "ഗുന്ദാരാഡാല",
    "വീരുലാര",
    "നീലാദ്രി",
    "പൊരു",
    "ബിരിഡു",
    "പ്രഭുത്വ",
    "പടദ",
    "തളതളപടുതു",
    "വസ്തവ",
    "ഉനോബി",
    "ഗൂകിരാകിജ",
    "കീമീ സുദജ",
    "ദീജ",
    "ജാർഡജ",
    "പെബജ",
    "കാന്യ",

    "ഫുടികൈ",

    "എപിടികിവ",
    "ഉലേജ",
    "ടിപിടാപിവ",
    "എഫ്സ്ലിവ",
    "പെപിവ",
    "ജെനിവ",
    "മീലിവ",
    "ലാലാബി",
    "ശ്രീലങ്കജ",
    "യെജിജ",
    "നീഫ്ജ",
    "ബഹാമജ",
    "ഒമാജ",
    "ഒബ്ടികിവ",
    "ഫൈലേജ",
    "ചോലേജ",
    "ഫിൻഫിനിവ",
    "പെപിവ",
    "മൊലേജ",
    "എജോജോവ",
    "മേരെ",
    "ഫൂയീരേ",
    "ഈരേ",
    "നായനേ",
    "മേമേ",
    "ഫൂയീരേ",
    "ഫിനോതികി",
    "ഉനോബി",
    "ഗൂകിരാകിജ",
    "കീമീ സുദജ",
    "ദീജ",
    "ജാർഡജ",
    "പെബജ",
    "നെ",
    "ചോയ്നെ",
    "ബയാൻ",
    "ടിക്ക",
    "ബൂനെ",
    "സാൻവ",
    "നെബി",
    "രേയുജ",
    "ബാസ്നി നെ ഹെർസഗോവിജ",
    "തേക്കാജ",
    "ലീബീജ",
    "ചാഫെയ്ക്",
    "അപ്പിലൂച്ചി",
    "സർപ്പിബിരിലൂച്ചി",
    "പാപ്പലൂച്ചി",
    "യീലൂച്ചി",
    "ഗോജിബിരിലൂച്ചി",
    "രഞ്ജലൂച്ചി",
    "ലൂനി",
    "ഫഹുചിനി",
    "ബീധിലിനി",
    "തിദിനി",
    "ദേയിനി",
    "ബാവഗാരിബിലിനി",
    "ചോചെ",

    "എസ്നെ",

    "ഹാസിനി",
    "പിഎക്സ്‌തീനീ",
    "ബേസെനി",
    "വേകിനി",
    "വിവിനി",
    "തൂഫഹുനി",
    "തിതിനി",
    "വാചാവ",
    "ധൂകി",
    "ഡെടിക്വ",
    "ലാഫീ",
    "ഫുടിക്ജ",
    "ലീകലീവ",
    "ബേബേ",
    "ഗാ",
    "സീ",
    "ഫാക്",
    "മിന്",
    "വെരിതെഫ",
    "തൂഫ",
    "മേരെ",
    "മീക്കി",
    "നേരേ",
    "റാൽ",
    "ലാർ",
    "തൂഫേ",

    "ലൂനി",
    "ഫഹുചിനി",
    "ബീധിലിനി",
    "തിദിനി",
    "ദേയിനി",
    "ബാവഗാരിബിലിനി",
    "ടെഡിഗരി",
    "ബിബാഗരി",
    "ജാമഗരി",
    "കാനീടെഡിഗരി",
    "മീജിറാഗരി",
    "ഹാസ്ഗരി",
    "കരിനെ",

    "സോരെവ",
    "സെലികിത്ദെസ്വക്സ്",
    "ഗിഗികിത്ദിനിവ",
    "ലേളേദിനിവ",
    "സെപാഗോവ",
    "ലീഗീധിവ",
    "ഫുചെ",

    "തുതികൈ",

    "ടിൻടിൻ",

    "ഫിസോജ",
    "ഗൂകിരാകിജ",
    "വിയറ്റ്നാജ",
    "തുവാലുജ",
    "ഗിലിജ",
    "ഗിരാഗിരാജ",
    "ബാഡ്ജ",
    "ആസ്ട്രിജ",
    "പനാമാജ",
    "ലക്ടെൻസ്റ്റേജ",
    "പോലികാജ",
    "പെകിജ",
    "പാര",
    "ഗരി",
    "നേനെ",
    "കയ്യൂജ",
    "യുഡി",
    "സിസിലിയുജ",
    "കളിജ",
    "പിണ്ജുജ",
    "പിണ്ജുജ",
    "റരിയുജ",
    "വേയുജ",
    "ഗെസിമോവ",
    "യുഡി",
    "യെയുജ",
    "വയുജ",
    "ഫാലിൻജ കിരാരോഡിമിജ",
    "ലെയുജ",
    "നീബോസി",
    "നീരക്സി",
    "സ്വിഗിഡുന്ജീസി",
    "റോപികാസി",
    "വാസി",
    "ഫേയിസ്സി",
    "ദുന്ബി",
    "അൽജീരിജ",
    "ബാഡ്ജ",
    "സാനിജ",
    "ഡെബ്ജ",
    "തായലക്സ്നിജ",
    "ചൊബോ",

    "റിബിവ",
    "റൈറ്റെ",
    "തിഹുനി",
    "യീമിനി",
    "സിവോകാനി",
    "ചിഞ്ചിനാലിനി",
    "ഹാകാതിനി",
    "ഹോയിനി",
    "ഗാ",
    "വെച്ചിഫാ",
    "ബേബേ",
    "തായ",
    "താൻ",
    "പാ",
    "റൈറ്റെഫാ",
    "യെയുജ",
    "ആസ്ട്രാക്സ്നിയ",
    "ആസ്ട്രിജ",
    "ലെയുജ",
    "ഹന്ഗരിജ",
    "യുഡി",
    "വയുജ",
    "ബയാൻ",
    "ചോയ്നെ",
    "ബൂനെ",
    "നെ",
    "ടിക്ക",
    "സാൻവ",
    "ബേസിനി",
    "പികിനി",
    "ബെരിവോകാനി",
    "ക്രാകിനി",
    "ദാമൊനി",
    "എവിനി",
    "ഫാഫ",
  
    "ഫാജോ",
  
    "ബാജോ",
  
    "മേലിവോ",
    "റേരേവോ",
    "ഈരേവോ",
    "മേമേവോ",
    "തോസാവോ",
    "റൈറ്റെ",
    "കോവിനി",
    "ബാഹെ",
    "ചോപ്പിനി",
    "ദൊതിനി",
    "സോസൊനി",
    "രകൊനി",
    "മൊവാനി",
    "ഡെക്സ്സി",
  
    "കാസി",
    "തെരദുന്ജീസി",
    "നേഹേബൊസി",
    "ദാര്‍ക്കസി",
    "ഫേയേസ്സി",
    "നീബൊസി",
    "തിഖലിനി",
    "രെമിനി",
    "തിസേന",
    "കോവിനി",
    "ജാനി",
    "ദാറ്റ്‌കാതോം",
    "മിയാഗാരി",
    "റെനൊഗാരി",
    "ബനീനഗാരി",
    "ബാവ്ഗാരി",
    "ലോരോഗാരി",
    "നെയ്ഗാരി",
    "നിധിവ്ക്സ്",
    "സെപാഗോവ്ക്സ്",
    "രവ്ക്സ്",
    "ബിജുരാവ്ക്സ്",
    "ഗിഗികിത്ദിനിവ",
    "ഉബ്ബുസെപാദെസ്",
    "ഫീപാരൈറ്റെ",
  
    "ലേസ്സോനി",
    "മേവിനി",
    "റീലാനി",
    "ലൂഷിനി",
    "ഥാദിനി",
    "തിദിനി",
    "പൂക്കോസെപി",
  
    "കോവിനി",
    "വീനീനി",
    "ലാലോനി",
    "ഹിഷ്പിനി",
    "ഒച്ചീനീ",
    "സിഷിനി",
    "ചിരിജ",
    "താത",
    "യബികിജ",
    "കിപിജ",
    "ബോസ്നിയ ഹെർസെഗോവിന",
    "നികാരഗുജ",
    "ചിരി",
  
    "ഹൂഫാനി",
    "മുമുനി",
    "ദൊതിനി",
    "മൊവൊനി",
    "ജാപിനി",
    "രെകോബിനി",
    "ജീവുനി",
    "അവ്രവെചി",
    "ചിവിവെചി",
    "ആസ്പവെചി",
    "ചൊകിവെചി",
    "സിംഗിവെചി",
    "ചിരിപിവെചി",
    "ഫുക്സ",
  
    "മോഗരി",
    "കൊയ്‌ഗരി",
    "ഹാസ്ഗരി",
    "നൈനഗാരി",
    "ഗാ",
    "താനേ",
    "പാ",
    "തുതാനേ",
    "നേരെ",
    "ലേരെ",
    "നേരെ",
    "ലേരെ",
    "ഹഫുചെ"

]
//wikipedia
const getMalayalamWords = async (numWords) => {
    if (numWords > 1000) {
        return 'അനിയാ നിൽ , 1000-ഇൽ താഴെ';
    }
    let words = [];
    while (words.length < numWords) {
        const res = await fetch(
            'https://ml.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=100000&exsectionformat=wiki&format=json&origin=*'
        );
        const data = await res.json();
        const page = Object.values(data.query.pages)[0];
        const content = page.extract;
        const paragraphs = content.match(/<p>.*?<\/p>/g) || [];
        const text = paragraphs.map(p => p.replace(/<\/?[^>]+(>|$)/g, "")).join(' ');
        words = words.concat(text.split(/\s+/));
    }
    return words.slice(0, numWords).join(' ');
};

function toggleSpinner(button, show) {
    const spinner = button.querySelector('.spinner');
    if (show) {
        spinner.classList.remove('hidden');
    } else {
        spinner.classList.add('hidden');
    }
}
window.addEventListener("DOMContentLoaded", (event) => {

document.getElementById('random').addEventListener('click', (event) => {
    const button = event.currentTarget;
    toggleSpinner(button, true);
    setTimeout(() => {
        const count = parseInt(document.getElementById('wordCount').value) || 50;
        const generatedText = generateRandomSentence(count);
        document.getElementById('generatedText').value = generatedText;
        toggleSpinner(button, false);
    }, 500); 
});

document.getElementById('lorem').addEventListener('click', (event) => {
    const button = event.currentTarget;
    toggleSpinner(button, true);
    setTimeout(() => {
        const count = parseInt(document.getElementById('wordCount').value) || 50;
        const words = Object.values(randomWords);
        const selectedWords = [];
        for (let i = 0; i < count; i++) {
            selectedWords.push(words[Math.floor(Math.random() * words.length)]);
        }
        document.getElementById('generatedText').value = selectedWords.join(' ');
        toggleSpinner(button, false);
    }, 500);
});

document.getElementById('kiliki').addEventListener('click', (event) => {
    const button = event.currentTarget;
    toggleSpinner(button, true);
    setTimeout(() => {
        const count = parseInt(document.getElementById('wordCount').value) || 50;
        const words = Object.values(kilikiWords);
        const selectedWords = [];
        for (let i = 0; i < count; i++) {
            selectedWords.push(words[Math.floor(Math.random() * words.length)]);
        }
        document.getElementById('generatedText').value = selectedWords.join(' ');
        toggleSpinner(button, false);
    }, 500);
});

document.getElementById('wikipedia').addEventListener('click', async (event) => {
    const button = event.currentTarget;
    toggleSpinner(button, true);
    const count = parseInt(document.getElementById('wordCount').value) || 50;
    const generatedText = await getMalayalamWords(count);
    document.getElementById('generatedText').value = generatedText;
    toggleSpinner(button, false);
});

document.getElementById('copyButton').addEventListener('click', () => {
    const textArea = document.getElementById('generatedText');
    textArea.select();
    document.execCommand('copy');

    document.getElementById('copyButton').innerText = 'പകർത്തി!';
    setTimeout(() => {
        document.getElementById('copyButton').innerText = 'പകർത്തുക';
    }, 3000);

});
});