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
    debugger
  })
}

console.log(cityScores('portland-me'))

console.log(cityScores('jacksonville'))

// console.log(cityScores('chuckville'))
