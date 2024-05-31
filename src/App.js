import { useState } from "react";
import Header from "./Components/Header/Header";
import ResultTable from "./Components/ResultsTable/ResultsTable";
import UserInput from "./Components/UserInput/UserInput";
function App() {
  const [Results, SetResults] = useState([]);
  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    SetResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <UserInput OnCalc={calculateHandler} />
      <ResultTable data={Results} />
    </div>
  );
}

export default App;
