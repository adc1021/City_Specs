import { async } from "regenerator-runtime";

export const cityScores = async (city) => {
  try {
    const res = await fetch(`https://api.teleport.org/api/urban_areas/slug%3A${city}/scores/`)
    const data = await res.json()
    return data
  } catch(err) {
    console.log(err)
  }
};

// export let houston = cityScores('houston')

// export let jacksonville = cityScores('jacksonville')

// export let newYork = cityScores('new-york')

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
