import HTTPClient from "./http-client";

export default class ApiClient {
    constructor(host, protocol, reportError) {
        this.httpClient = new HTTPClient(host, protocol, reportError);
    }

    getBoards = async () => {
        const res = await this.httpClient.getJsonFromApi("boards");
        console.log(res);
        return res;
    };
}
