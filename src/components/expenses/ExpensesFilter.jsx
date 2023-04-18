import React from "react";

import "./ExpensesFilter.css";

export function ExpensesFilter({ value, onChange,expenses,setExpenses }) {

  const vozrastani = () => {
    setExpenses([
      ...expenses.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      }),
    ]);
  };
  const ubyvani = () => {
    setExpenses([
      ...expenses.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      }),
    ]);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter_button">
        <button onClick={vozrastani}>По возрастанию</button>
        <button onClick={ubyvani}> По убыванию</button>
      </div>
      <div className="expenses-filter_control">
        <select onChange={onChange} value={value}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020 </option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
