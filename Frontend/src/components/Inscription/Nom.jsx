import { useState, useContext } from "react";
import { DataContext } from "./Context/DataContext";

const Nom = () => {
    //variable
    const {nom, setNom} = useContext(DataContext)
    const [erreur, setErreur] = useState(false)
    const [message, setMessage] = useState()

    //fonction
    const handleBlur= (e) => {
        let name = e.target.value;
        if(name.length<2) {
            setErreur(true)
            setMessage("Votre nom doit contenir au moins 2 lettres")
        }else{
            setErreur(false)
        }
    }
    //render
    return (
    <div>
        <label>Nom</label>
        <input type="text" required onChange={(e)=>{setNom(e.target.value)}} onBlur={handleBlur} />
        {
            erreur && <small className="erreur_input">{message}</small>
        }
        
    </div>        
    )
}

export default Nom;