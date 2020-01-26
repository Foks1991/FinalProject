export default {
    currentSlideIndex : (arrBlocks) => {
        for (let i = 0; i < arrBlocks.length; i++) {
            if(arrBlocks[i].classList.contains('isActiveImg')){
                return i;
            }
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

    leftSlide : (slideIndex, slide, dotsArray) => {
        slide[slideIndex].classList.toggle('isActiveImg');
        dotsArray[slideIndex].classList.toggle('isActiveDot');
        if(!slideIndex){
            slide[slide.length - 1].classList.toggle('isActiveImg');
            dotsArray[slide.length - 1].classList.toggle('isActiveDot');
        }else{
            slide[slideIndex-1].classList.toggle('isActiveImg');
            dotsArray[slideIndex-1].classList.toggle('isActiveDot');
        }
    },

    rightSlide : (slideIndex, slide, dotsArray) => {
        slide[slideIndex].classList.toggle('isActiveImg');
        dotsArray[slideIndex].classList.toggle('isActiveDot');
        if(slideIndex === slide.length - 1){
            slide[0].classList.toggle('isActiveImg');
            dotsArray[0].classList.toggle('isActiveDot');
        }else{
            slide[slideIndex+1].classList.toggle('isActiveImg');
            dotsArray[slideIndex+1].classList.toggle('isActiveDot');
        }
    },

};