async function insertion(){
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = '#0BF446';
    for(let i = 1; i < ele.length; i++){
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = '#2F00FF';

        await waitFor(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            // color
            ele[j].style.background = '#2F00FF';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitFor(delay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = '#0BF446';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = '#0BF446';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    var element = document.querySelector(".insertionSort");
    element.classList.remove("btn-dark");
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    element.classList.add("btn-dark");

});
