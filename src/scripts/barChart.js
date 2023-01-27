import { cityScores } from "./datafetch";
import * as chartTools from 'chart.js/auto'
import { PolarAreaController, ArcElement } from 'chart.js/auto';
import * as data from '../housing_data.json'


export const barChart = async() => {
  const ctx = document.getElementById('bar-chart')

  new chartTools.Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Houston', 'New York', 'Miami', 'Richmond','Los Angeles', 'Charleston', 'Atlanta', 'Seattle'],
      datasets: [{
        label: 'Listing Price',
        data: [data.houstonHousing.price, data.nyHousing.price, data.miamiHousing.price, data.richmondHousing.price, data.laHousing.price, data.charlestonHousing.price, data.altantaHousing.price, data.seattleHousing.price],
        borderWidth: 1
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  })
}
