import { useState } from "react";

const AddExpenseModal = ({
  expenseData,
  handleExpenseData,
  open,
  handleExpenseModalChange,
}) => {
  const [newData, setNewData] = useState(expenseData);
  const [isOpen, setIsOpen] = useState(open);
  console.log(newData);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleExpenseData(setNewData);
    setNewData("");
  };

  const closePopUp = () => {
    handleExpenseModalChange(setIsOpen(!isOpen));
  };
  return (
    <>
      <div className="opacity" onClick={closePopUp}></div>

      <div className="add-expense-input-container">
        <span className="close-button" onClick={closePopUp}>
          &times;
        </span>
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
