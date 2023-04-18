import { ExpensesList } from "../ExpensesList/ExpensesList";
import { ExpensesFilter } from "./ExpensesFilter";
import { useState } from "react";
import {Chart} from "../Chart/Chart.jsx"

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const getSelectValue = (event) => {
    setSelectedYear(event.target.value);
  };
  const filteredYear = props.expenses.filter((element) => {
    const stringifiedYear = new Date(element.date).getFullYear().toString();

    return stringifiedYear === selectedYear;
  });

  return (
    <div className="ata"> 
      <ExpensesFilter 
      expenses={props.expenses}
      setExpenses={props.setExpenses}
      onChange={getSelectValue}
      value={selectedYear}
       />
<Chart items={filteredYear} />

      {filteredYear.map((el,index) => {
        return <ExpensesList el={el} key={index} />
      })}
    </div>
  );
};
