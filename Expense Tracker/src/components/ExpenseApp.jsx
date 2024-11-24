import { useEffect, useState } from "react";
import Budget from "./common/Budget";
import Navbar from "./Navbar";
import ExpenseTable from "./ExpenseTable";

import budgetimage from "../assets/budget.svg";
import expenseimage from "../assets/expense.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Data = [
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

const ExpenseApp = () => {
  const [budget, setBudget] = useState(40000);
  const [expense, setExpense] = useState(null);
  const [expenseData, setExpenseData] = useState(Data);
  // const [BudgetModalOpen, setBudgetModalOpen] = useState(false);
  // const [ExpenseModalOpen, setExpenseModalOpen] = useState(false);
  // const [category, setcategory] = useState("");
  // const [searchInput, setsearchInput] = useState("");
  // const [filteredTransactions, setFilteredTransactions] = useState(expenseData);

  const handleExpenseDataChange = (newExpesne) => {
    const newExpensedata = [...expenseData, newExpesne];
    setExpenseData(newExpensedata);
  };

  useEffect(() => {
    const calculateExpense = () => {
      // console.log(expenseData);
      let result = expenseData.reduce((acc, item) => {
        return acc + item.amount;
      }, 0);
      setExpense(result);
    };
    calculateExpense();
  }, [expenseData]);

  // const calculateRemainingBudget = (budget, expense) =>{
  //   console.log(budget)
  //   return parseFloat(budget - expense)
  // }

  const handleBudgetChange = (newBudget) => {
    setBudget(newBudget);
  };

  // const handleBudgetModalChange = () => {
  //   // setIsOpen(newOpen);
  //   // console.log(BudgetModalOpen);
  //   if (BudgetModalOpen) {
  //     setBudgetModalOpen(false);
  //   } else {
  //     setBudgetModalOpen(true);
  //   }
  // };

  // const handleExpenseModalChange = () => {
  //   // setIsOpen(newOpen);
  //   // console.log(BudgetModalOpen);
  //   if (ExpenseModalOpen) {
  //     setExpenseModalOpen(false);
  //   } else {
  //     setExpenseModalOpen(true);
  //   }
  // };

  const handleExpenseDeleteChange = (newExpenseData) => {
    setExpenseData(newExpenseData);
  };

  // const handleExpenseDataCategoryChange = (newExpenseData) => {
  //   setExpenseData(newExpenseData);
  // };

  // const handleExpenseData = (newData) => {
  //   const newExpenseData = [...expenseData];
  //   newExpenseData.push(newData);
  //   setExpenseData(newExpenseData);
  // };

  const addBudgetNotify = () => toast.success("Added Budget Successfully");
  const addExpenseNotify = () => toast.success("Added Expense Successfully");
  const delteNotify = () => toast.success("Deleted Succesfully");

  return (
    <>
      <Navbar />
      <div className="main-container">
        <h1 className="user-heading">Hello, Shriganesh</h1>
        <div className="budget-container">
          <Budget title="Your Budget" budget={budget} image={budgetimage} />
          <Budget title="Total Expense" budget={expense} image={expenseimage} />
          <Budget
            title="Remaining Budget"
            budget={budget - expense}
            image={expenseimage}
          />
        </div>
        {/* {budget < expense ? <div className="warning"><h2>Please manage expenses within the budget.</h2></div> : null} */}
        <ExpenseTable
          expenseData={expenseData}
          budget={budget}
          handleBudgetChange={handleBudgetChange}
          addBudgetNotify={addBudgetNotify}
          handleExpenseDeleteChange={handleExpenseDeleteChange}
          handleExpenseData={handleExpenseDataChange}
          delteNotify={delteNotify}
          addNotify={addExpenseNotify}
        />
      </div>
      <ToastContainer position="top-center" />
    </>
  );
};

export default ExpenseApp;
