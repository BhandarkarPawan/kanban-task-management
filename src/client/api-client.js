import HTTPClient from "./http-client";

export default class ApiClient {
    constructor(host, protocol, reportError) {
        this.httpClient = new HTTPClient(host, protocol, reportError);
    }

    getBoards = async () => {
        const res = await this.httpClient.getJsonFromApi("boards");
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

    createTask = async (boardId, status, title, description, subtasks) => {
        const res = await this.httpClient.postJsonToApi(
            `boards/${boardId}/tasks`,
            {
                title,
                status,
                description,
                subtasks,
            }
        );
        return res;
    };

    editTask = async (
        boardId,
        status,
        taskId,
        title,
        description,
        subtasks
    ) => {
        const res = await this.httpClient.putJsonToApi(
            `boards/${boardId}/tasks/${taskId}`,
            {
                title,
                description,
                subtasks,
                status,
            }
        );
        return res;
    };

    deleteTask = async (boardId, taskId) => {
        const res = await this.httpClient.deleteJsonFromApi(
            `boards/${boardId}/tasks/${taskId}`
        );
        return res;
    };
}
