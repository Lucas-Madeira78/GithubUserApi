import { baseUrl } from "./variables.js";

async function getUser(userInput) {
    const response = await fetch(baseUrl + userInput);
    return response.json();
}

async function userRepos(userInput) {
    const response = await fetch(`${baseUrl + userInput}/repos`);
    return response.json();
}

export { getUser, userRepos }