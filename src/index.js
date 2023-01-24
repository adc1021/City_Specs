import Example from "./scripts/example";

const handlErrors = (err) => {
  let errors = []
  // debugger

  err.array.forEach(element => {
    errors.push(element)
  });

  return errors
}


const cityScores = async (city) => {
  // debugger
  await fetch(`https://api.teleport.org/api/urban_areas/slug%3A${city}/scores/`)
  .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw response;
          }
        })
  .then((data) => {
    console.log(data)
    const categories = data.categories
    console.log(categories)
    return categories
  })
  .catch((errorResponse) => console.error(errorResponse))
}

// cityScores('houston')

// cityScores('jacksonville')

// cityScores('new-york')

// cityScores('los-angeles')

// cityScores('richmond')

// cityScores('charleston')
// cityScores('atlanta')
// cityScores('new-orleans')
// cityScores('miami')
// cityScores('boston')
// cityScores('phoenix')
// cityScores('albuquerque')
// cityScores('seattle')
// cityScores('portland-or')
// cityScores('boise')
// cityScores('chicago')
// cityScores('memphis')
// cityScores('louisville')
// cityScores('san-diego')
// cityScores('des-moines')
// cityScores('omaha')
// cityScores('st-louis')
// cityScores('detroit')
// cityScores('denver')
// cityScores('denver')
// cityScores('columbus')

