const findLongestWord = function(string) {
    const str = string.split(' ');
    let longWord = String(str[0]);
    let wordLength = String(str[0].length)

    for (let i = 0; i < str.length; i += 1){
        if (str[i].length > wordLength) {
            longWord = String(str[i]);
            wordLength = String(str[i].length);
        }
    }

    return longWord;
    
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'