import { useEffect, useState } from "react";
import Budget from "./common/Budget";
import Navbar from "./Navbar";
import SecondaryButton from "./common/SecondaryButton";
import ExpenseTable from "./ExpenseTable";

import budgetimage from "../assets/budget.svg";
import expenseimage from "../assets/expense.svg";
import foodimage from "../assets/food.svg";
import groceriesimage from "../assets/groceries.svg";
import healthimage from "../assets/health.svg";
import travelimage from "../assets/travel.svg";
import searchimage from "../assets/search.svg";
import addimage from "../assets/add.svg";
import PrimaryButton from "./common/PrimaryButton";
import AddBudgetModal from "./AddBudgetModal";
import AddExpenseModal from "./AddExpenseModal";

/*const Data = [
  {
    id: 1,
    date: "2024-11-01",
    category: "Health",
    amount: 50.0,
    description: "Doctor's appointment fee",
  },
  {
    id: 2,
    date: "2024-11-02",
    category: "Groceries",
    amount: 75.3,
    description: "Weekly grocery shopping",
  },
  {
    id: 3,
    date: "2024-11-03",
    category: "Travel",
    amount: 120.0,
    description: "Bus ticket for intercity travel",
  },
  {
    id: 4,
    date: "2024-11-04",
    category: "Foods & Drinks",
    amount: 18.5,
    description: "Dinner at a local restaurant",
  },
  {
    id: 5,
    date: "2024-11-05",
    category: "Health",
    amount: 35.0,
    description: "Pharmacy purchase",
  },
  {
    id: 6,
    date: "2024-11-06",
    category: "Groceries",
    amount: 90.75,
    description: "Monthly household supplies",
  },
  {
    id: 7,
    date: "2024-11-07",
    category: "Travel",
    amount: 300.0,
    description: "Flight booking",
  },
  {
    id: 8,
    date: "2024-11-08",
    category: "Foods & Drinks",
    amount: 12.0,
    description: "Morning coffee and pastry",
  },
  {
    id: 9,
    date: "2024-11-09",
    category: "Health",
    amount: 20.0,
    description: "Yoga class",
  },
  {
    id: 10,
    date: "2024-11-10",
    category: "Foods & Drinks",
    amount: 8.5,
    description: "Evening snacks",
  },

];*/


const ExpenseApp = () => {
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState(0);
  const [expenseData, setExpenseData] = useState([]);
  const [BudgetModalOpen, setBudgetModalOpen] = useState(false);
  const [ExpenseModalOpen, setExpenseModalOpen] = useState(false);

  const handleExpenseDataChange = (newExpesne) => {
    const newExpensedata = [...expenseData, newExpesne];
    setExpenseData(newExpensedata);
  };

  useEffect(() => {
    const calculateExpense = () => {
      console.log(expenseData);
      let result = expenseData.reduce((acc, item) => {
        return acc + item.amount;
      }, 0);
      setExpense(result);
    };
    calculateExpense();
  }, [expenseData]);

  const handleBudgetChange = (newBudget) => {
    setBudget(newBudget);
  };

  const handleBudgetModalChange = () => {
    // setIsOpen(newOpen);
    // console.log(BudgetModalOpen);
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
  // const handleExpenseData = (newData) => {
  //   const newExpenseData = [...expenseData];
  //   newExpenseData.push(newData);
  //   setExpenseData(newExpenseData);
  // };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <h1 className="user-heading">Hello, Shriganesh</h1>
        <div className="budget-container">
          <Budget title="Your Budget" budget={budget} image={budgetimage} />
          <Budget title="Total Expense" budget={expense} image={expenseimage} />
        </div>
        <div className="button-container">
          <div className="search-container">
            <img src={searchimage} alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <SecondaryButton buttonname="Food And Drinks" image={foodimage} />
          <SecondaryButton buttonname="Groceries" image={groceriesimage} />
          <SecondaryButton buttonname="Travel" image={healthimage} />
          <SecondaryButton buttonname="Health" image={travelimage} />
          <PrimaryButton
            buttonname="Add Budget"
            image={addimage}
            handelModalChange={handleBudgetModalChange}
          />
          <PrimaryButton
            buttonname="Add Expense"
            image={addimage}
            handelModalChange={handleExpenseModalChange}
          />
        </div>
        <ExpenseTable expenseData={expenseData} />
        {BudgetModalOpen && (
          <AddBudgetModal
            budget={budget}
            handleBudgetChange={handleBudgetChange}
            open={BudgetModalOpen}
            handleBudgetModalChange={handleBudgetModalChange}
          />
        )}
        {ExpenseModalOpen && (
          <AddExpenseModal
            expenseData={expenseData}
            handleExpenseData={handleExpenseDataChange}
            open={ExpenseModalOpen}
            handleExpenseModalChange={handleExpenseModalChange}
          />
        )}
      </div>
    </>
  );
};

export default ExpenseApp;
