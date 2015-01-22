var year = new Date().getFullYear();

TERM = {
    LENT : {
                abbrev: 'L',
                start: new Date(year, 1 - 1, 10),
                end: new Date(year, 4 - 1, 1)
           },
    EASTER: {
                 abbrev: 'E',
                 start: new Date(year, 4 - 1, 1),
                 end: new Date(year, 6 - 1, 10)
            }
}

function getTermId() {
    var today = new Date();
    if (today >= TERM.LENT.start && today < TERM.LENT.end) {
        return TERM.LENT.abbrev;
    } else if (today >= TERM.EASTER.start && today < TERM.EASTER.end) {
        return TERM.EASTER.abbrev;
    } else {
        return null;
    }
}

function insertTermAtHead(term) {
    var termName = document.getElementById(term);
    if (termName) {
        var page = document.getElementById("content-primary");
    
        var currentTerm = document.createElement("h2");
        currentTerm.innerHTML = "Current term";

        var termBody = termName.nextElementSibling.cloneNode(true);

        var firstTerm = document.getElementById("M");
        page.insertBefore(currentTerm, firstTerm);
        page.insertBefore(termBody, firstTerm);
    }
}

function insertTerm() {
    var termId = getTermId();
    if (termId) {
        insertTermAtHead(termId);
    }
}

insertTerm();
