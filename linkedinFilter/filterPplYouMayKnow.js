var mutual = 4;
var occKeywords = "consilio, birkbeck";
var posSearch = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function addAll(p, mutual) {
    section = document.getElementsByClassName("relative pb2");
    pplUMayKnowElems = section[0].getElementsByClassName("ember-view display-flex ");
    noOfPplUMayKnow = pplUMayKnowElems.length;
    occk = occKeywords.trim().split(",");
    for (var i = noOfPplUMayKnow; i > 0; i--) {
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
        addAll(0, mutual)
    });
}
addAll(0, mutual);