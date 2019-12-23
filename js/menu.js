const kitchenMenu = document.getElementById('kitchen');
const kitchensList = document.getElementById('menuKitchens');
const kitchenArrow = document.getElementById('kitchenArrow');
const dishesMenu = document.getElementById('dish');
const dishesList = document.getElementById('menuDishes');
const dishesArrow = document.getElementById('dishesArrow');

kitchenMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    menuWorker(kitchensList, dishesList, dishesArrow, kitchenArrow)
});

dishesMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    menuWorker(dishesList, kitchensList, kitchenArrow, dishesArrow)
});

//Show current menu and hide another if shown
function menuWorker(currentMenu, anotherMenu, anotherMenuArrow, currentMenuArrow) {
    currentMenu.classList.toggle('isActive');
    if(anotherMenu.classList.contains('isActive')){
        anotherMenu.classList.toggle('isActive');
        anotherMenuArrow.style.transform += 'rotate(180deg)';
    }
    currentMenuArrow.style.transform += 'rotate(180deg)';
}

