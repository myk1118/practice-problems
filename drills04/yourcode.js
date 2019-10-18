function changeElements(input) {
    // console.log("Input: ", input);
    let divs = document.querySelectorAll(input);
    // console.log("Classes: ", divs);
    for (var i = 0; i < divs.length; i++) {
        // console.log("Classes: ", divs[i]);
        let text = divs[i].textContent;
        // console.log("Text: ", text);
        switch (text) {
            case 'one':
                divs[i].textContent = "1";
                break;
            case 'two':
                divs[i].textContent = "2";
                break;
            case 'three':
                divs[i].textContent = "3";
                break;
            case 'four':
                divs[i].textContent = "4";
                break;
            case 'five':
                divs[i].textContent = "5";
                break;
            case 'six':
                divs[i].textContent = "6";
                break;
            case 'seven':
                divs[i].textContent = "7";
                break;
            case 'eight':
                divs[i].textContent = "8";
                break;
            case 'nine':
                divs[i].textContent = "9";
                break;
            default:
                break;
        }
    }
}

function appendTextToElement(element, word) {
    let newElement = element + word
    // console.log("New Element: ", newElement);
    let divs = document.querySelectorAll(element);
    for (var i = 0; i < divs.length; i++) {
        divs[i].className = newElement;
        // console.log("Divs: ", divs[i]);
    }
}

function addClass(name, addName) {
    let divs = document.querySelectorAll(name);
    let count = 0;
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add(addName);
        // console.log("Class Name: ", divs[i]);
        count++;
    }
    return count;
}

function removeElements(name) {
    let divs = document.querySelectorAll(name);
    for (var i = 0; i < divs.length; i++) {
        divs[i].remove();
    }
}