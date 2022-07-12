import {useContext, useState, useEffect } from 'react'
import {ProduitContext} from '../Context/ProduitContext'

const Matiere = () => {
    const [matiereList, setMatiereList] = useState([])
    const {produit, totalMatiere} = useContext(ProduitContext)
    const {
            matiere1Update, setMatiere1Update, pourcentMatiere1Update, setPourcentMatiere1Update, 
            matiere2Update, setMatiere2Update, pourcentMatiere2Update, setPourcentMatiere2Update, 
            matiere3Update, setMatiere3Update, pourcentMatiere3Update, setPourcentMatiere3Update, 
            matiere4Update, setMatiere4Update, pourcentMatiere4Update, setPourcentMatiere4Update, 
            matiere5Update, setMatiere5Update, pourcentMatiere5Update, setPourcentMatiere5Update, 
            matiere6Update, setMatiere6Update, pourcentMatiere6Update, setPourcentMatiere6Update, 
            matiere7Update, setMatiere7Update, pourcentMatiere7Update, setPourcentMatiere7Update, 
            matiere8Update, setMatiere8Update, pourcentMatiere8Update, setPourcentMatiere8Update, 
            matiere9Update, setMatiere9Update, pourcentMatiere9Update, setPourcentMatiere9Update, 
            matiere10Update, setMatiere10Update, pourcentMatiere10Update, setPourcentMatiere10Update, 
    } = useContext(ProduitContext)


    useEffect(()=>{
		const urlMatiere = 'http://212.129.3.31:8080/api/matieres'
	
		/**
		 * Matiere
		 */
		fetch(urlMatiere,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
		.then(function(res){
		 	if(res.ok){
		 		return res.json()
		 	}
		 })
		.then(function(value){
			setMatiereList(value)
		 })
		.catch(function(err){
		 })	

		}, [])


    return (
    <div className="matiere">
        <h4>Matières</h4>
        
        {
            totalMatiere>100 && <h5>total des matiere = {totalMatiere}%</h5>
        }

        <MatiereItem item={1} matiere={matiere1Update} setMatiere={setMatiere1Update} pourcentMatiere={pourcentMatiere1Update} setPourcentMatiere={setPourcentMatiere1Update} matiereList={matiereList} />
        <MatiereItem item={2} matiere={matiere2Update} setMatiere={setMatiere2Update} pourcentMatiere={pourcentMatiere2Update} setPourcentMatiere={setPourcentMatiere2Update} matiereList={matiereList} />
        <MatiereItem item={3} matiere={matiere3Update} setMatiere={setMatiere3Update} pourcentMatiere={pourcentMatiere3Update} setPourcentMatiere={setPourcentMatiere3Update} matiereList={matiereList} />
        <MatiereItem item={4} matiere={matiere4Update} setMatiere={setMatiere4Update} pourcentMatiere={pourcentMatiere4Update} setPourcentMatiere={setPourcentMatiere4Update} matiereList={matiereList} />
        <MatiereItem item={5} matiere={matiere5Update} setMatiere={setMatiere5Update} pourcentMatiere={pourcentMatiere5Update} setPourcentMatiere={setPourcentMatiere5Update} matiereList={matiereList} />        
        <MatiereItem item={6} matiere={matiere6Update} setMatiere={setMatiere6Update} pourcentMatiere={pourcentMatiere6Update} setPourcentMatiere={setPourcentMatiere6Update} matiereList={matiereList} />
        <MatiereItem item={7} matiere={matiere7Update} setMatiere={setMatiere7Update} pourcentMatiere={pourcentMatiere7Update} setPourcentMatiere={setPourcentMatiere7Update} matiereList={matiereList} />
        <MatiereItem item={8} matiere={matiere8Update} setMatiere={setMatiere8Update} pourcentMatiere={pourcentMatiere8Update} setPourcentMatiere={setPourcentMatiere8Update} matiereList={matiereList} />
        <MatiereItem item={9} matiere={matiere9Update} setMatiere={setMatiere9Update} pourcentMatiere={pourcentMatiere9Update} setPourcentMatiere={setPourcentMatiere9Update} matiereList={matiereList} />
        <MatiereItem item={10} matiere={matiere10Update} setMatiere={setMatiere10Update} pourcentMatiere={pourcentMatiere10Update} setPourcentMatiere={setPourcentMatiere10Update} matiereList={matiereList} />
    </div>
        )
    }



export const MatiereItem = ({item, matiere, setMatiere, pourcentMatiere, setPourcentMatiere, matiereList={matiereList}}) => {
    const {setTotalMatiere, totalMatiere} = useContext(ProduitContext)
    const {pourcentMatiere1Update, pourcentMatiere2Update, pourcentMatiere3Update, pourcentMatiere4Update, pourcentMatiere5Update, pourcentMatiere6Update, pourcentMatiere7Update, pourcentMatiere8Update, pourcentMatiere9Update, pourcentMatiere10Update} = useContext(ProduitContext)

    return (
        <div className="label_value">
        <div>
            <label>Matière {item}</label>
            <select   value={matiere} onChange={(e)=>{setMatiere(e.target.value)}}>
                <option>Choisissez</option>
            {
                matiereList.map((item, index)=>(
                    <option value={item.matiere} key={index}>{item.matiere}</option>
                    ))
            }							
            </select>
        </div>
        <div className="label_value"><label>% Matiere {item}</label>
        <input type="number"    value={pourcentMatiere} onChange={(e)=>{
            if(e.target.value>100)
                setPourcentMatiere(100)

            else if(e.target.value<0)
                setPourcentMatiere(0)

            else
                setPourcentMatiere(e.target.value)

            if(isNaN(e.target.value)){
                e.target.value = 0
            }
            if(item==1)     
                setTotalMatiere((oldState)=>{
                    let newState = parseFloat(e.target.value) + parseFloat(pourcentMatiere2Update) + parseFloat(pourcentMatiere3Update) + parseFloat(pourcentMatiere4Update) + parseFloat(pourcentMatiere5Update) + parseFloat(pourcentMatiere6Update) + parseFloat(pourcentMatiere7Update) + parseFloat(pourcentMatiere8Update) + parseFloat(pourcentMatiere9Update) + parseFloat(pourcentMatiere10Update)

                    return newState
                })

            if(item==2)     
                setTotalMatiere((oldState)=>{
                    let newState = parseFloat(pourcentMatiere1Update) + parseFloat(e.target.value) + parseFloat(pourcentMatiere3Update) + parseFloat(pourcentMatiere4Update) + parseFloat(pourcentMatiere5Update) + parseFloat(pourcentMatiere6Update) + parseFloat(pourcentMatiere7Update) + parseFloat(pourcentMatiere8Update) + parseFloat(pourcentMatiere9Update) + parseFloat(pourcentMatiere10Update)

                    return newState
                })

                if(item==3)     
                setTotalMatiere((oldState)=>{
                    let newState = parseFloat(pourcentMatiere1Update) + parseFloat(pourcentMatiere2Update) + parseFloat(e.target.value) + parseFloat(pourcentMatiere4Update) + parseFloat(pourcentMatiere5Update) + parseFloat(pourcentMatiere6Update) + parseFloat(pourcentMatiere7Update) + parseFloat(pourcentMatiere8Update) + parseFloat(pourcentMatiere9Update) + parseFloat(pourcentMatiere10Update)

                    return newState
                })
            
            if(item==4)     
                setTotalMatiere((oldState)=>{
                    let newState = parseFloat(e.target.value) + parseFloat(pourcentMatiere2Update) + parseFloat(pourcentMatiere3Update) + parseFloat(pourcentMatiere4Update) + parseFloat(pourcentMatiere5Update) + parseFloat(pourcentMatiere6Update) + parseFloat(pourcentMatiere7Update) + parseFloat(pourcentMatiere8Update) + parseFloat(pourcentMatiere9Update) + parseFloat(pourcentMatiere10Update)

                    return newState
                })

            if(item==5)     
                setTotalMatiere((oldState)=>{
                    let newState = parseFloat(pourcentMatiere1Update) + parseFloat(e.target.value) + parseFloat(pourcentMatiere3Update) + parseFloat(pourcentMatiere4Update) + parseFloat(pourcentMatiere5Update) + parseFloat(pourcentMatiere6Update) + parseFloat(pourcentMatiere7Update) + parseFloat(pourcentMatiere8Update) + parseFloat(pourcentMatiere9Update) + parseFloat(pourcentMatiere10Update)

                    return newState
                })

            if(item==6)     
                setTotalMatiere((oldState)=>{
                    let newState = parseFloat(pourcentMatiere1Update) + parseFloat(pourcentMatiere2Update) + parseFloat(e.target.value) + parseFloat(pourcentMatiere4Update) + parseFloat(pourcentMatiere5Update) + parseFloat(pourcentMatiere6Update) + parseFloat(pourcentMatiere7Update) + parseFloat(pourcentMatiere8Update) + parseFloat(pourcentMatiere9Update) + parseFloat(pourcentMatiere10Update)

                    return newState
                })

            if(item==7)     
                setTotalMatiere((oldState)=>{
                    let newState = parseFloat(pourcentMatiere1Update) + parseFloat(pourcentMatiere2Update) + parseFloat(e.target.value) + parseFloat(pourcentMatiere4Update) + parseFloat(pourcentMatiere5Update) + parseFloat(pourcentMatiere6Update) + parseFloat(pourcentMatiere7Update) + parseFloat(pourcentMatiere8Update) + parseFloat(pourcentMatiere9Update) + parseFloat(pourcentMatiere10Update)

                    return newState
                })
            
            if(item==8)     
                setTotalMatiere((oldState)=>{
                    let newState = parseFloat(e.target.value) + parseFloat(pourcentMatiere2Update) + parseFloat(pourcentMatiere3Update) + parseFloat(pourcentMatiere4Update) + parseFloat(pourcentMatiere5Update) + parseFloat(pourcentMatiere6Update) + parseFloat(pourcentMatiere7Update) + parseFloat(pourcentMatiere8Update) + parseFloat(pourcentMatiere9Update) + parseFloat(pourcentMatiere10Update)

                    return newState
                })

            if(item==9)     
                setTotalMatiere((oldState)=>{
                    let newState = parseFloat(pourcentMatiere1Update) + parseFloat(e.target.value) + parseFloat(pourcentMatiere3Update) + parseFloat(pourcentMatiere4Update) + parseFloat(pourcentMatiere5Update) + parseFloat(pourcentMatiere6Update) + parseFloat(pourcentMatiere7Update) + parseFloat(pourcentMatiere8Update) + parseFloat(pourcentMatiere9Update) + parseFloat(pourcentMatiere10Update)

                    return newState
                })

            if(item==10)     
                setTotalMatiere((oldState)=>{
                    let newState = parseFloat(pourcentMatiere1Update) + parseFloat(pourcentMatiere2Update) + parseFloat(e.target.value) + parseFloat(pourcentMatiere4Update) + parseFloat(pourcentMatiere5Update) + parseFloat(pourcentMatiere6Update) + parseFloat(pourcentMatiere7Update) + parseFloat(pourcentMatiere8Update) + parseFloat(pourcentMatiere9Update) + parseFloat(pourcentMatiere10Update)

                    return newState
                })
            
                
        }}
            
        /></div>
    </div>
    )
}

export default Matiere