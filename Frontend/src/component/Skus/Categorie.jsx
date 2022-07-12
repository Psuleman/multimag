import { PimContext } from "./Context/PimContext"
import { useState, useEffect, useContext} from "react"


const Categorie = () => {
	const {categorie, setCategorieFiltre, categorieFiltre, universFiltre, marqueFiltre,setProduitList, setSearch} = useContext(PimContext)

    const handleChange = () => {

    }

    return (
        <div>			
            <h3>Categorie</h3>
            <div>
                <select value={categorieFiltre} onChange={
                    handleChange
                }>
                    <option value="">Tout</option>

                {
                    categorie &&
                    categorie.map((item, index)=>(
                            <option value={item} key={index}>{item}</option>

                        ))
                }
                </select>			
            </div>
    </div>
    )
}
export default Categorie