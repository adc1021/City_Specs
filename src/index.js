import * as chartTools from 'chart.js/auto'
import { PolarAreaController, ArcElement } from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { cityScores } from './scripts/datafetch';
import { polarChart } from './scripts/polarChart';





  document.addEventListener('DOMContentLoaded', () => {
    polarChart();
    
  })
