import {ProduitContext} from './Context/ProduitContext'
import {useContext, useState, useEffect } from 'react'

const TemplateInputSelect = ({children, label, typeInput, valeurUpdate, valeurEnUpdate, attributUpdate, setAttributUpdate, urlAPI, attributEnUpdate, setAttributEnUpdate}) => {
    
    const {produit, entretienUpdate, setEntretienUpdate, entretienEnUpdate, setEntretienEnUpdate,
            marqueUpdate, setMarqueUpdate, 
            coupeUpdate, setCoupeUpdate, coupeEnUpdate, setCoupeEnUpdate,  
            couleurUpdate, setCouleurUpdate, couleurEnUpdate, setCouleurEnUpdate,
           
            tagsReferencementUpdate, setTagsReferencementUpdate,
            categorieUpdate, categorieEnUpdate, setCategorieUpdate, setCategorieEnUpdate,
            sousCategorieUpdate, sousCategorieEnUpdate,setSousCategorieUpdate, setSousCategorieEnUpdate,
            universUpdate, universEnUpdate, setUniversUpdate, setUniversEnUpdate,
            filtreUpdate, filtreEnUpdate, setFiltreUpdate, setFiltreEnUpdate,

        } = useContext(ProduitContext)


    //MARQUES
    const [valueModification, setValueModification] = useState("")
    const [tabfiltre, setTabfiltre] = useState()
    const [listValue, setListValue] = useState()
    const [showList, setShowList] = useState(false)
    const [newValue, setNewValue] = useState(false)
    const [valueEn, setValueEn] = useState()

    useEffect(()=>{
        setValueModification(valeurUpdate)
        if(label == "UNIVERS")
            produit.univers? setValueEn(produit.universEn) : setValueEn("")        

        if(label == "CATEGORIE")
            produit.categorie? setValueEn(produit.categorieEn) : setValueEn("")

        if(label == "SOUS CATEGORIES")
            produit.sousCategorie? setValueEn(produit.sousCategorieEn) : setValueEn("")        
            
        if(label == "FILTRE")
            produit.filtre? setValueEn(produit.filtreEn) : setValueEn("")

        if(label == "COULEUR")
            produit.couleur? setValueEn(produit.couleurEn) : setValueEn("")        
            
        if(label == "COUPE")
            produit.coupe? setValueEn(produit.coupeEn) : setValueEn("")
            
        if(label == "ENTRETIEN")
            produit.entretien? setValueEn(produit.entretienEn) : setValueEn("")  
        
        if(label == "UNIVERS EN")
            produit.univers? setValueEn(produit.entretienEn) : setValueEn("")

        if(urlAPI!=""){
            /**
            * API
            */
            fetch(urlAPI,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
            .then(function(res){
                if(res.ok){
                    return res.json()
                }
            })
            .then(function(value){
                if(label == "COUPE"){
                    setListValue(value)
                    setTabfiltre(value)
                }
                else{
                    setListValue(value)
                    setTabfiltre(value)
                }                
            })
            .catch(function(err){
            })    
        }        
}, [produit])


const handleChange = (motcle) => {

    if(label != "PRIX DE VENTE AVEC REMISE"){
         setTabfiltre(listValue)
        let tab = []
        let regex = new RegExp(motcle, "i")
        if(motcle != ""){   
            setShowList(true) 
            listValue.forEach(element => {
                if(label=="MARQUE" && element.marque.match(regex))
                    tab.push(element)

                if(label=="COUPE" && element.coupeRef.match(regex))
                    tab.push(element)
                               
                if((label=="UNIVERS") && element.universRef.match(regex))
                    tab.push(element)
                               
                if((label=="ENTRETIEN") && element.entretien.match(regex))
                    tab.push(element)

                if((label=="COULEUR") && element.couleurRef.match(regex))
                    tab.push(element)          

                if(label=="PAYS ORIGINE" && element.pays.match(regex))
                    tab.push(element)   

                if((label=="CATEGORIE") && element.categorieRef.match(regex))
                    tab.push(element)         
                
                if((label=="SOUS CATEGORIE") && element.sousCategorieRef.match(regex))
                    tab.push(element)

                if((label=="FILTRE") && element.filtre.match(regex))
                    tab.push(element)

                if(label=="GRILLE DE TAILLE" && element.grilleTailleRef.match(regex))
                    tab.push(element)
        
                if(label=="ATTRIBUT" && element.taille_ref.match(regex))
                    tab.push(element)
                            
            });
            setTabfiltre(tab)
        }

    }
    else{

    }
    }
    

    return (
        <div>
            <div className="label_value">
            <div><label>{label} : </label></div>
                <div>
                    <div>
                        <div>
                            <input type={typeInput} value={valueModification} 
                                onChange={(e) => {
                                    setValueModification(e.target.value)
                                    handleChange(e.target.value)
                                    setAttributUpdate(e.target.value)

                                    }}
                                onBlur={(e) => {
                                    if(!valueModification){
                                        //setAttributUpdate(valeurUpdate)
                                        //setValueModification(valeurUpdate)
                                    }

                                }}
                            />
                        
                        </div>
                        
                        <div>
                            {
                                valeurUpdate != attributUpdate &&  
                                <div><button onClick={()=>{
                                    setShowList(false)
                                    setValueModification(valueModification)
                                    setAttributUpdate(valueModification)
                                    setNewValue(true)
                                }}>Ajouter</button></div>
                            } 
                            {
                                valeurUpdate != attributUpdate &&  
                                <div><button onClick={()=>{
                                    setValueModification(valeurUpdate)
                                    setAttributUpdate(valeurUpdate)
                                }}>Annuler</button></div>
                            } 
                        </div>  

                        {showList && valeurUpdate != attributUpdate && <div>            
                            {tabfiltre &&
                                tabfiltre.map((item)=>{

                                    if(label == "MARQUE"){
                                        return (
                                            <div className="item" key={item.marque}
                                            onClick={()=>{ 

                                                setValueModification(item.marque)
                                                setAttributUpdate(item.marque)
                                                setShowList(false)
                                            }}
                                            >{item.marque}</div>
                                        )
                                        } ///if(label == "MARQUE")

                                    if(label == "COUPE"){
                                        return (
                                            <div className="item" key={item.coupeRef}
                                            onClick={()=>{ 
                                                setValueEn(item.coupeEn)
                                                setValueModification(item.coupeRef)
                                                setAttributUpdate(item.coupeRef)
                                                setShowList(false)
                                            }}
                                            >{item.coupeRef}</div>
                                        )
                                    } ///if(label == "COUPE")

                                    if(label == "ENTRETIEN"){
                                        return (
                                            <div className="item" key={item.entretien}
                                            onClick={()=>{ 
                                                setValueEn(item.entretienEn)
                                                setValueModification(item.entretien)
                                                setAttributUpdate(item.entretien)
                                                setShowList(false)
                                            }}
                                            >{item.entretien}</div>
                                        )
                                        } ///if(label == "ENTRETIEN")

                                    if(label == "CATEGORIE"){
                                        return (
                                            <div className="item" key={item.categorieRef}
                                            onClick={()=>{ 
                                                setValueEn(item.categorieRefEn)
                                                setAttributEnUpdate(item.categorieRefEn)
                                                setValueModification(item.categorieRef)
                                                setAttributUpdate(item.categorieRef)
                                                setShowList(false)

                                            }}
                                            >{item.categorieRef}</div>
                                        )
                                        } ///if(label == "CATEGORIE")

                                    if(label == "COULEUR"){
                                        return (
                                            <div className="item" key={item.couleurRef}
                                            onClick={()=>{ 
                                                setValueEn(item.couleurRefEn)
                                                setValueModification(item.couleurRef)
                                                setAttributUpdate(item.couleurRef)
                                                setAttributEnUpdate(item.couleurRefEn)
                                                setShowList(false)
                                            }}
                                            >{item.couleurRef}</div>
                                        )
                                        } ///if(label == "COULEUR")


                                    if(label == "PAYS ORIGINE"){
                                        return (
                                            <div className="item" key={item.pays}
                                            onClick={()=>{ 
                                                setValueModification(item.pays)
                                                setAttributUpdate(item.pays)
                                                setShowList(false)
                                            }}
                                            >{item.pays}</div>
                                        )
                                        } ///if(label == "PAYS ORIGINE")

                                    if(label == "UNIVERS"){
                                        return (
                                            <div className="item" key={item.universRef}
                                            onClick={()=>{ 
                                                setValueEn(item.universRefEn)
                                                setAttributEnUpdate(item.universRefEn)
                                                setValueModification(item.universRef)
                                                setAttributUpdate(item.universRef)
                                                setShowList(false)
                                            }}
                                            >{item.universRef}</div>
                                        )
                                        } ///if(label == "UNIVERS REF") 



                                    if(label == "SOUS CATEGORIE"){
                                        
                                                return (
                                                    <div className="item" key={item.sousCategorieRef}
                                                    onClick={()=>{ 
                                                        setValueEn(item.sousCategorieRefEn)
                                                        setAttributEnUpdate(item.sousCategorieRefEn)
                                                        setValueModification(item.sousCategorieRef)
                                                        setAttributUpdate(item.sousCategorieRef)
                                                        setShowList(false)
                                                    }}
                                                    >{item.sousCategorieRef}</div>
                                                )
                                                } ///if(label == "SOUS CATEGORIES")


                                    if(label == "FILTRE"){

                                            return (
                                                <div className="item" key={item.filtre}
                                                onClick={()=>{
                                                    /*setValueEn(item.filtreRefEn) 
                                                    setAttributEnUpdate(item.filtreRefEn)
                                                    setValueModification(item.filtre)
                                                    setAttributUpdate(item.filtre)
                                                    setShowList(false)*/

                                                    setValueEn(item.filtre_ref_en)
                                                    setAttributEnUpdate(item.filtre_ref_en)
                                                    setValueModification(item.filtre)
                                                    setAttributUpdate(item.filtre)
                                                    setShowList(false)
                                                }}
                                                >{item.filtre}</div>
                                            )
                                            } ///if(label == "FILTRE")     
    

                                    if(label == "GRILLE DE TAILLE"){
                                            return (
                                                <div className="item" key={item.grilleTailleRef}
                                                onClick={()=>{ 
                                                    setValueModification(item.grilleTailleRef)
                                                    setAttributUpdate(item.grilleTailleRef)
                                                    setShowList(false)
                                                }}
                                                >{item.grilleTailleRef}</div>
                                            )
                                            } ///if(label == "FILTRES")         

                                    if(label == "ATTRIBUT"){
                                            return (
                                                <div className="item" key={item.taille_ref}
                                                onClick={()=>{ 
                                                    setValueModification(item.taille_ref)
                                                    setAttributUpdate(item.taille_ref)
                                                    setShowList(false)
                                                }}
                                                >{item.taille_ref}</div>
                                            )
                                            }//if(label == "FILTRES")                                                                                      
                                    })  
                                                                
                            }
                            </div>}



        </div>

        </div>
               
            </div>
        {
            (label=="UNIVERS" || label=="CATEGORIE" || label=="SOUS CATEGORIE" || label=="FILTRE" || label=="COULEUR" ) && 
            <div className="label_value">
                <div><label>{label} EN : </label></div>
                <div><input type="text" value={valueEn}
                    onChange={(e) => {
                        setValueEn(e.target.value)
                        setAttributEnUpdate(e.target.value)

                        }}
                    onBlur={(e) => {
                        if(!valueModification){
                            setAttributEnUpdate(valeurUpdate)
                            setValueEn(valeurUpdate)
                        }
                    }}
                />
                <div>
                    {
                        valeurUpdate != attributUpdate &&  
                        <div><button onClick={()=>{
                            setValueEn(valueEn)
                            setAttributEnUpdate(valueModification)
                        }}>Ajouter</button></div>
                    } 
                    {
                        valeurUpdate != attributUpdate &&  
                        <div><button onClick={()=>{
                            setValueEn(valeurEnUpdate)
                            setAttributEnUpdate(valeurEnUpdate)
                        }}>Annuler</button></div>
                    } 
                        </div>  
                </div>
            </div>
        } 
    </div>
)
}

export default TemplateInputSelect
