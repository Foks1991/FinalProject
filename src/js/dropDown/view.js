import dropdownModel from "./model";

export default {
    menuWorker : (currentMenu, anotherMenu, anotherMenuArrow, currentMenuArrow) => {
        currentMenu.classList.toggle('isActive');
        currentMenuArrow.style.transform += 'rotate(180deg)';
        if(anotherMenu.classList.contains('isActive')){
            anotherMenu.classList.toggle('isActive');
            anotherMenuArrow.style.transform += 'rotate(180deg)';
        }
    },
    closeDDMenu : () =>{
        if(dropdownModel.dishesList.classList.contains("isActive")){
            dropdownModel.dishesList.classList.toggle("isActive");
            dropdownModel.dishesArrow.style.transform += 'rotate(180deg)';
        }
        if(dropdownModel.kitchensList.classList.contains("isActive")){
            dropdownModel.kitchensList.classList.toggle("isActive");
            dropdownModel.kitchenArrow.style.transform += 'rotate(180deg)';
        }
    }

};



