import { Button } from "../UI/Button";
import { ExpensesForm } from "../ExpensesForm/ExpensesForm";
import { useState } from "react";
export const NewExpense = ({ createExpense }) => {
  const [state, setState] = useState(false);

  //   let state = false;

  function openAndCloseExpensesFormHandler() {
    setState(!state);

    // state = true;
  }

  return (
    <div
      style={{
        backgroundColor: "#AD9BE9",
        width: "780px",
        height: "200px",
        paddingTop: "20px",
        display: "flex",
        justifyContent: "center",
        borderRadius: "12px",
      }}>
      {state ? (
        <ExpensesForm
          onClick={openAndCloseExpensesFormHandler}
          createExpense={createExpense}
        />
      ) : (
        <Button onClick={openAndCloseExpensesFormHandler}>
          ДОБАВИТЬ НОВЫЙ РАСХОД
        </Button>
      )}
    </div>
  ); 
};
