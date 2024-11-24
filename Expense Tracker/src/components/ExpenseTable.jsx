import { useEffect, useState } from "react";
import deleteimage from "../assets/delete.svg";
import editimage from "../assets/edit.svg";
import DeleteBudgetModal from "./DeleteBudgetModal";

import expenses from "../assets/expenses.svg";

import searchimage from "../assets/search.svg";
import foodimage from "../assets/food.svg";
import groceriesimage from "../assets/groceries.svg";
import healthimage from "../assets/health.svg";
import travelimage from "../assets/travel.svg";
import addimage from "../assets/add.svg";
import SecondaryButton from "./common/SecondaryButton";
import PrimaryButton from "./common/PrimaryButton";
import AddBudgetModal from "./AddBudgetModal";
import AddExpenseModal from "./AddExpenseModal";

const ExpenseTable = ({
  expenseData,
  handleExpenseDeleteChange,
  delteNotify,
  budget,
  handleBudgetChange,
  addBudgetNotify,
  handleExpenseData,
  addNotify,
}) => {
  // const expenseData = props.expenseData;

  const [BudgetModalOpen, setBudgetModalOpen] = useState(false);
  const [ExpenseModalOpen, setExpenseModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [searchInput, setsearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(expenseData);

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

  const handleDeleteModalChange = () => {
    // setIsOpen(newOpen);
    // console.log(BudgetModalOpen);
    if (deleteModalOpen) {
      setDeleteModalOpen(false);
    } else {
      setDeleteModalOpen(true);
    }
  };

  const handleCategoryChange = (buttonname) => {
    const expensesData = [...expenseData];
    const sortedExpenses = expensesData.filter((item) => {
      return item.category === buttonname;
    });
    setFilteredTransactions(sortedExpenses);
  };

  const handleSearchInputChange = (searchInput) => {
    if (!searchInput || !searchInput.trim().length) {
      setFilteredTransactions(expenseData);
      return;
    }
    const filteredData = [...filteredTransactions];
    const sortedExpenses = filteredData.filter((item) => {
      return item.description
        .toLowerCase()
        .includes(searchInput.toLowerCase().trim());
    });
    setFilteredTransactions(sortedExpenses);
  };

  useEffect(() => {
    handleSearchInputChange(searchInput);
  }, [expenseData, searchInput]);

  return (
    <>
      <div className="button-container">
        <div className="search-container">
          {searchimage ? <img src={searchimage} alt="" /> : null}
          <input
            type="text"
            placeholder="Search"
            id="search"
            value={searchInput}
            onChange={(e) => setsearchInput(e.target.value)}
          />
        </div>
        <SecondaryButton
          buttonname="All Expenses"
          image={expenses}
          // expenseData={expenseData}
          // handleExpenseDataCategoryChange = {handleExpenseDataCategoryChange}
          // handleCategoryChange={handleCategoryChange}
        />
        <SecondaryButton
          buttonname="Food And Drinks"
          image={foodimage}
          // handleExpenseDataCategoryChange={handleExpenseDataCategoryChange}
          handleCategoryChange={handleCategoryChange}
        />
        <SecondaryButton
          buttonname="Groceries"
          image={groceriesimage}
          // expenseData={expenseData}
          // handleExpenseDataCategoryChange={handleExpenseDataCategoryChange}
          handleCategoryChange={handleCategoryChange}
        />
        <SecondaryButton
          buttonname="Travel"
          image={travelimage}
          expenseData={expenseData}
          // handleExpenseDataCategoryChange={handleExpenseDataCategoryChange}
          handleCategoryChange={handleCategoryChange}
        />
        <SecondaryButton
          buttonname="Health"
          image={healthimage}
          expenseData={expenseData}
          // handleExpenseDataCategoryChange={handleExpenseDataCategoryChange}
          handleCategoryChange={handleCategoryChange}
        />
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
      {filteredTransactions?.length > 0 ? (
        <div className="expense-container">
          {/* <div className="expense-container-heading">
          <p>Sr.</p>
          <p>Expense</p>
          <p>Amount</p>
          <p>Edit/Delete</p>
        </div>
        <div className="expense-container-data">
          <div>
          <p>1</p>
          <p>Expense on Pizza</p>
          <p>200</p>
          <p><button type="button">Edit</button> <button type="button">Delete</button></p>
          </div>
          <div>
          <p>1</p>
          <p>Expense on Pizza</p>
          <p>200</p>
          <p><button type="button">Edit</button> <button type="button">Delete</button></p>
          </div>
          <div>
          <p>1</p>
          <p>Expense on Pizza</p>
          <p>200</p>
          <p><button type="button">Edit</button> <button type="button">Delete</button></p>
          </div>          <div>
          <p>1</p>
          <p>Expense on Pizza</p>
          <p>200</p>
          <p><button type="button">Edit</button> <button type="button">Delete</button></p>
          </div>          <div>
          <p>1</p>
          <p>Expense on Pizza</p>
          <p>200</p>
          <p><button type="button">Edit</button> <button type="button">Delete</button></p>
          </div>  
        </div> */}
          <table>
            <thead>
              <tr>
                <th className="table-header">Sr.</th>
                {/* <th className="table-header">Date</th> */}
                <th className="table-header">Expense</th>
                <th className="table-header">Category</th>
                <th className="table-header">Amount</th>
                <th className="table-header">Edit / Delete</th>
              </tr>
            </thead>
            <tbody className="table-data">
              {filteredTransactions.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    {/* <td>{item.date.split("-").reverse().join("-")}</td> */}
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{parseFloat(item.amount).toLocaleString()}</td>
                    <td>
                      <div className="table-button-div">
                        <button type="button" className="table-button">
                          <img src={editimage} alt="" />
                          Edit
                        </button>
                        <button
                          type="button"
                          className="table-button"
                          onClick={handleDeleteModalChange}
                        >
                          <img src={deleteimage} alt="" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="warning">Add Your Expenses!!</h2>
      )}
      {BudgetModalOpen && (
        <AddBudgetModal
          budget={budget}
          handleBudgetChange={handleBudgetChange}
          open={BudgetModalOpen}
          handleBudgetModalChange={handleBudgetModalChange}
          addNotify={addBudgetNotify}
        />
      )}
      {ExpenseModalOpen && (
        <AddExpenseModal
          expenseData={expenseData}
          handleExpenseData={handleExpenseData}
          open={ExpenseModalOpen}
          handleExpenseModalChange={handleExpenseModalChange}
          delteNotify={delteNotify}
          addNotify={addNotify}
        />
      )}
      {deleteModalOpen && (
        <DeleteBudgetModal
          deleteModalOpen={deleteModalOpen}
          handleDeleteModalChange={handleDeleteModalChange}
          expenseData={expenseData}
          handleExpenseDeleteChange={handleExpenseDeleteChange}
          delteNotify={delteNotify}
        />
      )}
    </>
  );
};

ExpenseTable.propTypes;

export default ExpenseTable;
