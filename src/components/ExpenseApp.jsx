import { useEffect, useState } from "react";
import ExpenseComponent from "./common/ExpenseComponent";
import budgetimage from "../assets/budget.svg";
import expenseimage from "../assets/expense.svg";
import coinstack from "../assets/coin-stack.svg"
import ExpenseTable from "./ExpenseTable";
import AddBudgetModal from "./AddBudgetModal";
import AddExpenseModal from "./AddExpenseModal";
import DeleteBudgetModal from "./DeleteBudgetModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditExpenseModal from "./EditExpenseModal";

 const expensesData = [
  {
    id: 1,
    date: "2024-01-15",
    category: "Travel",
    amount: 2200,
    description: "Flight booking for international travel",
  },
  {
    id: 2,
    date: "2024-02-18",
    category: "Food And Drinks",
    amount: 250,
    description: "Dinner at a restaurant",
  },
  {
    id: 3,
    date: "2024-03-05",
    category: "Health",
    amount: 300,
    description: "Check-up for health insurance",
  },
  {
    id: 4,
    date: "2024-04-12",
    category: "Groceries",
    amount: 810,
    description: "Grocery run for snacks and drinks",
  },
  {
    id: 5,
    date: "2024-05-20",
    category: "Travel",
    amount: 2500,
    description: "Booking for a business trip",
  },
  {
    id: 6,
    date: "2024-06-10",
    category: "Food And Drinks",
    amount: 170,
    description: "Lunch at a food court",
  },
  {
    id: 7,
    date: "2024-07-01",
    category: "Health",
    amount: 400,
    description: "Vitamins and supplements purchase",
  },
  {
    id: 8,
    date: "2024-08-14",
    category: "Groceries",
    amount: 1050,
    description: "Groceries for the month",
  },
  {
    id: 9,
    date: "2024-09-18",
    category: "Travel",
    amount: 2900,
    description: "Luxury vacation booking",
  },
  {
    id: 10,
    date: "2024-10-05",
    category: "Food And Drinks",
    amount: 200,
    description: "Weekend brunch with friends",
  },
];

const ExpensesApp = () => {
  const [budget, setBudget] = useState(40000);
  const [expense, setExpense] = useState(null);
  const [transactions, setTransactions] = useState(expensesData);
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [expenseModalOpen, setExpenseModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editExpenseModalOpen, setEditExpenseModalOpen] = useState(false);

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleBudgetChange = (newBudget) => {
    setBudget(newBudget);
  };

  const handleExpenseDataChange = (newExpesne) => {
    const newExpensedata = [...transactions, newExpesne];
    setTransactions(newExpensedata);
  };

  const handleBudgetModalChange = () => {
    if (budgetModalOpen) {
      setBudgetModalOpen(false);
    } else {
      setBudgetModalOpen(true);
    }
  };

  const handleExpenseModalChange = () => {
    if (expenseModalOpen) {
      setExpenseModalOpen(false);
    } else {
      setExpenseModalOpen(true);
    }
  };

  const handleEditClick = (expense) => {
    setSelectedTransaction(expense);
    setEditExpenseModalOpen(true);
  };

  const editModalClose = () => {
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
            image={coinstack}
          />
        </div>
        <ExpenseTable
          transactions={transactions}
          handleBudgetModalChange={handleBudgetModalChange}
          handleExpenseModalChange={handleExpenseModalChange}
          handleDeleteClick={handleDeleteClick}
          handleEditClick={handleEditClick}
        />
        {budgetModalOpen && (
          <AddBudgetModal
            budget={budget}
            handleBudgetChange={handleBudgetChange}
            open={budgetModalOpen}
            handleBudgetModalChange={handleBudgetModalChange}
            notification={addBudgetNotify}
          />
        )}
        {expenseModalOpen && (
          <AddExpenseModal
            expenseData={transactions}
            handleExpenseData={handleExpenseDataChange}
            open={expenseModalOpen}
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
        {editExpenseModalOpen && (
          <EditExpenseModal
            onClose={editModalClose}
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
