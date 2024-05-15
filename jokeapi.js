class jokeapi {
    constructor(){
        this.api = "https://official-joke-api.appspot.com"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest"}
    }
    
    async req(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers: this.headers,
            }).then(res => res.json()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async random_joke(){
        return (await this.req(`${this.api}/random_joke`));
    }
    async random_jokes(){
        return (await this.req(`${this.api}/jokes/random`));
    }
    async random_ten(){
        return (await this.req(`${this.api}/random_ten`));
    }
    async jokes_ten(){
        return (await this.req(`${this.api}/jokes/ten`));
    }
}
module.exports = {jokeapi};
