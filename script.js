function negativeOrPositive(number) {
    if (number < 0) {
        return "negative"
    } else if (number > 0) {
        return "positive"
    } else {
        return "zero"
    }
}

function logger(text) {
    console.log(text)
}

/* logger(negativeOrPositive(0)) */

function decideIfBeerIsGood(beer) {
    if (beer.price < 340 && beer.abv > 4.7) {
        return beer.name + ": jó sör mert olcsó és üt"
    } else if (beer.price < 340) {
        return beer.name + ": jó sör, mert olcsó"
    } else if (beer.abv > 4.7) { 
        return beer.name + ": jó sör mert üt"
    } else {
        return beer.name + ": nem jó"
    }
}

let dreher = { name: "Dreher", price: 349, abv: 5}
let soproni = { name: "Soproni", price: 329, abv:4.5}
let borsodi = { name: "Borsodi", price: 339, abv: 4.8}
let pecsi = { name: "Pécsi", price: 379, abv: 4.2}


logger(decideIfBeerIsGood(borsodi))
logger(decideIfBeerIsGood(soproni))
logger(decideIfBeerIsGood(dreher))
logger(decideIfBeerIsGood(pecsi))