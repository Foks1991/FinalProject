import model from "./model";
import controller from "./controller";

export const viewSlider = () =>{

    controller.createDots(model.slideArray.length, model.blockForDots);

    controller.setCurrentDotStyle(controller.currentSlideIndex(model.slideArray), model.dotsArray);

    model.leftSliderSide.addEventListener("click", function () {
        controller.leftSlide(controller.currentSlideIndex(model.slideArray), model.slideArray, model.dotsArray);
    });
    model.rightSliderSide.addEventListener("click", function () {
        controller.rightSlide(controller.currentSlideIndex(model.slideArray), model.slideArray, model.dotsArray);
    });

    const toggleSlides = (dotsArray, slideArray) => {
        for (let i = 0; i < dotsArray.length; i++)  {
            dotsArray[i].addEventListener('click', function () {
                dotsArray[controller.currentSlideIndex(slideArray)].classList.toggle('isActiveDot');
                controller.setCurrentDotStyle(i, dotsArray);
                slideArray[controller.currentSlideIndex(slideArray)].classList.toggle('isActiveImg');
                slideArray[i].classList.toggle('isActiveImg')
            })
        }
    };
    toggleSlides(model.dotsArray, model.slideArray);
};