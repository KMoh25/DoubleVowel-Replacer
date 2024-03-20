
function replaceDoubleVowels() {
    const inputWord = document.getElementById('inputWord').value;
    

    const result = inputWord.replace(/([AEIOUaeiou])\1/g, match => match.charAt(0) + '́');

    document.getElementById('outputResult').textContent = result;
}
