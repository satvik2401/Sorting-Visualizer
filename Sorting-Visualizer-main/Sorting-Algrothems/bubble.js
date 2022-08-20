async function bubble() {
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        for(let j = 0; j < ele.length-i-1; j++){
            ele[j].style.background = '#2F00FF';
            ele[j+1].style.background = '#2F00FF';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await waitFor(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = '#00F8F8';
            ele[j+1].style.background = '#00F8F8';
        }
        ele[ele.length-1-i].style.background = '#0BF446';
    }
    ele[0].style.background = '#0BF446';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    var element = document.querySelector(".bubbleSort");
    element.classList.remove("btn-dark");
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    element.classList.add("btn-dark")
});
