// For addition logic
const add = (a = 0, b = 0) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 0
    }
    return a + b;
}

// for substraction logic
const sub = (a = 0, b = 0) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 0
    }
    return a - b;
}



module.exports = { add, sub, };