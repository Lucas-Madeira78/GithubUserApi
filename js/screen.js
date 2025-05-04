const screen = {
    profileArea: document.getElementById("profileUserArea"),
    repoTitleArea: document.getElementById("reposTitle"),
    repoArea: document.getElementById("profileUserRepo"),
    renderProfile(user) {
        this.profileArea.innerHTML = `
            <img id="profilePhoto" src="${user.avatar}">
            <div id="profileText">
                <h2 id="profileName">${user.name}</h2>
                <p id="profileBio">${user.bio ? user.bio : ""}</p>
            </div>
        `
        this.repoTitleArea.style.display = "inline";
    },
    renderRepo(user) {
        this.repoArea.innerHTML = "";
        user.repositories.slice(0, 10).forEach(repo => {
            this.repoArea.innerHTML += `
                <a class="profileRepos" href="${repo.html_url}" target="_blank">${repo.name}</a>
            `
        });
    },
    renderNotFound() {
        this.profileArea.innerHTML = `
            <h3>Usuário não encontrado</h3>
        `
        this.repoTitleArea.style.display = "none";
        this.repoArea.innerHTML = "";
    }
}

export { screen };