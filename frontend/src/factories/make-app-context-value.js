import ApiClient from "../client/api-client";

export default async function makeAppContextValue() {
    function reportError(error) {
        console.log("Error: " + error.message);
    }

    const { hostname, protocol } = decideApiHostNames();

    const apiClient = new ApiClient(hostname, protocol, reportError);

    const defaultAppContextValue = {
        debugString: "wolololo",
        apiClient: apiClient,
    };

    return defaultAppContextValue;
}

function decideApiHostNames() {
    // const apiHostname = process.env.REACT_APP_API_HOST_NAME;
    // const useApiServer = process.env.NODE_ENV === 'production';

    const prefix = "api";
    const hostname = process.env.REACT_APP_API_HOSTNAME || "";
    const protocol = "http"; // window.location.protocol === "https" ? "https" : "http";
    console.log("AKHJGAJKSDGKAS", hostname, protocol);
    return { prefix, hostname, protocol };
}
