import model from "./model";

export default {
    currentSlideIndex : (arrBlocks) => {
        for (let i = 0; i < arrBlocks.length; i++) {
            if(arrBlocks[i].classList.contains('isActiveImg')){
                return i;
            }
        }
    },

    leftSlide : (currentSlideIndex, sliderBlocks, dotsArray) => {
        sliderBlocks[currentSlideIndex].classList.toggle('isActiveImg');
        dotsArray[currentSlideIndex].classList.toggle('isActiveDot');
        if(currentSlideIndex === 0){
            sliderBlocks[sliderBlocks.length - 1].classList.toggle('isActiveImg');
            dotsArray[sliderBlocks.length - 1].classList.toggle('isActiveDot');
        }else{
            sliderBlocks[currentSlideIndex-1].classList.toggle('isActiveImg');
            dotsArray[currentSlideIndex-1].classList.toggle('isActiveDot');
        }
    },

    rightSlide : (currentSlideIndex, sliderBlocks, dotsArray) => {
        sliderBlocks[currentSlideIndex].classList.toggle('isActiveImg');
        dotsArray[currentSlideIndex].classList.toggle('isActiveDot');
        if(currentSlideIndex === sliderBlocks.length - 1){
            sliderBlocks[0].classList.toggle('isActiveImg');
            dotsArray[0].classList.toggle('isActiveDot');
        }else{
            sliderBlocks[currentSlideIndex+1].classList.toggle('isActiveImg');
            dotsArray[currentSlideIndex+1].classList.toggle('isActiveDot');
        }
    },

    createDots : (slidesQuantity, dotsBlock) => {
        for (let i = 0; i < slidesQuantity; i++) {
            const elem = document.createElement('span');
            elem.setAttribute('class','dot');
            dotsBlock.appendChild(elem);
        }
    },

    setCurrentDotStyle : (currentDotIndex, dotsArray) => {
        dotsArray[currentDotIndex].classList.add('isActiveDot');
    },

};
