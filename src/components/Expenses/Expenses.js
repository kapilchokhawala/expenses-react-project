import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {
  const [filteredYear, setFilterYear] = useState("2022");

  const filterChangeHandler = selectedYear => setFilterYear(selectedYear);

  const filteredExpenses = props.expenses.filter(
    expense => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <Card classname="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
