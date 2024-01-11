
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
    const numLetters = Math.floor(Math.random() * 5) + 3; // generate a word with 3-7 letters
  
    // first letter
    let letter;
    if (Math.random() < 0.5) {
      letter = getRandomItemFromArray(Consonants);
    } else if (Math.random() < 0.75) {
      letter = getRandomItemFromArray(independentVowels);
    } else {
      letter = getRandomItemFromArray(Consonants) + getRandomItemFromArray(dependentVowels);
    }
    word += letter;
  
    // middle letters
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
  
    // last letter
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
  

  export { generateRandomSentence };
