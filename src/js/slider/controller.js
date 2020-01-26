import model from "./model";
import view from "./view";

export const viewSlider = () =>{

    const toggleSlides = (dotsArray, slideArray) => {
        for (let i = 0; i < dotsArray.length; i++)  {
            dotsArray[i].addEventListener('click', () => {
                dotsArray[view.currentSlideIndex(slideArray)].classList.toggle('isActiveDot');
                view.setCurrentDotStyle(i, dotsArray);
                slideArray[view.currentSlideIndex(slideArray)].classList.toggle('isActiveImg');
                slideArray[i].classList.toggle('isActiveImg')
            })
        }
    };

    view.createDots(model.slideArray.length, model.blockForDots);
    view.setCurrentDotStyle(view.currentSlideIndex(model.slideArray), model.dotsArray);

    toggleSlides(model.dotsArray, model.slideArray);

    model.leftSliderSide.addEventListener("click", () => {
        view.leftSlide(view.currentSlideIndex(model.slideArray), model.slideArray, model.dotsArray);
    });
    model.rightSliderSide.addEventListener("click", () => {
        view.rightSlide(view.currentSlideIndex(model.slideArray), model.slideArray, model.dotsArray);
    });

};
