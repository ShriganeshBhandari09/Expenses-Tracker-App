import editimage from "../assets/edit.svg";
import deleteimage from "../assets/delete.svg";
import { useEffect, useState } from "react";
import searchimage from "../assets/search.svg";
import PrimaryButton from "./common/PrimaryButton";
import addimage from "../assets/add.svg";
import healthimage from "../assets/health.svg";
import travelimage from "../assets/travel.svg";
import foodimage from "../assets/food.svg";
import groceriesimage from "../assets/groceries.svg";
import expenses from "../assets/expenses.svg";
import SecondaryButton from "./common/SecondaryButton";

const ExpenseTable = ({
  transactions,
  handleBudgetModalChange,
  handleExpenseModalChange,
  handleDeleteModalChange,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
  const handleCategoryChange = (buttonname) => {
    const expensesData = [...transactions];
    const sortedExpenses = expensesData.filter((item) => {
      return item.category === buttonname;
    });
    setFilteredTransactions(sortedExpenses);
  };

  const handleAllExpenses = () => {
    setFilteredTransactions(transactions);
  };

  const handleSearchInput = (searchInput) => {
    if (!searchInput || !searchInput.trim().length) {
      setFilteredTransactions(transactions);
      return;
    }

    const filteredData = [...filteredTransactions];

    const sortedTransactions = filteredData.filter((transactions) =>
      transactions.description
        .toLowerCase()
        .includes(searchInput.toLowerCase().trim())
    );
    setFilteredTransactions(sortedTransactions);
  };

  useEffect(() => {
    handleSearchInput(searchInput);
  }, [transactions, searchInput]);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

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
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <button className="secondary-btn" onClick={handleAllExpenses}>
          <img src={expenses} alt="" />
          All Expenses
        </button>
        <SecondaryButton
          buttonname="Food And Drinks"
          image={foodimage}
          handleCategoryChange={handleCategoryChange}
        />
        <SecondaryButton
          buttonname="Groceries"
          image={groceriesimage}
          handleCategoryChange={handleCategoryChange}
        />
        <SecondaryButton
          buttonname="Travel"
          image={travelimage}
          handleCategoryChange={handleCategoryChange}
        />
        <SecondaryButton
          buttonname="Health"
          image={healthimage}
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
          <table>
            <thead>
              <tr>
                <th className="table-header">Sr.</th>
                {/* <th className="table-header">Date</th> */}
                <th className="table-header">Expense</th>
                {/* <th className="table-header">Category</th> */}
                <th className="table-header">Amount</th>
                <th className="table-header">Edit / Delete</th>
              </tr>
            </thead>
            <tbody className="table-data">
              {filteredTransactions.map((item, index) => {
                return (
                  <tr key={index} className="table-row">
                    <td>{index + 1}</td>
                    {/* <td>{item.date.split("-").reverse().join("-")}</td> */}
                    <td>{item.description}</td>
                    {/* <td>{item.category}</td> */}
                    <td>₹{Number(item.amount).toLocaleString()}</td>
                    <td>
                      <div className="table-button-div">
                        <button type="button" className="table-button">
                          <img src={editimage} alt="" />
                          Edit
                        </button>
                        <button
                          type="button"
                          className="table-button"
                          onClick={() => handleDeleteModalChange(item.id)}
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
        <h2 className="warning">No Expenses!!!</h2>
      )}
    </>
  );
};

ExpenseTable.propTypes;

export default ExpenseTable;
