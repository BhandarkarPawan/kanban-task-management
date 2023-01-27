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

    postBoard = async (name, columns) => {
        const res = await this.httpClient.postJsonToApi("boards", {
            name,
            columns,
        });
        return res;
    }
}
