const fibonacci = function(n) {
    if(n <= 0){
        return "OOPS";
    }
    n = Number(n)
    let n0 = 1;
    let n1 = 1;
    for(i = 3; i <= n; i++){
        let temp = n0 + n1;
        n0 = n1;
        n1 = temp;
    }
    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
