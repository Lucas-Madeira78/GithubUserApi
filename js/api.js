import { baseUrl } from "./variables.js";

async function getUser(userInput) {
    const response = await fetch(baseUrl + userInput);
    return response.json();
}

async function GetUserRepos(userInput) {
    const response = await fetch(`${baseUrl + userInput}/repos`);
    return response.json();
}

async function GetUserEvents(userInput) {
    const response = await fetch(`${baseUrl + userInput}/events`);
    return response.json();
}

export { getUser, GetUserRepos, GetUserEvents }