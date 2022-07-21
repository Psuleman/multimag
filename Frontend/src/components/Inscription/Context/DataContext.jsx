import React, { useState } from 'react'

export const DataContext = React.createContext({})


const DataContextProvider = ({children}) => {
    //variable
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    //fonction

    //render
    return(
        <DataContext.Provider value={{
            nom: nom, setNom: setNom, 
            prenom:prenom, setPrenom: setPrenom,
            email: email, setEmail: setEmail,
            password: password, setPassword: setPassword,
            confPassword: confPassword, setConfPassword: setConfPassword,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider

