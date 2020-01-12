export default {
    menuWorker : (currentMenu, anotherMenu, anotherMenuArrow, currentMenuArrow) => {
        currentMenu.classList.toggle('isActive');
        if(anotherMenu.classList.contains('isActive')){
            anotherMenu.classList.toggle('isActive');
            anotherMenuArrow.style.transform += 'rotate(180deg)';
        }
        currentMenuArrow.style.transform += 'rotate(180deg)';
    },
};


