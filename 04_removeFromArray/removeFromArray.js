const removeFromArray = function(source, ...remove) {
    for(let i = 0; i < remove.length; i++){
        for(let j = 0; j < source.length; j++){
            if(remove[i] === source[j]){
                source.splice(j, 1)
            }
        }
    }
    return source;
};

// Do not edit below this line
module.exports = removeFromArray;
