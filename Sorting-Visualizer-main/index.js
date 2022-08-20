function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

function disableSizeSlider(){
    document.querySelector("#arraySize_input").disabled = true;
}

function enableSizeSlider(){
    document.querySelector("#arraySize_input").disabled = false;
}

function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

function waitFor(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

let arraySize = document.querySelector('#arraySize_input');

arraySize.addEventListener('input', function(){
    createNewArray(parseInt(arraySize.value));
});

let delay = 240;

let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

let array = [];

createNewArray();

function createNewArray(noOfBars = 100) {
    deleteChild();
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 240) + 10);
    }
    const bars = document.querySelector("#bars");

    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`id${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
