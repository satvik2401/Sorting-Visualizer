
async function partitionLomuto(ele, l, r){
    let i = l - 1;
    // color pivot element
    ele[r].style.background = '#FE0000';
    for(let j = l; j <= r - 1; j++){
        // color current element
        ele[j].style.background = '#FEEA00';
        // pauseChamp
        await waitFor(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i], ele[j]);
            // color
            ele[i].style.background = '#FF8A00';
            if(i != j) ele[j].style.background = '#FF8A00';
            // pauseChamp
            await waitFor(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = '#FF99FF';
        }
    }
    i++;
    // pauseChamp
    await waitFor(delay);
    swap(ele[i], ele[r]); // pivot height one
    // color
    ele[r].style.background = '#FF99FF';
    ele[i].style.background = '#0BF446';

    // pauseChamp
    await waitFor(delay);

    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != '#0BF446')
            ele[k].style.background = '#00F8F8';
    }

    return i;
}

async function quickSort(ele, l, r){
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = '#0BF446';
            ele[l].style.background = '#0BF446';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    var element = document.querySelector(".quickSort");
    element.classList.remove("btn-dark");
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    element.classList.add("btn-dark")
});
