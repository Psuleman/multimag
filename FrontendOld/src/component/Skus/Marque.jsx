import { useState, useEffect, useContext} from "react"
import { PimContext } from "./Context/PimContext"

const Marque = () => {
    const {setProduitList, marque, marqueFiltre, setMarqueFiltre, setSearch, categorieFiltre, universFiltre} = useContext(PimContext)

    const handleChange = () => {

    }
    return (
        <div>
            <h3>Marque</h3>
            <div>
                <select value={marqueFiltre} onChange={
                    handleChange
                }>
                
                <option value="">Tout</option>
                {
                    marque &&
                    marque.map((item, index)=>(
                            <option value={item} key={index}>{item}</option>
                        ))
                }
                </select>			
            </div>
        </div>
    )
}
export default Marque