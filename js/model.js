const kitchen = document.getElementById('kitchen');
const dish = document.getElementById('dish');
const menuKitchens = document.getElementById('menuKitchens');
const menuDishes = document.getElementById('menuDishes');
const kitchenArrow = document.getElementById('kitchenArrow');
const dishesArrow = document.getElementById('dishesArrow');

kitchen.addEventListener("click", function (e) {
    e.stopPropagation();
    menuWorker(menuKitchens, menuDishes, dishesArrow, kitchenArrow)
});

dish.addEventListener("click", function (e) {
    e.stopPropagation();
    menuWorker(menuDishes, menuKitchens, kitchenArrow, dishesArrow)
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

