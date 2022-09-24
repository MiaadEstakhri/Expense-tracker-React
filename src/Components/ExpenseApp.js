import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  const addTransaction = (formValues) => {
    const data = { ...formValues, id: Date.now() };
    setTransactions([...transactions, data]);
  };

  return (
    <section className="container">
      <OverViewComponent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      <TransActionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
