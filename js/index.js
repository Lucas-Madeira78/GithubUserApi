import { getUser, GetUserRepos, GetUserEvents } from "./api.js";
import { user } from "./user.js";
import { screen } from "./screen.js";

async function searchUser(userInput) {
    user.setInfo(await getUser(userInput))
    if (user.message) {
        screen.renderNotFound();
        return
    }
    screen.renderProfile(user);

    user.setRepositories(await GetUserRepos(userInput));
    screen.renderRepo(user);
    
    user.setEvents(await GetUserEvents(userInput))
    console.log(user.events);
    screen.renderEvents(user)
}

document.getElementById("button").addEventListener('click', () => {
    let userInput = document.getElementById("inputSearch").value;
    if (EmptyInput(userInput)) return;
    searchUser(userInput);
})

document.getElementById("inputSearch").addEventListener('keyup', (e) => {
    let userInput = document.getElementById("inputSearch").value;
    if (e.key === "Enter") {
        if (EmptyInput(userInput)) return;
        searchUser(userInput);
    }
})

function EmptyInput(userInput) {
    if (userInput.length === 0) {
        alert("Por favor, insira o nome de usuário do GitHub para continuar")
        return true
    }
}