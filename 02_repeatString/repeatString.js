const repeatString = function(word, count) {
    let repeatedWord = "";

    if(count < 0){
        return "ERROR";
    }
    for(let i = 0; i < count; i++){
        repeatedWord = repeatedWord + word;
    }
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
