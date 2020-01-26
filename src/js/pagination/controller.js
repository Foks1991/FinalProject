import model from './model'
import view from './view'

export const viewPagination = () => {

    const getTodayDayIndex = () => {
        const date = new Date();
        return date.getDay();
    };

    const getDayToday = () => {
        if(!getTodayDayIndex()){
            return model.daysOfWeek[6]
        }else {
            return model.daysOfWeek[getTodayDayIndex() - 1];
        }
    };

    const getRecordsByDay = (arr, currentDay) => {
        return arr.filter( (e) => {
            return e.day === `${currentDay}`;
        });
    };

    const showRecords = (pages) =>{
        for (let i = 0; i < pages.length; i++) {
            pages[i].addEventListener("click", (e) => {
                view.clearContainer();

                const elem = e.target;
                const day = model.daysOfWeek[elem.textContent - 1];
                view.drawRecords(getRecordsByDay(model.storage, day));

                elem.classList.toggle('isActivePage');
                pages[model.currentPageIndex].classList.toggle('isActivePage');
                model.currentPageIndex = i;
                view.drawPaginationHeader(model.paginationHead, model.daysOfWeek[i]);
            })
        }
    };

    const getMenuFromServer = () => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/menu", true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                model.storage = JSON.parse(xhr.response);
                view.drawPages(model.storage, getTodayDayIndex(), model.recordsPerPage);
                view.drawPaginationHeader(model.paginationHead, getDayToday());
                view.drawRecords(getRecordsByDay(model.storage, getDayToday()));
                showRecords(model.pages);
            }
        };
    };

    model.showMenuBtn.addEventListener("click", function () {
        view.clearPages();
        view.clearContainer();
        getMenuFromServer();
        model.paginationBlock.style.display = "flex";
    });

};