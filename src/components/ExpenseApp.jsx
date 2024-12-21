import { useContext } from "react";
import ExpenseComponent from "./common/ExpenseComponent";
import budgetimage from "../assets/budget.svg";
import expenseimage from "../assets/expense.svg";
import coinstack from "../assets/coin-stack.svg";
import ExpenseTable from "./ExpenseTable";
import AddBudgetModal from "./AddBudgetModal";
import AddExpenseModal from "./AddExpenseModal";
import DeleteBudgetModal from "./DeleteBudgetModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditExpenseModal from "./EditExpenseModal";
import { AppContext } from "../Context/AppProvider";

const ExpensesApp = () => {
  const {
    budget,
    expense,
    budgetModalOpen,
    expenseModalOpen,
    deleteModalOpen,
    editExpenseModalOpen,
  } = useContext(AppContext);


  return (
    <>
      <div className="main-container">
        <h1 className="user-heading">Hello, Shriganesh Bhandari</h1>
        <div className="budget-container">
          <ExpenseComponent
            title={"Total Budget"}
            budget={budget}
            image={budgetimage}
          />
          <ExpenseComponent
            title={"Total Expense"}
            budget={expense}
            image={expenseimage}
          />
          <ExpenseComponent
            title={"Remaining Budget"}
            budget={budget - expense}
            image={coinstack}
          />
        </div>
        <ExpenseTable />
        {budgetModalOpen && <AddBudgetModal />}
        {expenseModalOpen && <AddExpenseModal />}
        {deleteModalOpen && <DeleteBudgetModal />}
        {editExpenseModalOpen && <EditExpenseModal />}
      </div>
      <ToastContainer />
    </>
  );
};

export default ExpensesApp;
