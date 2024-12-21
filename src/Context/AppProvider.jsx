import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

// const expensesData = [
//   {
//     id: 1,
//     date: "2024-01-15",
//     category: "Travel",
//     amount: 2200,
//     description: "Flight booking for international travel",
//   },
//   {
//     id: 2,
//     date: "2024-02-18",
//     category: "Food And Drinks",
//     amount: 250,
//     description: "Dinner at a restaurant",
//   },
//   {
//     id: 3,
//     date: "2024-03-05",
//     category: "Health",
//     amount: 300,
//     description: "Check-up for health insurance",
//   },
//   {
//     id: 4,
//     date: "2024-04-12",
//     category: "Groceries",
//     amount: 810,
//     description: "Grocery run for snacks and drinks",
//   },
//   {
//     id: 5,
//     date: "2024-05-20",
//     category: "Travel",
//     amount: 2500,
//     description: "Booking for a business trip",
//   },
//   {
//     id: 6,
//     date: "2024-06-10",
//     category: "Food And Drinks",
//     amount: 170,
//     description: "Lunch at a food court",
//   },
//   {
//     id: 7,
//     date: "2024-07-01",
//     category: "Health",
//     amount: 400,
//     description: "Vitamins and supplements purchase",
//   },
//   {
//     id: 8,
//     date: "2024-08-14",
//     category: "Groceries",
//     amount: 1050,
//     description: "Groceries for the month",
//   },
//   {
//     id: 9,
//     date: "2024-09-18",
//     category: "Travel",
//     amount: 2900,
//     description: "Luxury vacation booking",
//   },
//   {
//     id: 10,
//     date: "2024-10-05",
//     category: "Food And Drinks",
//     amount: 200,
//     description: "Weekend brunch with friends",
//   },
// ];

const AppProvider = ({ children }) => {
  const [budget, setBudget] = useState(null);
  const [expense, setExpense] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [expenseModalOpen, setExpenseModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editExpenseModalOpen, setEditExpenseModalOpen] = useState(false);

  const [activeButton, setActiveButton] = useState(0);

  const addBudgetNotify = () => toast.success("Added Budget Successfully");
  const addExpenseNotify = () => toast.success("Added Expense Successfully");
  const editExpenseNotify = () => toast.success("Edited Expense Successfully");
  const deleteExpenseNotify = () => toast.success("Deleted Succesfully");

  const handleBudgetChange = (newBudget) => {
    setBudget(newBudget);
  };

  useEffect(() => {
    const calculateExpense = () => {
      const totalExpense = transactions.reduce((accumulator, transaction) => {
        return accumulator + transaction.amount;
      }, 0);
      setExpense(totalExpense);
    };
    calculateExpense();
  }, [transactions]);

  const handleExpenseDataChange = (newExpesne) => {
    const newExpensedata = [...transactions, newExpesne];
    setTransactions(newExpensedata);
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
    setActiveButton(0);
    deleteExpenseNotify();
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleBudgetModalClick = () => {
    setBudgetModalOpen(true);
  };

  const closeBudgetModal = () => {
    setBudgetModalOpen(false);
  };

  const handleExpenseModalClick = () => {
    setExpenseModalOpen(true);
  };

  const closeAddExpenseModal = () => {
    setExpenseModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        budget,
        expense,
        budgetModalOpen,
        expenseModalOpen,
        deleteModalOpen,
        editExpenseModalOpen,
        handleBudgetChange,
        addBudgetNotify,
        closeBudgetModal,
        transactions,
        handleExpenseDataChange,
        addExpenseNotify,
        closeAddExpenseModal,
        closeDeleteModal,
        handleConfirmDelete,
        selectedTransaction,
        handleEditTransaction,
        editModalClose,
        handleEditClick,
        handleBudgetModalClick,
        handleExpenseModalClick,
        handleDeleteClick,
        setSelectedTransaction,
        activeButton,
        setActiveButton,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes;

export default AppProvider;