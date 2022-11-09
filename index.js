// Write your solution here!
let cats = [`Milo`, `Otis`, `Garfield`]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    let newCatArray1 = [...cats, name]
    return newCatArray1
}

// in order to add a new value to create a new array, we first must create a new array and then use the spread operator

function prependCat(name) {
    let newCatArray2 = [name, ...cats]
    return newCatArray2
}

function removeLastCat() {
    let newCatArray3 = cats.slice(0,cats.length - 1)
    return newCatArray3
}

function removeFirstCat() {
    let newCatArray4 = cats.slice(1)
    return newCatArray4
}