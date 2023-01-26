import { Chart } from 'chart.js'
import { _updateBezierControlPoints } from 'chart.js/helpers'

export const scatterPlot = async() => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = {count: DATA_COUNT, rmin: 1, rmax: 1, min: -100, max: 100};
  let data = {
    datasets: [
      {
        label: 'Houston',
        data: Utils.bubbles(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        yAxisID: 'y'
      }
    ]
  }
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
