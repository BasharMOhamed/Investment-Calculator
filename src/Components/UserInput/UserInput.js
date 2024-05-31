import { useState } from "react";

const UserInput = (props) => {
  const [User, SetUser] = useState({
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 5,
    duration: 10,
  });
  const ChangeHandler = (input, value) => {
    SetUser((PrevState) => {
      return {
        ...PrevState,
        [input]: value,
      };
    });
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    props.OnCalc(User);
  };

  const ResetHandler = () => {
    SetUser({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      duration: "",
    });
    props.OnCalc({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      duration: "",
    });
  };

  return (
    <form className="form" onSubmit={SubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={User["current-savings"]}
            onChange={(event) => {
              ChangeHandler("current-savings", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={User["yearly-contribution"]}
            onChange={(event) => {
              ChangeHandler("yearly-contribution", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={User["expected-return"]}
            onChange={(event) => {
              ChangeHandler("expected-return", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={User["duration"]}
            onChange={(event) => {
              ChangeHandler("duration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={ResetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};
export default UserInput;
