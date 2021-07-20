var mutual = 4;
var occKeywords = "consilio, birkbeck";
var posSearch = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function filterPpl(p, mutual) {
    section = document.getElementsByClassName("relative pb2");
    pplUMayKnowElems = section[0].getElementsByClassName("ember-view display-flex ");
    noOfPplUMayKnow = pplUMayKnowElems.length;
    occk = occKeywords.trim().split(",");
    for (var i = noOfPplUMayKnow; i >= 0; i--) {
        var removed = false;
        if (pplUMayKnowElems[i] != undefined) {
            occupation = pplUMayKnowElems[i].getElementsByClassName("discover-person-card__occupation")[0].innerText;
            con = pplUMayKnowElems[i].getElementsByClassName("member-insights__reason")[0].innerText.trim().split(" ")[0];
            name = pplUMayKnowElems[i].getElementsByClassName("discover-person-card__name")[0].innerText;
            if (new RegExp(occk.join("|"), 'i').test(occupation) == !posSearch || (posSearch && !/[a-zA-Z]/g.test(occupation))) {
                pplUMayKnowElems[i].parentNode.removeChild(pplUMayKnowElems[i]);
                removed = true;
            }
            if (!removed && Number(con) != NaN && con < mutual) {
                pplUMayKnowElems[i].parentNode.removeChild(pplUMayKnowElems[i]);
            }
        }
    }
    sleep(5000).then(() => {
        filterPpl(0, mutual)
    });
}
filterPpl(0, mutual);

//With loading more freinds automatically as one scrolls down the page
var mutual = 4;
var occKeywords = "consilio, birkbeck";
var posSearch = false;

function scrollDown() {
    window.scrollTo(0, 1);
    window.scrollTo(0, document.body.scrollHeight);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function filterPpl(p) {
    section = document.getElementsByClassName("relative pb2");
    pplUMayKnowElems = section[0].getElementsByClassName("ember-view display-flex ");
    noOfPplUMayKnow = pplUMayKnowElems.length;
    occk = occKeywords.trim().split(",");
    for (var i = noOfPplUMayKnow-1; i >= p; i--) {
        var removed = false;
        if (pplUMayKnowElems[i] != undefined) {
            occupation = pplUMayKnowElems[i].getElementsByClassName("discover-person-card__occupation")[0].innerText;
            con = pplUMayKnowElems[i].getElementsByClassName("member-insights__reason")[0].innerText.trim().split(" ")[0];
            name = pplUMayKnowElems[i].getElementsByClassName("discover-person-card__name")[0].innerText;
            if (new RegExp(occk.join("|"), 'i').test(occupation) == !posSearch || (posSearch && !/[a-zA-Z]/g.test(occupation))) {
                pplUMayKnowElems[i].parentNode.removeChild(pplUMayKnowElems[i]);
                removed = true;
            }
            if (!removed && Number(con) != NaN && con < mutual) {
                pplUMayKnowElems[i].parentNode.removeChild(pplUMayKnowElems[i]);
            }
        }
    }
    sleep(5000).then(() => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            showMorePplBtn = section[0].getElementsByClassName("artdeco-button artdeco-button--muted artdeco-button--1 artdeco-button--full artdeco-button--secondary ember-view");
            showMorePplBtn[0].click();
            scrollDown();
            filterPpl(noOfPplUMayKnow)
        } else {
            filterPpl(0)
        }
    });
}
filterPpl(0);