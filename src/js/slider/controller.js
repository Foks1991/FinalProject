import model from "./model";
import view from "./view";

export const viewSlider = () =>{

    view.createDots(model.slideArray.length, model.blockForDots);

    view.setCurrentDotStyle(view.currentSlideIndex(model.slideArray), model.dotsArray);

    model.leftSliderSide.addEventListener("click", function () {
        view.leftSlide(view.currentSlideIndex(model.slideArray), model.slideArray, model.dotsArray);
    });
    model.rightSliderSide.addEventListener("click", function () {
        view.rightSlide(view.currentSlideIndex(model.slideArray), model.slideArray, model.dotsArray);
    });

    const toggleSlides = (dotsArray, slideArray) => {
        for (let i = 0; i < dotsArray.length; i++)  {
            dotsArray[i].addEventListener('click', function () {
                dotsArray[view.currentSlideIndex(slideArray)].classList.toggle('isActiveDot');
                view.setCurrentDotStyle(i, dotsArray);
                slideArray[view.currentSlideIndex(slideArray)].classList.toggle('isActiveImg');
                slideArray[i].classList.toggle('isActiveImg')
            })
        }
    };
    toggleSlides(model.dotsArray, model.slideArray);
};
