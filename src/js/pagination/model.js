export default {
    pages : document.getElementsByClassName("page"),
    storage : null,
    daysOfWeek: [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ],
    showMenuBtn : document.getElementById("menuByDays"),
    paginationHead: document.getElementById("paginationHeader"),
    recordsPerPage: 4,
    paginationBlock : document.getElementById("pagination"),
    currentPageIndex : undefined,
}