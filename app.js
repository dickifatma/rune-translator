const runeMap = {
    'ᚠ' : '0',
'ᚢ' : '1',
'ᚦ' : '2',
'ᚨ' : '3',
'ᚱ' : '4',
'ᚲ' : '5',
'ᚷ' : '6',
'ᚹ' : '7',
'ᚺ' : '8',
'ᚾ' : '9',
'ᛁ' : 'A',
'ᛃ' : 'B',
'ᛇ' : 'C',
'ᛈ' : 'D',
'ᛉ' : 'E',
'ᛊ' : 'F'
}

function translateFromRune (i) {
    return i.split('').map(char => runeMap[char]).join('')
}

function formatOutput(text, chunkSize = 16) {
    return text.match(new RegExp(`.{1,${chunkSize}}`, 'g')).join('\n');
}
function translateRune() {
    const runeInput = document.getElementById('runeInput').value;
    const translated = translateFromRune(runeInput);
    const formatted = formatOutput(translated);
    document.getElementById('output').textContent = formatted;
  }