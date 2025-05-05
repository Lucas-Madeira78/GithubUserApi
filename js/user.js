const user = {
    avatar: '',
    name: '',
    bio: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    message: '',
    setInfo(gitHubUser) {
        this.avatar = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.message = gitHubUser.message
    },
    setRepositories(gitHubRepos) {
        this.repositories = gitHubRepos
    },
    setEvents(gitHubEvents) {
        this.events = gitHubEvents
    }
}

export { user };