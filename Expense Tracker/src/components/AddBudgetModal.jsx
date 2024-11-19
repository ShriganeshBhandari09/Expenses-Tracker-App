import { useState } from "react";

const AddBudgetModal = ({
  budget,
  handleBudgetChange,
  open,
  handleBudgetModalChange,
}) => {
  const [inputBudget, setInputBudget] = useState(budget);
  const [isOpen, setIsOpen] = useState(open);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBudgetChange(inputBudget);
    handleBudgetModalChange(setIsOpen(!isOpen));
    setInputBudget("");
  };

  const closePopUp = () => {
    handleBudgetModalChange(setIsOpen(!isOpen));
  };

  return (
    <>
      <div className="opacity" onClick={closePopUp}></div>
      <div className="add-budget-input-container">
        <span className="close-button" onClick={closePopUp}>
          &times;
        </span>
        <h2>Add Budget</h2>
        <form>
          <label htmlFor="amount">Enter Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            onChange={(e) => setInputBudget(e.target.value)}
            required
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
