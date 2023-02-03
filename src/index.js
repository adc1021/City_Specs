import * as chartTools from "chart.js/auto";
import { PolarAreaController, ArcElement } from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import { cityScores } from "./scripts/datafetch";
import { polarChart } from "./scripts/polarChart";
import { barChart } from "./scripts/barChart";
import { initMap } from "./scripts/map"

document.addEventListener("DOMContentLoaded", () => {
  polarChart();
  barChart();
});
