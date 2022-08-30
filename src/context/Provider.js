import React, { createContext, useState } from "react"

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {

    //get and set current user here...
    const [content, setContent] = useState([])


    return (<GlobalContext.Provider value={{content, setContent}}>{children}</GlobalContext.Provider>)
}