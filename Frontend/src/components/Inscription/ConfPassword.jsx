import { useState, useContext } from "react";
import { DataContext } from "./Context/DataContext";

const ConfPassword = () => {
    //variable
    const {password, setPassword, confPassword, setConfPassword} = useContext(DataContext)
    const [erreur, setErreur] = useState(false)
    const [message, setMessage] = useState()

    //fonction
    const handleChange = (e) => {
        setConfPassword(e.target.value)
        let mdpconf = e.target.value;
        if((mdpconf.length==password.length || mdpconf.length>password.length ) && (mdpconf != password)) {
            setErreur(true)
            setMessage("Mot de passe incorrect")
        }else{
            setErreur(false)
        }

    }

    const handleBlur = (e) => {
        if(password != e.target.value){
            setErreur(true)
            setError(true)
            setMessage("Mot de passe incorrect")        
        }
    }
    //render
    return (
    <div>
        <label>Confirmation de votre mot de passe</label>
        <input type="password" required onChange={handleChange} onBlur={handleBlur} />
        {
            erreur && <small className="erreur_input">{message}</small>
        }
        
    </div>        
    )
}

export default ConfPassword;