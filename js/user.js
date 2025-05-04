const user = {
    avatar: '',
    name: '',
    bio: '',
    repositories: [],
    message: '',
    setInfo(gitHubUser) {
        this.avatar = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.message = gitHubUser.message
    },
    setRepositories(gitHubRepos) {
        this.repositories = gitHubRepos
    }
}

export { user };