let isMomFree = true;

let willGetCake = new Promise (
	(resolve, reject) => { 
	        if (isMomFree){
		   let cake = {
		      flavour : 'chocolate',
                      shape   : 'round' 
		    };
		    resolve(cake);
	
		} else {
	           let reason = new Error('Mom is not free');
		   reject(reason); 

		}
	}
); 

/** Consuming this promise  **/

let checkCakeStatus = function() {
     willGetCake
                .then( fullFilled => console.log(fullFilled))
	        .catch(error => console.log(error.message));
}

checkCakeStatus();



