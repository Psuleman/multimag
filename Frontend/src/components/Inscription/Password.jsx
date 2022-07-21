import { useState, useContext } from "react";
import { DataContext } from "./Context/DataContext";

const Password = () => {
    //variable
    const {password, setPassword} = useContext(DataContext)
    const [erreur, setErreur] = useState(false)
    const [message, setMessage] = useState()

    //fonction
    const handleBlur= (e) => {
        setPassword(e.target.value)
        let password = e.target.value;

    }
    const handleChange = (e) => {
        let mdp = e.target.value
        if(mdp.length < 8) {
            setErreur(true)
            setMessage("Minimum 8 caractères")
        }
        else{
            setErreur(false)
        }
    }
    //render
    return (
    <div>
        <label>Mot de passe</label>
        <input type="password" required onChange={handleChange} onBlur={handleBlur} />
        {
            erreur && <small className="erreur_input">{message}</small>
        }
        
    </div>        
    )
}

export default Password;