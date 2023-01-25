import * as chartTools from 'chart.js/auto'
import { PolarAreaController, ArcElement } from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { cityScores } from './scripts/datafetch';

// const chart = new chartTools.Chart(ctx, {
//   type: "polarArea",

// })

(async function() {
  const res = await cityScores('houston');
  const housing = Math.floor(res.categories[0].score_out_of_10)
  const costOfLiving = Math.floor(res.categories[1].score_out_of_10)
  const commute = Math.floor(res.categories[5].score_out_of_10)
  const safety = Math.floor(res.categories[7].score_out_of_10)
  const healthcare = Math.floor(res.categories[8].score_out_of_10)
  const education = Math.floor(res.categories[9].score_out_of_10)
  new chartTools.Chart(
    document.getElementById('acquisitions'),
    {
      type: 'polarArea',
      data: {
        labels: [
          'Housing',
          'Cost of Living',
          'Commute',
          'Safety',
          'Healthcare',
          'Education'
        ],
        datasets: [{
          label: 'Houston',
          data: [housing, costOfLiving, commute, safety, healthcare, education],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
            ' #FFA500'
          ]
        }]
      }
    }
  );
})();


let city = document.getElementById('city-selector')
console.log(city)
// async function main() {
//   use dom.innerText
//   const data = await cityScores('houston');

// }

// main()
