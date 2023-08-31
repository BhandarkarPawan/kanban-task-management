const jsonMimeType = "application/json";

const getheaders = () => {
    const headers = new Headers();
    headers.append("Content-Type", jsonMimeType);
    headers.append("Accept", jsonMimeType);
    // headers.append('X-AUTH-TOKEN', `Bearer ${Cookies.get('token')}`);
    return headers;
};

const handleErrors = (response, { onErrorCb }) => {
    if (!response.ok) {
        if (onErrorCb) {
            onErrorCb(response.status, response.statusText);
        } else {
            throw Error(response.status.toString());
        }
        return null;
    }
    return response;
};

export default class HTTPClient {
    constructor(host, protocol, errorCb) {
        console.log(protocol, host);
        this.protocol = protocol;
        this.apiUrl = `${protocol}://${host}`;
        this.errorCb = errorCb;
    }

    getUrl = (endpoint) => {
        return `${this.apiUrl}/${endpoint}`;
    };

    async postJsonToApi(endpoint, body, ignoreException = false) {
        const url = this.getUrl(endpoint);
        const httpRes = await fetch(url, {
            method: "POST",
            credentials: "same-origin",
            headers: getheaders(),
            body: JSON.stringify(body),
        })
            .then((res) => handleErrors(res, this.errorCb))
            .catch((error) => {
                if (!ignoreException) {
                    throw error;
                } else {
                    return null;
                }
            });

        const res = await httpRes.json();
        if (![200, 201].includes(httpRes.status)) {
            return {
                error: res["error"],
                data: null,
            };
        }

        return {
            error: null,
            data: res,
        };
    }

    async getJsonFromApi(endpoint, ignoreException = false) {
        const url = this.getUrl(endpoint);
        const httpRes = await fetch(url, {
            method: "GET",
            credentials: "same-origin",
            headers: getheaders(),
        })
            .then((res) => handleErrors(res, this.errorCb))
            .catch((error) => {
                if (!ignoreException) {
                    throw error;
                } else {
                    return null;
                }
            });

        const res = await httpRes.json();
        if (![200, 201].includes(httpRes.status)) {
            return {
                error: res["error"],
                data: null,
            };
        }

        return {
            error: null,
            data: res,
        };
    }

    async putJsonToApi(endpoint, body, ignoreException = false) {
        const url = this.getUrl(endpoint);
        const httpRes = await fetch(url, {
            method: "PUT",
            credentials: "same-origin",
            headers: getheaders(),
            body: JSON.stringify(body),
        })
            .then((res) => handleErrors(res, this.errorCb))
            .catch((error) => {
                if (!ignoreException) {
                    throw error;
                } else {
                    return null;
                }
            });

        const res = await httpRes.json();
        if (!httpRes.ok) {
            return {
                error: res["error"],
                data: null,
            };
        }

        return {
            error: null,
            data: res,
        };
    }

    async deleteJsonFromApi(endpoint, ignoreException = false) {
        const url = this.getUrl(endpoint);
        const httpRes = await fetch(url, {
            method: "DELETE",
            credentials: "same-origin",
            headers: getheaders(),
        })
            .then((res) => handleErrors(res, this.errorCb))
            .catch((error) => {
                if (!ignoreException) {
                    throw error;
                } else {
                    return null;
                }
            });

        const res = await httpRes.json();
        if (!httpRes.ok) {
            return {
                error: res["error"],
                data: null,
            };
        }

        return {
            error: null,
            data: res,
        };
    }
}
