async function selection(){
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        let min_index = i;

        ele[i].style.background = '#2F00FF';
        for(let j = i+1; j < ele.length; j++){

            ele[j].style.background = '#FE0000';

            await waitFor(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index !== i){
                    ele[min_index].style.background = '#00F8F8';
                }
                min_index = j;
            }
            else{
                ele[j].style.background = '#00F8F8';
            }
        }
        await waitFor(delay);
        swap(ele[min_index], ele[i]);
        ele[min_index].style.background = '#00F8F8';
        ele[i].style.background = '#0BF446';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    var element = document.querySelector(".selectionSort");
    element.classList.remove("btn-dark");
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    element.classList.add("btn-dark");
});
