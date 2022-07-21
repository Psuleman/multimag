import { useState } from "react"
import { useContext } from "react"
import { DataContext } from "./Context/DataContext"
import Nom from "./Nom"
import Prenom from "./Prenom"
import Email from "./Email"
import Password from "./Password"
import ConfPassword from "./ConfPassword"


const Formulaire = () => {
    //variable
    const {nom, prenom, email, password, confPassword } = useContext(DataContext)
    const [message, setMessage] = useState()
    const [typeMessage, setTypeMessage] = useState("")

    //fonction
    const handleSubmit = (e) => {
        e.preventDefault();
        setTypeMessage("")
        console.log(password, " ", confPassword)

        if((confPassword == password) && nom.length>2){
            //Enregistrer les données dans la base de données via l'api
            let donnesJson = {
                "email": email,
                "nom": nom,
                "prenom": prenom,
                "password": password
              }
              
			//request post
			console.log(JSON.stringify(donnesJson))					      
						
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json',
				accept: 'application/json'
				},
				body: JSON.stringify(donnesJson)
				};
							
				fetch('http://212.129.3.31:8080/api/users', requestOptions)
				.then(response => {
			    //response.json()
                    if(response.status == 201){
                        setMessage("Inscription réussi")
                        setTypeMessage("Succes")
                    }
                    else{
                        setMessage("Echec d'inscription ou utilisateur existant. Veuillez réessayer.")
                        setTypeMessage("Echec")
                    }
				})
				//.then(data => return data)
				.catch(err=>{
				    console.log(err)
				});	              



        }
        else{
            //message d'erreur
            let erreurMessage = ""
            if(nom.length<2)
            {
                erreurMessage += "Nom incorrect, minimum 2 lettre. "
            }
            if(confPassword != password || password.length<8){
                erreurMessage += "Mot de passe incorrect."
            }
            
            setMessage(erreurMessage)
            setTypeMessage("Echec")
        }
    }
    //render
    return (
        <form onSubmit={handleSubmit}>
            {
                typeMessage=="Succes" && <aside className="successMessage">{message}</aside>
            }
            {
                typeMessage=="Echec" && <aside className="echecMessage">{message}</aside>
            }
            <aside></aside>
			<small>Tous les champs sont obligatoires.</small>
			<Nom />
			<Prenom />
			<Email />
			<Password />
			<ConfPassword />
			<button className="btn">S'inscrire</button>		
		</form>	
    )
}

export default Formulaire