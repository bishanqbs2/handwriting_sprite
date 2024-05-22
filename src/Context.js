import { createContext } from "react";

export const GlobalContext = createContext();

// Define the reducer to update the Progress state
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      // console.log(state);
      return { ...state };

    default:
      return state;
  }
};

// Generate an object with the desired structure
export const asyncFunction = () => {};
