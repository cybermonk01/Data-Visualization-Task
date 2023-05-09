import "./App.css";
import FlavonoidsTable from "./components/FlavonoidsTable";
import GammaTable from "./components/GammaTable";
import { wineData } from "./utils/wineData";

function App() {
  // const classes = wineData.map((item) => {
  //   console.log(item.Alcohol);

  //   return item.Alcohol;
  // });                                  //was used to get alcohol classs but was not distinct
  const uniqueClasses = [...new Set(wineData.map((item) => item.Alcohol))]; //this will map the wineData to get alcohol class and new set will make it distinct and will be spread to make available as an array to unique class.

  return (
    <div className="App">
      <FlavonoidsTable classes={uniqueClasses} />
      <GammaTable wineData={wineData} />
    </div>
  );
}

export default App;
