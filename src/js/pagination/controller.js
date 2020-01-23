import model from './model'
import view from './view'

export const viewPagination = () => {

    const getTodayDayIndex = () => {
        const date = new Date();
        return date.getDay();
    };

    const getDayToday = () => {
        return model.daysOfWeek[getTodayDayIndex() - 1];
    };

    const getRecordsByDay = (arr, currentDay) => {
        return arr.filter(function (e) {
            return e.day === `${currentDay}`;
        });
    };

    const showRecords = (pages) =>{
        for (let i = 0; i < pages.length; i++) {
            pages[i].addEventListener("click", function (e) {
                view.clearContainer();
                const elem = e.target;
                const clickedDay = model.daysOfWeek[elem.textContent - 1];
                view.drawRecords(getRecordsByDay(model.storage, clickedDay));
                /*if(elem.classList.contains('isActivePage')){
                    break
                }else{
                    elem.classList.toggle('isActivePage');
                }*/
            })
        }
    };

    const getMenuFromServer = () => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/menu", true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let menu = JSON.parse(xhr.response);
                model.storage = menu;
                view.drawPages(menu, getTodayDayIndex(), model.recordsPerPage);
                view.drawPaginationHeader(model.paginationHead, getDayToday());
                view.drawRecords(getRecordsByDay(menu, getDayToday()));
                showRecords(model.pages, );
            }
        };

        if (xhr.status === 404) {
            console.log('File or resource not found');
        }
    };

    model.showMenuBtn.addEventListener("click", function () {
        view.clearContainer();
        model.paginationBlock.style.display = "flex";
        getMenuFromServer();
        view.clearPages();
    });

};