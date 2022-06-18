import { showGamesCards } from './homeview.js';

const baseURL = "https://api.rawg.io/api";
const apiKey = "?key=50ebb25525464c5a947050e0174c0c7b";

document.addEventListener('DOMContentLoaded', () => {
    getGames();
})

const getGames = async () => {
    const gamesPath = "/games";
    try {
        const response = await fetch(baseURL + gamesPath + apiKey, {
            method: "get",
            headers: { 'Content-Type': 'application/json' },
        })
        const gamesData = await response.json();
        showGamesCards(gamesData.results);
    } catch (error) {
        console.log(error);
    }
}