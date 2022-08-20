//let delay = 30;
async function merge(ele, low, mid, high){
    console.log('In merge()');
    console.log(`low=${low}, mid=${mid}, high=${high}`);
    const n1 = mid - low + 1;
    const n2 = high - mid;
    console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await waitFor(delay);
        console.log('In merge left loop');
        console.log(ele[low + i].style.height + ' at ' + (low+i));
        // color
        ele[low + i].style.background = '#FF8A00';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await waitFor(delay);
        console.log('In merge right loop');
        console.log(ele[mid + 1 + i].style.height + ' at ' + (mid+1+i));
        // color
        ele[mid + 1 + i].style.background = '#FEEA00';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await waitFor(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitFor(delay);
        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));


        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log('In merge while loop if');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = '#0BF446';
            }
            else{
                ele[k].style.background = '#CBE54E';
            }

            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            console.log('In merge while loop else');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = '#0BF446';
            }
            else{
                ele[k].style.background = '#CBE54E';
            }
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitFor(delay);
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = '#0BF446';
        }
        else{
            ele[k].style.background = '#CBE54E';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await waitFor(delay);
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = '#0BF446';
        }
        else{
            ele[k].style.background = '#CBE54E';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){
    if(l >= r){
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    var element = document.querySelector(".mergeSort");
    element.classList.remove("btn-dark");
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    element.classList.remove("btn-dark");
});
