import { useState, useContext } from "react";
import { DataContext } from "./Context/DataContext";
import validator from 'validator'

const Email = () => {
    //variable
    const {email, setEmail} = useContext(DataContext)
    const [erreur, setErreur] = useState(false)
    const [message, setMessage] = useState()

    //fonction
    const handleBlur= (e) => {
      let emailUser = e.target.value
       if(!((/\S+@leclaireur.fr/).test(emailUser)) || !((/\S+@dalena.fr/).test(emailUser)) ) {
            setErreur(true)
            setMessage('Entrer une email professionnel valide')        
       }
       else{
        setErreur(false)
    }
    
    }
    //render
    return (
    <div>
        <label>Email professionnel</label>
        <input type="email" required onChange={(e)=>{setEmail(e.target.value)}} onBlur={handleBlur} />
        {
            erreur && <small className="erreur_input">{message}</small>
        }
        
    </div>        
    )
}

export default Email;