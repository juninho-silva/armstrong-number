/**
 * This function verify the input parameter to validate, 
 * if the number is the
 * armstrong number.
 * @param {number} input any number
 * @returns the result of calcule of armstrong.
 */
const verify = function(number){
    const num = number.split('')
    let count = 0

    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        let item = parseInt(element)
        item = Math.pow(item, num.length)
        count = count + item
    }

    if (count == number) {
        return `${count} is an Armstrong number.`
    }

    return `${count} is not an Armstrong number.`
}

console.log(verify('153'))