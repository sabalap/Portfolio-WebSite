import React, { useReducer, useContext } from "react";
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
} from "../actions";
import reducer from "../reducer/reducer";
const initialState = {
    isSidebarOpen: false
}
const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN })
    }
    const closeSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE })
    }
    return (
        <Context.Provider value={{ ...state, openSidebar, closeSidebar }}>
            {children}
        </Context.Provider>
    )
}
export const useUseContext = () => {
    return useContext(Context)
}