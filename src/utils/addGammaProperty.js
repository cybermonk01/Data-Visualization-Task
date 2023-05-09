function addGammaProperty(wineData) {
  // Calculate Gamma for each point in the dataset
  wineData.forEach((item) => {
    const gamma = (item.Ash * item.Hue) / item.Magnesium;
    item.Gamma = gamma;
  });

  // Get an array of all the unique classes
  const uniqueClasses = Array.from(
    new Set(wineData.map((item) => item.Alcohol))
  );

  // Calculate the class-wise mean, median, and mode of Gamma
  const classwiseGamma = uniqueClasses.map((cls) => {
    const gammaValues = wineData
      .filter((item) => item.Alcohol === cls)
      .map((item) => item.Gamma);
    const mean = getMean(gammaValues);
    const median = getMedian(gammaValues);
    const mode = getMode(gammaValues);
    return {
      class: cls,
      mean: mean.toFixed(3),
      median: median.toFixed(3),
      mode: mode.toFixed(3),
    };
  });

  return classwiseGamma;
}

// Utility function to calculate mean
function getMean(values) {
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

// Utility function to calculate median
function getMedian(values) {
  values.sort((a, b) => a - b);
  const mid = Math.floor(values.length / 2);
  return values.length % 2 !== 0
    ? values[mid]
    : (values[mid - 1] + values[mid]) / 2;
}

// Utility function to calculate mode
function getMode(values) {
  const freqMap = new Map();
  values.forEach((val) => {
    if (freqMap.has(val)) {
      freqMap.set(val, freqMap.get(val) + 1);
    } else {
      freqMap.set(val, 1);
    }
  });
  let mode;
  let maxFreq = 0;
  for (const [val, freq] of freqMap.entries()) {
    if (freq > maxFreq) {
      maxFreq = freq;
      mode = val;
    }
  }
  return mode;
}

export default addGammaProperty;
