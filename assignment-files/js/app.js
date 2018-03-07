const request = superagent
// console.log(superagent)
const countriesContainer  = document.querySelector(".countries-container")

request		
	.get("https://restcountries.eu/rest/v2/all")
	.then(function(data){
		let countriesObject = data.body
		for(let i = 0; i < countriesObject.length; i++){
			
			let countryCard = document.createElement("div")
			countryCard.classList.add("country-card")

			let countryFlag = document.createElement("img")
			countryFlag.classList.add("country-flag")
			countryFlag.src = countriesObject[i].flag
			countryFlag.alt = "flag"

			let countryName = document.createElement("h4")
			countryName.classList.add("country-name")
			countryName.textContent = countriesObject[i].name

			let countryCapital = document.createElement("p")
			countryCapital.classList.add("country-capital")
			countryCapital.textContent = countriesObject[i].capital

			countryCard.appendChild(countryFlag)
			countryCard.appendChild(countryName)
			countryCard.appendChild(countryCapital)

			countriesContainer.appendChild(countryCard)

		}

	})