let kitchen = document.getElementById('kitchen');
let dish = document.getElementById('dish');
let menuKitchens = document.getElementById('menuKitchens');
let menuDishes = document.getElementById('menuDishes');
let kitchenArrow = document.getElementById('kitchenArrow');
let dishesArrow = document.getElementById('dishesArrow');

kitchen.addEventListener("click", function (e) {
    e.stopPropagation()
    menuKitchens.classList.toggle('isActive');
    if(menuDishes.classList.contains('isActive')){
        menuDishes.classList.toggle('isActive');
        dishesArrow.style.transform += 'rotate(180deg)'
    }
    kitchenArrow.style.transform += 'rotate(180deg)'
});

dish.addEventListener("click", function (e) {
    e.stopPropagation()
    menuDishes.classList.toggle('isActive');
    if(menuKitchens.classList.contains('isActive')){
        menuKitchens.classList.toggle('isActive');
        kitchenArrow.style.transform += 'rotate(180deg)'
    }
    dishesArrow.style.transform += 'rotate(180deg)'
});

/*document.addEventListener("click", function () {

})*/






