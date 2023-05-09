import React from "react";
import addGammaProperty from "../utils/addGammaProperty";

const GammaTable = ({ wineData }) => {
  const classwiseGamma = addGammaProperty(wineData);

  return (
    <>
      <h1>Class-wise mean, median, mode of “Gamma”</h1>

      <table className="table">
        <tr>
          <td>Measures</td>
          {classwiseGamma.map((row) => (
            <td key={row.class}>Class {row.class}</td>
          ))}
        </tr>
        <tr>
          <td>
            Gamma<br></br> Mean
          </td>
          {classwiseGamma.map((row) => (
            <td key={row.class}>{row.mean}</td>
          ))}
        </tr>
        <tr>
          <td>
            Gamma <br></br> Median
          </td>
          {classwiseGamma.map((row) => (
            <td key={row.class}>{row.median}</td>
          ))}
        </tr>
        <tr>
          <td>
            Gamma <br></br> Mode
          </td>
          {classwiseGamma.map((row) => (
            <td key={row.class}>{row.mode}</td>
          ))}
        </tr>
      </table>
    </>
  );
};

export default GammaTable;
