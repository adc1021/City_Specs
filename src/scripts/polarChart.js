import { cityScores } from "./datafetch";
import * as chartTools from 'chart.js/auto'
import { PolarAreaController, ArcElement } from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

export const polarChart = async() => {
  let selectCity = document.getElementById('city-selector') // drop down
  let value = selectCity.value
  let res = await cityScores(value);

  let housing = Math.floor(res.categories[0].score_out_of_10) //4
  let costOfLiving = Math.floor(res.categories[1].score_out_of_10) //5
  let commute = Math.floor(res.categories[5].score_out_of_10)
  let safety = Math.floor(res.categories[7].score_out_of_10)
  let healthcare = Math.floor(res.categories[8].score_out_of_10)
  let education = Math.floor(res.categories[9].score_out_of_10)

  selectCity.addEventListener('change', (async (e) => {
    let res = await cityScores(e.target.value)
  }))
  
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
          label: `${value.toUpperCase()}`,
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
  };
