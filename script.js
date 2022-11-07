(function(){
	console.log("test");
	
	let data;
	fetch("aria-workshop.json")
	.then(response => {
		if(!response.ok){
			throw new Error("Could not fetch data");
		}
		response.json()
	})
	.then(json => {
		data = json;
	})
	.catch(error => {
		console.error("Error fetching data", error);
	});

})();