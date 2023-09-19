function logger (param) {
    /* let param = 'hello' */
    console.log (param)
}

/* logger ('hello')
logger ('ciao')
logger ('szia') */

function logTheSumOfTwoNumbers (x, y) { /* camelCase */
    /*  let x = 1
        let y = 2 */

    console.log(x + y);
}

/* logTheSumOfTwoNumbers(1, 2); */

function sumOfTwoNumbers(x, y) {
    let sum = 0;
    sum = x + y;

    return sum; /* return gives back the value of  'sum' */
}

logger(sumOfTwoNumbers(10, 5))

