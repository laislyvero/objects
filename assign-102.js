let sumNumbers =  {
    num1: 15,
    num2: 17,
    addition: function() {
        return this.num1 + this.num2;
    },
};

console.log(sumNumbers.addition());
let minusNumbers = {
    num1: 17,
    num2: 15,
    subtract: function() {
        return this.num1 - this.num2;
    },
};
console.log(minusNumbers.subtract()) ;