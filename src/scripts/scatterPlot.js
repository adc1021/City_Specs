import { Chart } from 'chart.js'
import { _updateBezierControlPoints } from 'chart.js/helpers'

export const scatterPlot = async() => {
  new Chart(
    document.getElementById('scatter-plot'),
    {
      type: 'scatter',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Housing in the United States'
          }
        },
        scales: {
          y: {
            type: 'linear',
            position: 'left',
            ticks: {
              color: 'rgb(255, 99, 132)'
            }
          },
          y2: {
            type: 'linear',
            position: 'right',
            reverse: true,
            ticks: {
              color: 'rgb(0, 0, 255)'
            },
            grid: {
              drawOnChartArea: false 
            }
          }
        }
      }
  }
  )
}
