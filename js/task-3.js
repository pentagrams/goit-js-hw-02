const findLongestWord = function(string) {
    let wordArr = string.split(' ');
    let longestWord = 0;
    for (let i = 0; i < wordArr.length; i += 1) {
        let word = wordArr[i];
        let lengthWord = word.length;
        
        

        if (lengthWord[0] > longestWord) {
            longestWord = lengthWord;
        }
        
    }

    return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'