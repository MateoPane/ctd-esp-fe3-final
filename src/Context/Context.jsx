import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
   theme: "light",
   data: [],
  }

const reducer = (state, action) => {
  switch(action.type){
    case "SET_THEME":
      return {...state, theme: action.payload}
    case "SET_DATA":
      return {...state, data: action.payload};
    default:
      throw new Error("Error al modificar el estado")
  }
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    useEffect(() => {
      axios(url)
      .then((res) => {
        dispatch({type: "SET_DATA", payload: res.data});
      })
      .catch((err) => console.log(err));
    }, []);

    const setTheme = (theme) => {
      dispatch({type: "SET_THEME", payload: theme});
    }
    useEffect(() => {
      document.body.className = state.theme;
    }, [state.theme]);
  
  return (
    <ContextGlobal.Provider value={{...state, setTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
