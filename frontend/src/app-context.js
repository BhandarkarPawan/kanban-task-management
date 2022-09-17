import React from "react";

const AppContext = React.createContext({
    debugString: "fus roh dah",
    apiClient: null,
});

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

export default AppContext;
