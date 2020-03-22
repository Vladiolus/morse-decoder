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
  let final = "";
  let symb = "";
  let cifer;
  for (let i = 0; i < expr.length / 10; i++) {
    if (expr[i * 10] == '*') {
      final += " ";
      continue;
    }
    cifer = "";
    for (let j = i * 10; j < (i * 10) + 10; j += 2) {
      symb = expr.slice(j, j+2);
      if (symb == "10") {
        cifer += ".";
        continue;
      }
      if (symb == "11") {
        cifer += "-";
        continue;
      }
    }
    final += MORSE_TABLE[cifer];
  }
  return final;
}

module.exports = {
    decode
}