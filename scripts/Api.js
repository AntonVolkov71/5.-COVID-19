class Api {
    constructor(baseUrl, token) {
        this.url = baseUrl;
        this.token = token;
    }
    _handleResult(res) {
        if (res.ok) return res.json();
        return Promise.reject(`ответ от сервера: ${res.status}`)
    }

    _handleError(err) {
        throw new Error(err)
    }
    
    getDates() {
        return fetch(this.url)
            .then(this._handleResult)
            .catch(this._handleError)
    }
}