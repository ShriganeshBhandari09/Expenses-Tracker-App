import { useState } from "react";
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

const ExpenseApp = () => {
  const [budget] = useState(0);
  const [expense] = useState(500);

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
          <PrimaryButton buttonname="Add Budget" image={addimage} />
          <PrimaryButton buttonname="Add Expense" image={addimage} />
        </div>
        <ExpenseTable />
        <div className="opacity"></div>
        <div className="add-budget-input-container">
          <span className="close-button">&times;</span>
          <h2>Add Budget</h2>
          <div>
            <label htmlFor="amount">Enter Amount</label>
            <input
              type="number"
              name="amount"
              id=""
              placeholder="Enter Amount"
              onChange={(e) => e.target.value}
            />
          </div>
          <button className="primary-btn">Submit Budget</button>
        </div>
        {/* <div className="add-expense-input-container">
                  <span className="close-button">&times;</span>

          <h2>Add Expense</h2>
          <div>
            <label htmlFor="expense-name">Enter Expense Name</label>
            <input
              type="text"
              name=""
              id="expense-name"
              placeholder="Enter Expense Name"
            />
          </div>
          <div>
            <label htmlFor="amount">Enter Amount</label>
            <input type="number" name="" id="" placeholder="Enter Amount" />
          </div>
          <button className="primary-btn">Add Expense</button>
        </div> */}
      </div>
    </>
  );
};

export default ExpenseApp;
