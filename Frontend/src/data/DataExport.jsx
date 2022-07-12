export const DataExport =  fetch('http://212.129.3.31:8080/api/export_produit_temporaires',{
			method: 'GET',
			headers: {accept: 'application/json'},
			cache: "default"
		})
		.then(function(res){
		 	if(res.ok){
		 		return res.json()
		 	}
		 })
		.then(function(value){
			return value
		})
		.catch(function(err){
		 })