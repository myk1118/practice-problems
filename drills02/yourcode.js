function countOccurences(array, word) {
    const newArray = [];
    for (var i = 0; i < array.length; i++) {
        let currentWord = array[i];
        // console.log("Current Word: ", currentWord);
        if (currentWord === word) {
            newArray.push(currentWord);
        }
    }
    return newArray.length;
}

function wordLengths(array) {
    const newArray = [];
    for (var i = 0; i < array.length; i++) {
        let currentWord = array[i];
        let wordLength = currentWord.length;
        newArray.push(wordLength);
    }
    return newArray;
}

function getMinMaxMean(array) {
    // console.log(...array);
    const newObj = {};
    let min = Math.min(...array);
    let max = Math.max(...array);
    let mean = array.reduce((total, num) => total + num) / array.length;
    newObj.min = min;
    newObj.max = max;
    newObj.mean = mean;
    return newObj;
}

// testVals: {
//     inputs: [
//         [[2, 4, 6, 3, 4, 3, 2, 4, 3, 5]],
//         [[4, 6, 3, 6, 1, 8, 4, 3, 3, 4, 5, 6, 6, 7]],
//     ],
//         outputs: [
//             3, 6
//         ]
// }

function findMode(array) {
    const frequencyObj = {};
    for (var i = 0; i < array.length; i++) {
        let num = array[i]
        if (!frequencyObj.hasOwnProperty(num)) {
            frequencyObj[num] = 1;
        } else { frequencyObj[num] += 1 }
    }
    console.log("frequencyObj: ", frequencyObj);
    let maxFrequency = 0;
    let modesObj = {};
    for (const prop in frequencyObj) {
        const value = frequencyObj[prop];
        if (value > maxFrequency) {
            maxFrequency = value;
        }
    }
    console.log("Max Freq: ", maxFrequency);
    for (const key in frequencyObj) {
        if (frequencyObj[key] === maxFrequency) {
            modesObj[key] = key;
        }
    }
    console.log("Modes Object: ", modesObj);
    let answer = null;
    for (var j = array.length - 1; j > -1; j--) {
        for (const idk in modesObj)
            if (array[j] === parseInt(idk)) {
                console.log("Answer: ", array[j])
                return answer = array[j];
            }
    }
    return answer;
}
