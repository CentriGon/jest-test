function sum(a, b) {
    return a+b;
}

function capitalize(strig) {
    return strig.substring(0,1).toUpperCase() + strig.substring(1); 
}

function reverseString(string) {
    let newString = "";

    for (let i = string.length; i > 0; i--) {
        newString += string.substring(i - 1, i);
    }

    return newString;
}


const calculator = () => {

    const add = (a, b)=> {
        return a + b;
    }

    const subtract = (a, b)  => {
        return a - b;
    }

    const divide = (a, b) => {
        return Math.floor(a / b);
    }

    const multiply = (a, b) =>  {
        return a * b;
    }

    return {add, subtract, divide, multiply}
}

const calc = calculator;


let letterArray = [
    { 
        letter: "a",
        number: 1,
    },
    { 
        letter: "b",
        number: 2,
    },
    { 
        letter: "c",
        number: 3,
    },
    { 
        letter: "d",
        number: 4,
    },
    { 
        letter: "e",
        number: 5,
    },
    { 
        letter: "f",
        number: 6,
    },
    { 
        letter: "g",
        number: 7,
    },
    { 
        letter: "h",
        number: 8,
    },
    { 
        letter: "i",
        number: 9,
    },
    { 
        letter: "j",
        number: 10,
    },
    { 
        letter: "k",
        number: 11,
    },
    { 
        letter: "l",
        number: 12,
    },
    { 
        letter: "m",
        number: 13,
    },
    { 
        letter: "n",
        number: 14,
    },
    { 
        letter: "o",
        number: 15,
    },
    { 
        letter: "p",
        number: 16,
    },

    { 
        letter: "q",
        number: 17,
    },
    { 
        letter: "r",
        number: 18,
    },
    { 
        letter: "s",
        number: 19,
    },
    { 
        letter: "t",
        number: 20,
    },
    { 
        letter: "u",
        number: 21,
    },
    { 
        letter: "v",
        number: 22,
    },
    { 
        letter: "w",
        number: 23,
    },
    { 
        letter: "x",
        number: 24,
    },
    { 
        letter: "y",
        number: 25,
    },
    { 
        letter: "z",
        number: 26,
    },
]

function caesarCipher(String, shiftFactor) {
    let stringArray = [];
    let q = 0;
    for (let i = 0; i < String.length; i++) {
        for (let j = 0; j < letterArray.length; j++) {
            if ((String.substring(i, i+ 1)) == (letterArray[j].letter)) {
                stringArray[q] = letterArray[j].number;
                q++;
            }
        }
        if (q <= i) {
            stringArray[q] = "" + String.substring(i, i+1);
            q++
        }
    }


    stringArray.forEach(function(val, index, array) {
        console.log()
        if (typeof val == 'number') {
            array[index] = val+ shiftFactor;
        }
        if (array[index] > 26) {
            array[index] = array[index] - 26;
        }
    })

    let returnString = "";
    let s = 0;
    stringArray.forEach(function(val, index) {
        letterArray.forEach(function(val2) {
            if (val == val2.number) {
                returnString += val2.letter;
                s++;
            }
        })
        if (s <= index) {
            returnString += val
            s++;
        }
    })

    return returnString;
}

function arrayInfo(array) {
    let min = array[0];
    let max = array[0];
    let average = 0;
    let length = 0;

    array.forEach((val) => {
        if (val > max) {
            max = val;
        }
        if (val < min) {
            min = val;
        }
        average += val;
        length++;
    })

    average /= length;

    const object  = {
        "minimum": min,
        "maximum": max,
        "avg": Math.round(average),
        "Length": length,
    }

    return object


}





module.exports = {capitalize, sum, reverseString, calc, caesarCipher, arrayInfo};