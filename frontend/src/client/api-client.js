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

    createBoard = async (name, columns) => {
        const res = await this.httpClient.postJsonToApi("boards", {
            name,
            columns,
        });
        return res;
    };

    editBoard = async (id, name, columns) => {
        const res = await this.httpClient.putJsonToApi(`boards/${id}`, {
            name,
            columns,
        });
        return res;
    };

    deleteBoard = async (id) => {
        const res = await this.httpClient.deleteJsonFromApi(`boards/${id}`);
        return res;
    };

    createColumn = async (boardId, name, color) => {
        const res = await this.httpClient.postJsonToApi(
            `boards/${boardId}/columns`,
            {
                name,
                color,
            }
        );
        return res;
    };

    editColumn = async (boardId, columnId, name, color) => {
        const res = await this.httpClient.putJsonToApi(
            `boards/${boardId}/columns/${columnId}`,
            {
                name,
                color,
            }
        );
        return res;
    };

    deleteColumn = async (boardId, columnId) => {
        const res = await this.httpClient.deleteJsonFromApi(
            `boards/${boardId}/columns/${columnId}`
        );
        return res;
    };

    createTask = async (boardId, columnId, title, description, subtasks) => {
        const res = await this.httpClient.postJsonToApi(
            `boards/${boardId}/columns/${columnId}/tasks`,
            {
                title,
                description,
                subtasks,
            }
        );
        return res;
    };

    editTask = async (
        boardId,
        columnId,
        taskId,
        title,
        description,
        subtasks
    ) => {
        const res = await this.httpClient.putJsonToApi(
            `boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
            {
                title,
                description,
                subtasks,
                status: columnId,
            }
        );
        return res;
    };

    deleteTask = async (boardId, columnId, taskId) => {
        const res = await this.httpClient.deleteJsonFromApi(
            `boards/${boardId}/columns/${columnId}/tasks/${taskId}`
        );
        return res;
    };
}
