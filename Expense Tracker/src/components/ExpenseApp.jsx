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
    id: 1,
    date: "2024-11-01",
    category: "Health",
    amount: 500,
    description: "Doctor's appointment fee",
  },
  {
    id: 2,
    date: "2024-11-02",
    category: "Groceries",
    amount: 750,
    description: "Weekly grocery shopping",
  },
  {
    id: 3,
    date: "2024-11-03",
    category: "Travel",
    amount: 1200,
    description: "Bus ticket for intercity travel",
  },
  {
    id: 4,
    date: "2024-11-04",
    category: "Food And Drinks",
    amount: 180,
    description: "Dinner at a local restaurant",
  },
  {
    id: 5,
    date: "2024-11-05",
    category: "Health",
    amount: 350,
    description: "Pharmacy purchase",
  },
  {
    id: 6,
    date: "2024-11-06",
    category: "Groceries",
    amount: 910,
    description: "Monthly household supplies",
  },
  {
    id: 7,
    date: "2024-11-07",
    category: "Travel",
    amount: 3000,
    description: "Flight booking",
  },
  {
    id: 8,
    date: "2024-11-08",
    category: "Food And Drinks",
    amount: 120,
    description: "Morning coffee and pastry",
  },
  {
    id: 9,
    date: "2024-11-09",
    category: "Health",
    amount: 200,
    description: "Yoga class",
  },
  {
    id: 10,
    date: "2024-11-10",
    category: "Food And Drinks",
    amount: 90,
    description: "Evening snacks",
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
