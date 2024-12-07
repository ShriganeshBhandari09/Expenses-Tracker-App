import { useEffect, useState } from "react";
import ExpenseComponent from "./common/ExpenseComponent";
import budgetimage from "../assets/budget.svg";
import expenseimage from "../assets/expense.svg";
import ExpenseTable from "./ExpenseTable";
import AddBudgetModal from "./AddBudgetModal";
import AddExpenseModal from "./AddExpenseModal";
import DeleteBudgetModal from "./DeleteBudgetModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditExpenseModal from "./EditExpenseModal";

const expensesData = [
  {
    id: 21,
    date: "2024-11-17",
    category: "Travel",
    amount: 2200,
    description: "Flight booking for international travel",
  },
  {
    id: 22,
    date: "2024-11-18",
    category: "Food And Drinks",
    amount: 250,
    description: "Dinner at a restaurant",
  },
  {
    id: 23,
    date: "2024-11-19",
    category: "Health",
    amount: 300,
    description: "Check-up for health insurance",
  },
  {
    id: 24,
    date: "2024-11-20",
    category: "Groceries",
    amount: 810,
    description: "Grocery run for snacks and drinks",
  },
  {
    id: 25,
    date: "2024-11-21",
    category: "Travel",
    amount: 2500,
    description: "Booking for a business trip",
  },
  {
    id: 26,
    date: "2024-11-22",
    category: "Food And Drinks",
    amount: 170,
    description: "Lunch at a food court",
  },
  {
    id: 27,
    date: "2024-11-23",
    category: "Health",
    amount: 400,
    description: "Vitamins and supplements purchase",
  },
  {
    id: 28,
    date: "2024-11-24",
    category: "Groceries",
    amount: 1050,
    description: "Groceries for the month",
  },
  {
    id: 29,
    date: "2024-11-25",
    category: "Travel",
    amount: 2900,
    description: "Luxury vacation booking",
  },
  {
    id: 30,
    date: "2024-11-26",
    category: "Food And Drinks",
    amount: 200,
    description: "Weekend brunch with friends",
  },
];

const ExpensesApp = () => {
  const [budget, setBudget] = useState(40000);
  const [expense, setExpense] = useState(null);
  const [transactions, setTransactions] = useState(expensesData);
  const [BudgetModalOpen, setBudgetModalOpen] = useState(false);
  const [ExpenseModalOpen, setExpenseModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [EditExpenseModalOpen, setEditExpenseModalOpen] = useState(false);

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleBudgetChange = (newBudget) => {
    setBudget(newBudget);
  };

  const handleExpenseDataChange = (newExpesne) => {
    const newExpensedata = [...transactions, newExpesne];
    setTransactions(newExpensedata);
  };

  const handleBudgetModalChange = () => {
    if (BudgetModalOpen) {
      setBudgetModalOpen(false);
    } else {
      setBudgetModalOpen(true);
    }
  };

  const handleExpenseModalChange = () => {
    // setIsOpen(newOpen);
    // console.log(BudgetModalOpen);
    if (ExpenseModalOpen) {
      setExpenseModalOpen(false);
    } else {
      setExpenseModalOpen(true);
    }
  };

  const handleEditClick = (expense) => {
    setSelectedTransaction(expense);
    setEditExpenseModalOpen(true);
  };

  const EditModalClose = () => {
    setEditExpenseModalOpen(false);
  };

  const handleEditTransaction = (expense) => {
    let editedTransaction = transactions.map((transaction) => {
      if (transaction.id === selectedTransaction.id) {
        return expense;
      } else {
        return transaction;
      }
    });
    setTransactions(editedTransaction);
    editExpenseNotify();
  };

  const handleDeleteClick = (expense) => {
    setSelectedTransaction(expense);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter(
        (expense) => expense.id !== selectedTransaction.id
      )
    );
    setDeleteModalOpen(false);
    deleteExpenseNotify();
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const addBudgetNotify = () => toast.success("Added Budget Successfully");
  const addExpenseNotify = () => toast.success("Added Expense Successfully");
  const editExpenseNotify = () => toast.success("Edited Expense Successfully");
  const deleteExpenseNotify = () => toast.success("Deleted Succesfully");

  useEffect(() => {
    const calculateExpense = () => {
      const totalExpense = transactions.reduce((accumulator, transaction) => {
        return accumulator + transaction.amount;
      }, 0);
      setExpense(totalExpense);
    };
    calculateExpense();
  }, [transactions]);

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
            image={budgetimage}
          />
        </div>
        <ExpenseTable
          transactions={transactions}
          handleBudgetModalChange={handleBudgetModalChange}
          handleExpenseModalChange={handleExpenseModalChange}
          handleDeleteClick={handleDeleteClick}
          handleEditClick={handleEditClick}
        />
        {BudgetModalOpen && (
          <AddBudgetModal
            budget={budget}
            handleBudgetChange={handleBudgetChange}
            open={BudgetModalOpen}
            handleBudgetModalChange={handleBudgetModalChange}
            notification={addBudgetNotify}
          />
        )}
        {ExpenseModalOpen && (
          <AddExpenseModal
            expenseData={transactions}
            handleExpenseData={handleExpenseDataChange}
            open={ExpenseModalOpen}
            handleExpenseModalChange={handleExpenseModalChange}
            notification={addExpenseNotify}
          />
        )}
        {deleteModalOpen && (
          <DeleteBudgetModal
            transactions={transactions}
            deleteModalOpen={deleteModalOpen}
            handleDeleteModalChange={handleDeleteClick}
            onClose={closeDeleteModal}
            onConfirm={handleConfirmDelete}
          />
        )}
        {EditExpenseModalOpen && (
          <EditExpenseModal
            onClose={EditModalClose}
            selectedTransaction={selectedTransaction}
            handleEditTransaction={handleEditTransaction}
          />
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default ExpensesApp;
