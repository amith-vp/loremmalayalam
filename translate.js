const translations = 
{
    "et": "എറ്റ്",
    "anim": "അനിം",
    "occaecat": "ഒക്കേക്കറ്റ്",
    "magna": "മാഗ്ന",
    "fugiat": "ഫുഗിറ്റ്",
    "eu": "യു",
    "cupidatat": "ക്യൂപിഡാറ്ററ്റ്",
    "ex": "എക്സ്",
    "minim": "മിനിം",
    "duis": "ദുയ്സ്",
    "do": "ഡൂ",
    "aliqua": "അലിക്വ",
    "ipsum": "ഇപ്സും",
    "deserunt": "ദെസെറുന്റ്",
    "proident": "പ്രൊഇഡന്റ്",
    "consequat": "കോൺസെക്ക്വാറ്റ്",
    "exercitation": "എക്സർസിറ്റേഷൻ",
    "in": "ഇൻ",
    "ullamco": "ഉള്ളാംകോ",
    "laboris": "ലാബോറിസ്",
    "cillum": "സില്ലും",
    "elit": "എലിറ്റ്",
    "ea": "ഇയാ",
    "veniam": "വെനിയം",
    "irure": "ഇറുറേ",
    "sit": "സിറ്റ്",
    "aliquip": "അലിക്വിപ്പ്",
    "Lorem": "ലോറം",
    "esse": "എസ്സേ",
    "amet": "അമെറ്റ്",
    "eiusmod": "എയ്സ്മോഡ്",
    "sunt": "സൺറ്റ്",
    "ad": "ആദ്",
    "mollit": "മൊള്ളിറ്റ്",
    "excepteur": "എക്സെപ്റ്റെറ്",
    "aute": "ഔട്ടേ",
    "est": "എസ്റ്റ്",
    "culpa": "കൾപ്പ",
    "non": "നോൺ",
    "incididunt": "ഇൻസിഡിറ്റുംറ്റ്",
    "quis": "ക്വിസ്",
    "reprehenderit": "റെപ്രിഹെൻഡിറ്റ്",
    "pariatur": "പാരിഅറ്റുർ",
    "adipisicing": "അദിപിസിംഗ്",
    "id": "ഐഡി",
    "nulla": "നുള്ള",
    "sint": "സിംറ്റ്",
    "laborum": "ലബോറും",
    "velit": "വെളിത്ത്",
    "enim": "എനിം",
    "ut": "ഉട്",
    "dolore": "ഡോളോറെ",
    "dolor": "ഡോളോർ",
    "officia": "ഒഫിസ്സിയ",
    "nostrud": "നോസ്ട്രുഡ്",
    "consectetur": "കോൺസെക്ക്റ്റുർ",
    "qui": "ക്വി",
    "tempor": "റ്റെംപോർ",
    "voluptate": "വൊളപ്തതെ",
    "commodo": "കൊമ്മോഡോ",
    "labore": "ലബോറെ",
    "nisi": "നിസി"
}      
async function translateSentence(sentence) {
    let output = '';
    if (sentence.includes(' ')) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
    const translatedWord = translations[words[i]] || words[i];
    output +=`${translatedWord} `
    }
    output = output.trim();
    } else {
    const translatedWord = translations[sentence] || sentence;
    output = translatedWord;
    }
    return output;
    }
    
    export { translateSentence };