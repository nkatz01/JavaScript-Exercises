function addTwoDigits(n) {
       return parseInt(n.toString().substring(0,1)) + parseInt(n.toString().substring(1))

}

console.log(addTwoDigits(27))