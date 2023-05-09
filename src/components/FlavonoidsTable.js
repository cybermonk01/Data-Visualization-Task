import React from "react";
import {
  getClasswiseFlavanoidsMean,
  getClasswiseFlavanoidsMedian,
  getClasswiseFlavanoidsMode,
} from "../utils/MeasuresOfCentralTendency"; //utitlity function of mean, median and mode

const FlavonoidsTable = ({ classes }) => {
  return (
    <>
      <h1>Class-wise mean, median, mode of “Flavanoids”</h1>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>Measure</th>
            {classes.map((cls, index) => (
              <th key={index}> Class {cls}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FlavonoidsMean</td>
            {classes.map((cls, index) => (
              <td key={index}>{getClasswiseFlavanoidsMean(cls).toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Flavonoids Median</td>
            {classes.map((cls, index) => (
              <td key={index}>
                {getClasswiseFlavanoidsMedian(cls).toFixed(3)}
              </td>
            ))}
          </tr>
          <tr>
            <td>Flavonoids Mode</td>
            {classes.map((cls, index) => (
              <td key={index}>{getClasswiseFlavanoidsMode(cls)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default FlavonoidsTable;
