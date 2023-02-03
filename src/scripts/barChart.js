import { cityScores } from "./datafetch";
import * as chartTools from 'chart.js/auto'
import { PolarAreaController, ArcElement } from 'chart.js/auto';
import * as data from '../housing_data.json'


export const barChart = async() => {
  const ctx = document.getElementById('bar-chart')

  new chartTools.Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Atlanta', 'Albuquerque', 'Charleston', 'Chicago','Houston',
      'Los Angeles', 'Miami', 'New York', 'Richmond', 'Seattle'],
      datasets: [{
        label: 'Listing Price',
        data: [data.altanta.price, data.albuquerque.price,
        data.charleston.price, data.chicago.price, data.houston.price,
          data.la.price, data.miami.price, data.newYork.price,
          data.richmond.price, data.seattle.price],
        borderWidth: 1,
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)',
      ],
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
