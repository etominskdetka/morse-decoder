const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let arrayNum = [];
    let phraseHuman = '';

    for (let i = 0; i < expr.length; i++) {
        if (i % 10 == 0) {
            arrayNum.push(expr.substring(i, i + 10));
        }
    }

    for (let j = 0; j < arrayNum.length; j++) {
        let strLetter = '';
        for ( let a = 0; a < 10; a++) {
            if (arrayNum[j][a] == '1' && arrayNum[j][a + 1] == '0') {
                strLetter += '.';
                a++;
            } else if (arrayNum[j][a] == '1' && arrayNum[j][a + 1] == '1') {
                strLetter += '-';
                a++;
            } else if (arrayNum[j][a] == '*') {
                strLetter = ' ';
            }
        }
        if (strLetter == ' ') {
            phraseHuman += strLetter;
        } else {
            for (key in MORSE_TABLE) {
                if (strLetter == key) {
                    phraseHuman += MORSE_TABLE[key];
                }
            }
        }
    }

    return phraseHuman;

}

module.exports = {
    decode
}