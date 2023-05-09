import { wineData } from "./wineData";

// Utility function to calculate class-wise mean of Flavanoids
export const getClasswiseFlavanoidsMean = (alcoholClass) => {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < wineData.length; i++) {
    if (wineData[i].Alcohol === alcoholClass) {
      sum += wineData[i].Flavanoids;
      count++;
    }
  }
  return sum / count;
};

// Utility function to calculate class-wise median of Flavanoids
export const getClasswiseFlavanoidsMedian = (alcoholClass) => {
  let values = [];
  for (let i = 0; i < wineData.length; i++) {
    if (wineData[i].Alcohol === alcoholClass) {
      values.push(wineData[i].Flavanoids);
    }
  }
  values.sort((a, b) => a - b);
  let mid = Math.floor(values.length / 2);
  if (values.length % 2 === 0) {
    return (values[mid - 1] + values[mid]) / 2;
  } else {
    return values[mid];
  }
};

// Utility function to calculate class-wise mode of Flavanoids
export const getClasswiseFlavanoidsMode = (alcoholClass) => {
  let frequency = {};
  let mode = 0;
  let maxFreq = 0;
  for (let i = 0; i < wineData.length; i++) {
    if (wineData[i].Alcohol === alcoholClass) {
      frequency[wineData[i].Flavanoids] =
        (frequency[wineData[i].Flavanoids] || 0) + 1;
      if (frequency[wineData[i].Flavanoids] > maxFreq) {
        mode = wineData[i].Flavanoids;
        maxFreq = frequency[wineData[i].Flavanoids];
      }
    }
  }
  return mode;
};
