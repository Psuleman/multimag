import React, {useState, useEffect} from "react"

export const SkusContext = React.createContext({})

const SkusContextProvider = ({children}) => {
	const [skus, setSkus] = useState([])

	const url = "http://212.129.3.31:8080/api/skuses"

	useEffect(() => {
					const url = "http://212.129.3.31:8080/api/skuses";

					fetch(url, {
				
						    method: 'GET',
						    headers: new Headers(),   
						    mode: 'cors',
						    cache: 'default'
						    
						})
						  .then(function(res) {
						    if (res.ok) {
						      return res.json();
						    }
						  })
						  .then(function(value) {
						  	let donnees = Object.keys(value).map(function(key){
						  		return [key, value[key]]
						  	});
						  	let tab = donnees[3][1]

						  	setSkus(tab);

						  })
						  .catch(function(err) {
						    // Une erreur est survenue
						  });



						}, []);		

	return(



				<SkusContext.Provider 
					value={{
						skus : skus,

					}}
				>
					{children}
				</SkusContext.Provider>
		)
}


export default SkusContextProvider