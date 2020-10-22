 //http://challenges.hackajob.co/swapi/api/films/
titlesOrActors = {
    res: null,

    findTitle: function (results, comparedValue, arrName, propName, funcName) {
        item = results.filter(item => item[propName] === comparedValue)[0]

        if (item != undefined) {
            let func = getFilmOrActor[funcName]
            let allResConcatenated = ""
            for (let i = 0; i < item[arrName].length; i++)
            {

                allResConcatenated += func(item[arrName][i])
                if (i != item[arrName].length - 1)
                    allResConcatenated += ", "
            }


            this.res = allResConcatenated
            return true
        } else
            this.res = 'None'
        return false

    }
};

function getFilmsAndActors(title, actor) {

    let films = receiveData('http://challenges.hackajob.co/swapi/api/films/?format=json')

    titlesOrActors.findTitle(films["results"], title, 'characters', 'title', 'getCharacter')
    let people = title + ": " + titlesOrActors.res + "; "


    let page = 1
    bool = false

    do {
        var actors = receiveData('http://challenges.hackajob.co/swapi/api/people/?page=' + page + '&?format=json')

        var bool = titlesOrActors.findTitle(actors["results"], actor, 'films', 'name', 'getFilms')

        page++
    } while (bool === false && actors.next != null)

    return people + actor + ": " + titlesOrActors.res


}

getFilmOrActor = {
    getCharacter: function (item, index) {
        return receiveData(item).name
    },
    getFilms: function (item, index) {
        return receiveData(item).title

    }
};

function receiveData(url) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
     let request = new XMLHttpRequest();
    request.open('GET', url.toString(), false);
    request.send(null);


    if (request.status === 200) {

        return JSON.parse(request.responseText);
    }
}

console.log(getFilmsAndActors("A New Hope", "Raymus Antilles"))
console.log(getFilmsAndActors("Return of the Jedi", "Nuchem Katz"))
