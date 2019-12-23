const slideLeft = document.getElementById("leftArrow");
const slideRight = document.getElementById("rightArrow");
const sliderBlocksArray = document.getElementsByClassName('item');

const dotsBlock = document.getElementById('dotsBlock');
const dotsArray = document.getElementsByClassName('dot');

createDots(sliderBlocksArray.length, dotsBlock);
setCurrentDot(currentSlideIndex(sliderBlocksArray), dotsArray);

slideLeft.addEventListener("click", function (e) {
    leftSlide(currentSlideIndex(sliderBlocksArray), sliderBlocksArray, dotsArray);
});
slideRight.addEventListener("click", function (e) {
    rightSlide(currentSlideIndex(sliderBlocksArray), sliderBlocksArray, dotsArray);
});

function currentSlideIndex (arrBlocks) {
    for (let i = 0; i < arrBlocks.length; i++) {
        if(arrBlocks[i].classList.contains('isActiveImg')){
            return i;
        }
    }
}

function leftSlide(currentSlideIndex, sliderBlocks, dotsArray) {
    sliderBlocks[currentSlideIndex].classList.toggle('isActiveImg');
    dotsArray[currentSlideIndex].classList.toggle('isActiveDot');
    if(currentSlideIndex === 0){
        sliderBlocks[sliderBlocks.length - 1].classList.toggle('isActiveImg');
        dotsArray[sliderBlocks.length - 1].classList.toggle('isActiveDot');
    }else{
        sliderBlocks[currentSlideIndex-1].classList.toggle('isActiveImg');
        dotsArray[currentSlideIndex-1].classList.toggle('isActiveDot');
    }
}

function rightSlide(currentSlideIndex, sliderBlocks, dotsArray) {
    sliderBlocks[currentSlideIndex].classList.toggle('isActiveImg');
    dotsArray[currentSlideIndex].classList.toggle('isActiveDot');
    if(currentSlideIndex === sliderBlocks.length - 1){
        sliderBlocks[0].classList.toggle('isActiveImg');
        dotsArray[0].classList.toggle('isActiveDot');
    }else{
        sliderBlocks[currentSlideIndex+1].classList.toggle('isActiveImg');
        dotsArray[currentSlideIndex+1].classList.toggle('isActiveDot');
    }
}

function createDots(slidesQuantity, dotsBlock) {
    for (let i = 0; i < slidesQuantity; i++) {
        const elem = document.createElement('span');
        elem.setAttribute('class','dot');
        dotsBlock.appendChild(elem);
    }
}

function setCurrentDot(currentDotIndex, dotsArray) {
    dotsArray[currentDotIndex].classList.add('isActiveDot');
}




