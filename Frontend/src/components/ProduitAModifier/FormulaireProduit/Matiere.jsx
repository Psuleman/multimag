import {FormContext} from "./FormContext"
import { useContext, useState } from "react";
const Matiere = () => {
    //variable
    const [tab, setTab] = useState()
    const {infoSku} = useContext(FormContext)

    for(let i=0; i<10; i++){
            let tableau = [...tab]
            tableau.push(i)
            setTab(tableau)
    }
    //fonction
    //render
	return (
		<section>
			<h3>Matière</h3>
            {
                tab.map((item) => (
                    <section>
                        <div>
                            <label>Matiere 1</label>
                            <input type="text" value={infoSku.entretien}  />
                        </div>
                        <div>
                            <label>Pourcentage matiere 1</label>
                            <input type="text" value={infoSku.entretien}  />
                        </div>
                    </section>                 
                ))
            }

		
						
		</section>

		)
}

export default Matiere;