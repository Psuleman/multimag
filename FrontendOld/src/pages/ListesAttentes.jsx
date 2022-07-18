import CarteProduit from '../component/ListesProduits/CarteProduit'
import '../assets/scss/ListeProduit.scss'
import {useState, useEffect} from 'react'

import Recherche from "../component/ListesProduits/Recherche"
import Categorie from "../component/ListesProduits/Categorie"
import Univers from "../component/ListesProduits/Univers"
import Marque from "../component/ListesProduits/Marque"
import RefProduit from "../component/ListesProduits/RefProduit"
import {ReferencementContext} from '../component/ListesProduits/Context/ReferencementContext'


const ListesAttentes = () => {

    //liste des produit à référencer
    const [produitList, setProduitList] = useState()

    const [univers, setUnivers] = useState()
    const [universFiltre, setUniversFiltre] = useState()
    const [categorie, setCategorie] = useState()
    const [categorieFiltre, setCategorieFiltre] = useState()

    const [marque, setMarque] = useState(false)
    const [marqueFiltre, setMarqueFiltre] = useState()

    const [search, setSearch] = useState("")
    const [annuler, setAnnuler] = useState(false)
    const [produitExist, setProduitExist] = useState(true)
    const [produitFindSkuTemporaire, setProduitFindSkuTemporaire] = useState(false)




    //
    const [showReferencement, setShowReferencement] = useState(false)
    const [skuRef, setSkuRef] = useState()
    useEffect(()=>{
        setProduitFindSkuTemporaire(false)
        const urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires?newProduit=0'
        /**
         * LISTE PRODUIT
         */
        fetch(urlListProduit,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
        .then(function(res){
            if(res.ok){
                return res.json()
            }
         })
        .then(function(value){
            setProduitList(value)
                if(value.length > 0){

                let tabCategory = []
                let tabUnivers = []
                let tabMarque = []

                for(let item in value)
                {
                    tabCategory.push(value[item].categorie)
                    tabUnivers.push(value[item].univers)
                    tabMarque.push(value[item].marque)

                }

                tabCategory = [... new Set(tabCategory)]
                tabUnivers = [... new Set(tabUnivers)]
                tabMarque = [... new Set(tabMarque)]

                setCategorie(tabCategory)
                setUnivers(tabUnivers)
                setMarque(tabMarque)
                setProduitExist(true)
            }
            else{
                setProduitExist(false)
            }
        })
        .catch(function(err){
         })

    }, [])

    return (
        <div className="liste-produit">
            <ReferencementContext.Provider
                value = {{
                    produitList : produitList,
                    setProduitList : setProduitList,

                    univers : univers,
                    categorie : categorie,
                    marque : marque,

                    categorieFiltre : categorieFiltre,
                    setCategorieFiltre : setCategorieFiltre,

                    universFiltre : universFiltre,
                    setUniversFiltre : setUniversFiltre,

                    marqueFiltre : marqueFiltre,
                    setMarqueFiltre : setMarqueFiltre,

                    search: search,
                    setSearch: setSearch,
                    annuler: annuler,
                    setAnnuler: setAnnuler,
                    setShowReferencement : setShowReferencement,
                    showReferencement : showReferencement,
                    setSkuRef : setSkuRef,
                    skuRef : skuRef,

                    setProduitExist : setProduitExist,
                    produitExist : produitExist,

                    produitFindSkuTemporaire : produitFindSkuTemporaire,
                    setProduitFindSkuTemporaire : setProduitFindSkuTemporaire,
                }}           
                    >
                    {
                        showReferencement && <div>
                            <RefProduit />
                        </div>// detaille
                    }
                    {
                        !showReferencement && <div>
                                    <h2>{produitList && produitList.length+" produit(s) à référencer"}</h2>
                                    <section className="filtreListProduit">

                                        <Univers />              
                                        <Categorie />               
                                        <Marque />               
                                        <Recherche /> 

                                    </section>
                                                {
                            produitExist ?
                                (produitList?                               


                                    <section className="listeCarteProduit"> 
                                    {
                                        produitList &&
                                        produitList.map((item)=>{
                                            let img = "https://leclaireur-shopify.imgix.net/" + item.sku + "/" + item.sku + "-01.png";
                                            let altimg = item.sousCategorie + " de " + item.marque
                                            let index = "produit"+item.sku
                                            return (
                                                <CarteProduit key={index} sku={item.sku}  img={img} altimg={altimg} categorie={item.categorie} univers={item.univers} />
                                                )
                                        })
                                    }    
                                    {
                                        produitFindSkuTemporaire && 
                                        <div>{produitList.sku}</div>
                                    }               
                                                       
                                    </section>                                  
                             : <p>Patienter ...</p>) : <h5>Aucun nouveau produit trouvé</h5> 
                        }
                          
                        </div> //ListesProduits
                    }
            

            

            </ReferencementContext.Provider>

        </div>
    )
}

export default ListesAttentes;