export const showGamesCards = (games) => {

    console.log(games);

    const flex = document.querySelector('.flex')
    const template = document.querySelector('#game-cards').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    for (let index = 0; index < 9; index++) {
        let cardIdentifier = "#card" + (index + 1)
        let cardName = cardIdentifier + "-name"
        let cardReleaseDate = cardIdentifier + "-realease-date"
        let cardGenreDetailed = cardIdentifier + "-genre-detailed"
        let cardRanking = cardIdentifier + "-place"
        let cardImg = "#img-" + (index + 1)


        clone.querySelector(cardName).textContent = games[index].name;
        clone.querySelector(cardReleaseDate).textContent = games[index].released;
        clone.querySelector(cardGenreDetailed).textContent = games[index].genres[0].name + ', ' + games[index].genres[1].name;

        clone.querySelector(cardRanking).textContent = "#" + (index + 1);
        clone.querySelector(cardImg).setAttribute('src', games[index].background_image);



    }


    fragment.appendChild(clone)
    flex.appendChild(fragment)

}