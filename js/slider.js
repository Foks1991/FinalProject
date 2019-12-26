const leftSliderSide = document.getElementById("leftArrow");
const rightSliderSide = document.getElementById("rightArrow");
const slideArray = document.getElementsByClassName('item');
const blockForDots = document.getElementById('dotsBlock');
const dotsArray = document.getElementsByClassName('dot');

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

function setCurrentDotStyle(currentDotIndex, dotsArray) {
    dotsArray[currentDotIndex].classList.add('isActiveDot');
}

createDots(slideArray.length, blockForDots);
setCurrentDotStyle(currentSlideIndex(slideArray), dotsArray);

leftSliderSide.addEventListener("click", function () {
    leftSlide(currentSlideIndex(slideArray), slideArray, dotsArray);
});
rightSliderSide.addEventListener("click", function () {
    rightSlide(currentSlideIndex(slideArray), slideArray, dotsArray);
});

for (let i = 0; i < dotsArray.length; i++) {
    dotsArray[i].addEventListener('click', function () {
        dotsArray[currentSlideIndex(slideArray)].classList.toggle('isActiveDot');
        setCurrentDotStyle(i,dotsArray);
        slideArray[currentSlideIndex(slideArray)].classList.toggle('isActiveImg');
        slideArray[i].classList.toggle('isActiveImg')
    })
}
