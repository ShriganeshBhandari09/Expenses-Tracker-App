import { useState } from "react";

const AddExpenseModal = ({ expenseData, handleExpenseData }) => {
  const [newData, setNewData] = useState(expenseData);
  console.log(newData);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleExpenseData(setNewData);
    setNewData("");
  };
  return (
    <>
      <div className="opacity"></div>

      <div className="add-expense-input-container">
        <span className="close-button">&times;</span>
        <h2>Add Expense</h2>
        <form>
          <label htmlFor="expense-name">Enter Expense Name</label>
          <input
            type="text"
            name="expense-name"
            placeholder="Enter Expense Name"
            onChange={(e) => setNewData(e.target.value)}
          />
          <label htmlFor="amount">Enter Amount</label>
          <input type="number" name="amount" placeholder="Enter Amount" />
          <button className="primary-btn" onClick={handleSubmit}>
            Add Expense
          </button>
        </form>
      </div>
    </>
  );
};

export default AddExpenseModal;
