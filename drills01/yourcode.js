function sumArray(arr) {
    return arr.reduce(function (a, b) {
        return a + b
    }, 0);
}

function fitWithinVal(array, goal) {
    let sum = 0;
    const newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (sum < goal || sum === goal) {
            sum = sum + array[i];
            if (sum < goal || sum === goal) {
                newArray.push(array[i]);
            } else if (sum > goal) {
                sum = sum - array[i];
                continue;
            }
        }
    }
    return newArray;
}

function getAllNamesShorterThan(array, num) {
    const newArray = [];
    for (var i = 0; i < array.length; i++) {
        let name = array[i];
        if (name.length < num) {
            newArray.push(name);
        } else {
            continue;
        }
    }
    return newArray;
}

function makeLabel(array) {
    const {
        familyName,
        givenName,
        greeting,
        age,
        height,
        colors: { eye, hair },
        "home address": homeAddress
    } = array;
    const {
        streetNumber,
        streetName,
        state,
        zip,
        city
    } = homeAddress;
    return (`${greeting} ${givenName} ${familyName}\n${streetNumber} ${streetName}\n${city}, ${state} ${zip}`);
}
