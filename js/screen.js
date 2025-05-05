const screen = {
    profileArea: document.getElementById("profileUserArea"),
    titleArea: document.querySelectorAll(".title"),
    repoArea: document.getElementById("profileUserRepo"),
    eventsArea: document.getElementById("profileUserEvents"),
    renderProfile(user) {
        this.profileArea.innerHTML = `
            <img id="profilePhoto" src="${user.avatar}">
            <div id="profileText">
                <h2 id="profileName">${user.name ? user.name : ""}</h2>
                <p id="profileBio">${user.bio ? user.bio : ""}</p>
                <p id="follows">🚶🏻‍♂️Seguidores: ${user.followers} | 👥Seguindo: ${user.following}</p>
            </div>
            
        `
        this.titleArea.forEach(element => {
            element.style.display = "inline";
        });
        this.eventsArea.style.display = "block";
    },
    renderRepo(user) {
        this.repoArea.innerHTML = "";
        user.repositories.slice(0, 10).forEach(repo => {
            this.repoArea.innerHTML += `
                <a class="profileRepos" href="${repo.html_url}" target="_blank">
                    ${repo.name}
                    <div class="repoInfos">
                        <p class="info">🍴${repo.forks}</p> <p class="info">⭐${repo.stargazers_count}</p> <p class="info">👀${repo.watchers}</p> <p class="info">👨🏻‍💻${repo.language ? repo.language : "Não especificada"}</p>
                    </div>
                </a>
            `
        });
    },
    renderEvents(user) {
        this.eventsArea.innerHTML = "";
        if (user.events.length === 0) {
            this.eventsArea.innerHTML = "Nenhum evento recente"
            return
        }
        user.events.slice(0, 10).forEach(event => {
            if (event.type === "PushEvent") {
                this.eventsArea.innerHTML += `
                    <p class="profileEventName"><strong>${event.repo.name}</strong> - ${event.payload.commits[0].message}</p>
                `
                return
            }
            this.eventsArea.innerHTML += `
                <p class="profileEventName"><strong>${event.repo.name}</strong> - Sem mensagem</p>
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