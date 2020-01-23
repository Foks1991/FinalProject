export default {

    drawPaginationHeader(paginationHead, dayToday){
        paginationHead.textContent = dayToday;
    },

    drawPages(records, indexDayToday, recordsPerPage) {
        const linkWrap = document.getElementById("pages");
        const pageCount = Math.ceil(records.length / recordsPerPage);

        for (let i = 0; i < pageCount; i++) {
            const link = document.createElement('a');
            link.classList.add('page');
            link.textContent = `${i + 1}`;
            linkWrap.append(link);
            if (i === indexDayToday - 1) {
                link.classList.add('isActivePage');
            }
        }
    },

    drawRecords(recordsArr){
        const records = document.getElementById("records");
        for (let i = 0; i < recordsArr.length ; i++) {
            const record = document.createElement('div');
            record.classList.add('record');
            record.textContent = recordsArr[i].name;
            records.append(record)
        }
    },

    clearContainer(){
        const records = document.getElementById("records");
        records.remove();
        const newRecords = document.createElement("div");
        newRecords.classList.add('pagination__records');
        newRecords.setAttribute("id", 'records');
        const pagination = document.getElementById("pagination");
        pagination.append(newRecords);
    },

    clearPages(){
        const pages = document.getElementById("pages");
        pages.remove();
        const newPages = document.createElement("div");
        newPages.classList.add('pagination__pages');
        newPages.setAttribute("id", 'pages');
        const pagination = document.getElementById("pagination");
        pagination.append(newPages);
    },
}