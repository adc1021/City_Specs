import { cityScores } from "./datafetch";
import * as chartTools from 'chart.js/auto'
import { PolarAreaController, ArcElement } from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

export const polarChart = async() => {
  let selectCity = document.getElementById('city-selector') // drop down
  let value = selectCity.value
  console.log(value)
  let res = await cityScores(value);
  let _res = res
  selectCity.addEventListener('change', (async (e) => {
    _res = await cityScores(e.target.value)
    let canvasTag = document.getElementById('acquisitions')
    canvasTag.remove()
    generateChart(_res, e.target.value)
  }))

  generateChart(_res, value)
  };


  const generateChart = (data, value) => {
    let housing = Math.floor(data.categories[0].score_out_of_10) //4
    let costOfLiving = Math.floor(data.categories[1].score_out_of_10) //5
    let commute = Math.floor(data.categories[5].score_out_of_10)
    let safety = Math.floor(data.categories[7].score_out_of_10)
    let healthcare = Math.floor(data.categories[8].score_out_of_10)
    let education = Math.floor(data.categories[9].score_out_of_10)

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'acquisitions')
    const polarDiv = document.getElementById('polar-container')
    const firstChild = document.getElementById('city-selector')
    // polarDiv.appendChild(canvas)
    polarDiv.insertBefore(canvas, firstChild)
    let info = { housing, costOfLiving, commute, safety, healthcare, education }

     let chart = new chartTools.Chart(
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
              'rgb(255, 99, 132, .5)',
              'rgb(75, 192, 192, .5)',
              'rgb(255, 205, 86, .5)',
              'rgb(201, 203, 207, .5)',
              'rgb(54, 162, 235, .5)',
              'rgb(255, 160, 0, .5)',
              'rgb(15, 63, 3, .5)'
            ]
          }]
        }
      }
      )

        // Functions to open and close a modal
        let modalButton = document.getElementById('modal-trigger')
        let deleteButton = document.getElementById('delete')

        modalButton.addEventListener('click', () => {
          let intro = document.getElementById('intro-modal')
          intro.classList.add('is-active')
        })

        deleteButton.addEventListener('click', () => {
          let intro = document.getElementById('intro-modal')
          intro.classList.remove('is-active')
        })

        // Add a click event on buttons to open a specific

  }
