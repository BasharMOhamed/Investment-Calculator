const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const ResultTable = (props) => {
  let TotalInterest = 0;
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((raw) => {
          TotalInterest += Number(raw.yearlyInterest);
          return (
            <tr>
              <td>{raw.year}</td>
              <td>{formatter.format(raw.savingsEndOfYear)}</td>
              <td>{formatter.format(raw.yearlyInterest)}</td>
              <td>{formatter.format(TotalInterest)}</td>
              <td>{formatter.format(raw.savingsEndOfYear - TotalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ResultTable;
