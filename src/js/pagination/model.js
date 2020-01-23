export default {
    recordsPerPage: 5,
    daysOfWeek: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    paginationHead: document.getElementById("paginationHeader"),
    pages : document.getElementsByClassName("page"),
    showMenuBtn : document.getElementById("menuByDays"),
    paginationBlock : document.getElementById("pagination"),
    storage : null,
}