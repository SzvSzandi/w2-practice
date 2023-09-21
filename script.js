/*  let array = ["alma", 12, false, undefined, null]

console.log(array) */

/* let stringArray = ["Imola Ács", "Pali Herrer", "Nagy Zsombor"]

console.log(stringArray)

console.log(stringArray[0]) */

/* let myObj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: 15,
    key5: 600,
    key6: true,
    key7: ["Imola Ács", "Pali Herrer", "Nagy Zsombor"]
}

console.log(myObj.key7[2]) */

let myFacebook = {
    name: "Szvatkó Alexandra",
    age: 30,
    location: "Budaörs",
    friends: [
        "Gipsz Jakab",
        "John Doe",
        "Példa Péter"
    ],
    favouriteMovies: [
    {
        title: "Harry Potter",
        year: 2001,
        characters: [
            "Harry Potter",
            "Ronald Weasly",
            "Hedvig"
        ]
    },
    {
       title: "Ananász Expressz",
       year: 2012,
       characters: [ 
        "Seth Rogen",
        "James Franco"
    ]
    },
    {
        title: "Üvegtigris",
        year: 2004,
        characters: [
            "Csoki",
            "Gaben",
            "Lali"
        ]
    },
], 

};

console.log(myFacebook.favouriteMovies[0].characters[1])