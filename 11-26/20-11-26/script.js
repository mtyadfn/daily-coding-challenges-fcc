function longestWord(sentence) {
    const arrSentence = sentence.split(' ');
    let longest = '';

    for(let i = 0; i < arrSentence.length; i++){
        arrSentence[i] = arrSentence[i].match(/[a-z]/ig).join('');
        if(arrSentence[i].length > longest.length){
            longest = arrSentence[i].toString();
        }
    }
    sentence = longest;
    return sentence;
}