var fs = require("fs");
const { arrayBuffer } = require("stream/consumers");

function breakLines() {
    console.log("")
    console.log("")
}

// Exercice 1 : 

// fs.readFile("jour07.txt", function (err, data) {
//     if (err) {
//         console.error(err)
//         return;
//     }

//     // console.log(data.toString())
// })

// fs.unlink("jour07.txt", function (err, data){
//     if (err) {
//         console.error(err)
//         return;
//     }

//     // console.log(data.toString())
// })

breakLines()

fs.writeFile("jour07.txt", "// Marylin manson", function (err) {
    if (err) {
        console.error(err);
        return
    }
})

fs.readFile("jour07.txt", function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    // console.log(data.toString())
})

breakLines()

// Exercice 2 : 

var array = [1, 2, 3, 4, 5]
var doubles = array.map(function (num) {
    return num * 2;
});

console.log(doubles)

breakLines()

// Exercice 3 : 

var longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]

var shortnames = longNames.map(function (str) {
    console.log("")
    var newNames = { name: `${str.firstName} ${str.lastName}` }
    return newNames
})

console.log(shortnames)

breakLines()

// Exercice 4 : 

var array = [1, "toto", 34, "javaScript", 8]

var numbers = array.filter(function (num) {
    return Number(num)

})
console.log(numbers)


// Exercice 5 : 

var numbers = [1, 2, 3, 4, 5, 6, 7, 8]
var even = numbers.filter(function (num) {
    if (num % 2 === 0) {
        return num
    }

})
console.log(even)

var cakes =
    [
        {
            name: "cake",
            flavor: "vanilla",
            status: "available"
        },
        {
            name: "brownie",
            flavor: "chocolate",
            status: "available"
        },
        {
            name: "pie",
            flavor: "strawberry",
            status: "available"
        },
        {
            name: "muffin",
            flavor: "pistachio",
            status: "available"
        },
        {
            name: "donut",
            flavor: "chocolate",
            status: "available"
        },
    ];

var sold = cakes.filter(function (chocolate) {
    return chocolate.flavor === "chocolate"
})

var soldOut = sold.map(function (elements){
    elements.status = "sold out!"
    return elements
})

console.log(soldOut)
