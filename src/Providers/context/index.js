import React, { useReducer, createContext} from "react";
import defaultContext from "./defaultContext";


const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return defaultContext;
    case "setLang":
      return { ...state, siteLang: action.siteLang };
    default:
      return;
  }
};


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  

  const value = {
    state,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
let AppConsumer = AppContext.Consumer;
export { AppContext, AppProvider, AppConsumer };
