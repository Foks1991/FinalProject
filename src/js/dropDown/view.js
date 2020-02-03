import dropdownModel from "./model";

export default {
    menuWorker : (currentMenu, anotherMenu, anotherMenuArrow, currentMenuArrow) => {
        currentMenu.classList.toggle('isActiveMenu');
        currentMenuArrow.style.transform += 'rotate(180deg)';
        if(anotherMenu.classList.contains('isActiveMenu')){
            anotherMenu.classList.toggle('isActiveMenu');
            anotherMenuArrow.style.transform += 'rotate(180deg)';
        }
    },
    closeDDMenu : () =>{
        if(dropdownModel.dishesList.classList.contains("isActiveMenu")){
            dropdownModel.dishesList.classList.toggle("isActive");
            dropdownModel.dishesArrow.style.transform += 'rotate(180deg)';
        }
        if(dropdownModel.kitchensList.classList.contains("isActiveMenu")){
            dropdownModel.kitchensList.classList.toggle("isActiveMenu");
            dropdownModel.kitchenArrow.style.transform += 'rotate(180deg)';
        }
    }

};



