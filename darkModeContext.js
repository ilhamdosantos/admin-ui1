import { createContext, useReducer } from "react";

const DarkModeContext = createContext();

const INITIAL_STATE = {
  isDarkMode: false,
};

const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        isDarkMode: !state.isDarkMode,
      };
    case "LIGHT":
      return {
        isDarkMode: false,
      };
    case "DARK":
      return {
        isDarkMode: true,
      };
    default:
      return state;
  }
};

const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ isDarkMode: state.isDarkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
