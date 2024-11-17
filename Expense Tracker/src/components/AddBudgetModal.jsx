import { useState } from "react";

const AddBudgetModal = ({ budget, handleBudgetChange }) => {
  const [inputBudget, setInputBudget] = useState(budget);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBudgetChange(inputBudget);
    setInputBudget("")
  };

  return (
    <>
      <div className="opacity"></div>
      <div className="add-budget-input-container">
        <span className="close-button">&times;</span>
        <h2>Add Budget</h2>
        <form>
          <label htmlFor="amount">Enter Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            onChange={(e) => setInputBudget(e.target.value)}
          />
          <button className="primary-btn" onClick={handleSubmit}>
            Submit Budget
          </button>
        </form>
      </div>
    </>
  );
};

AddBudgetModal.propTypes;

export default AddBudgetModal;
