import { useState, useContext } from "react";
import { DataContext } from "./Context/DataContext";

const Prenom = () => {
    //variable
    const {prenom, setPrenom} = useContext(DataContext)
    const [erreur, setErreur] = useState(false)
    const [message, setMessage] = useState()

    //fonction

    //render
    return (
    <div>
        <label>Prénom</label>
        <input type="text" onChange={(e)=>{setPrenom(e.target.value)}} />
        {
            erreur && <small className="erreur_input">{message}</small>
        }
        
    </div>        
    )
}

export default Prenom;