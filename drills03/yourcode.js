function getPath(string) {
    const words = string.split('/');
    return words;
}

function getPathParts(input) {
    // console.log("Input: ", input);
    const separators = ['\\\://', '\\\:', '\\\/'];
    const words = input.split(new RegExp(separators.join('|'), 'g'));
    // console.log("Words: ", words);
    let path = '';
    for (var i = 3; i < words.length - 1; i++) {
        if (words.length < 6) {
            path = `/${words[i]}`
        } else if (words.length >= 6) {
            path += `/${words[i]}`
        }
    }
    path = path.slice(1);
    // console.log("Path: ", path);
    let newObj = {};
    newObj["protocol"] = words[0];
    newObj["host"] = words[1];
    newObj["port"] = parseInt(words[2]);
    newObj["path"] = path;
    newObj["file"] = words[words.length - 1];
    return newObj;
}

// ASCII Reference
// uppercase A = 65
// uppercase Z = 90
function getCapitalCount(array) {
    let counter = 0;
    for (var i = 0; i < array.length; i++) {
        let word = array[i];
        if (word.charCodeAt(0) > 64 && word.charCodeAt(0) < 91) {
            counter++;
        }
    }
    return counter;
}

function correctCalcChecker(array) {
    // console.log(array);
    let newArray = [];
    for (var i = 0; i < array.length; i++) {
        let num1 = array[i].num1;
        let num2 = array[i].num2;
        let op = array[i].op;
        let result = array[i].result;
        let answer = '';
        switch (op) {
            case '+':
                answer = num1 + num2
                break;
            case '-':
                answer = num1 - num2
                break;
            case '*':
                answer = num1 * num2
                break;
            case '/':
                answer = num1 / num2
                break;
            default:
                console.log("Error");
        }
        if (answer === result) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// function doMath() {

// }
