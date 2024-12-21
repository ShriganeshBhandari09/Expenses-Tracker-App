import { useContext, useState } from "react";
import { AppContext } from "../Context/AppProvider";

const AddBudgetModal = () => {
  const { budget, handleBudgetChange, addBudgetNotify, closeBudgetModal } =
    useContext(AppContext);

  const [inputBudget, setInputBudget] = useState(budget);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!inputBudget) {
      errors.inputBudget = "Please Enter Amount.";
    } else if (!/^\d+$/.test(inputBudget)) {
      errors.inputBudget = "Please enter numbers";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleBudgetChange(inputBudget);
      setInputBudget("");
      closeBudgetModal();
      addBudgetNotify();
    }
  };

  return (
    <>
      <div className="opacity" onClick={closeBudgetModal}></div>
      <div className="add-budget-container">
        <span className="close-button" onClick={closeBudgetModal}>
          &times;
        </span>
        <div className="add-budget-header-container">
          <h2 className="add-budget-heading">Add Budget</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="add-budget-div">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Amount"
              min={0}
              onChange={(e) => setInputBudget(e.target.value)}
            />
            {errors.inputBudget && (
              <span style={{ color: "red" }}>{errors.inputBudget}</span>
            )}
          </div>
          <button className="primary-btn">Submit Budget</button>
        </form>
      </div>
    </>
  );
};

AddBudgetModal.propTypes;

export default AddBudgetModal;
