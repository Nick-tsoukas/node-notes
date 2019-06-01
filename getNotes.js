let numbers  = [];

getNotes = function(){
    for(let i =0; i<= 10; i++){
        numbers.push(i);
    }
    return numbers;
}

module.exports = getNotes;