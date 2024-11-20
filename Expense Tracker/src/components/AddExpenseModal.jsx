import { useState } from "react";

const AddExpenseModal = ({
  handleExpenseData,
  open,
  handleExpenseModalChange,
}) => {
  const [newExpense, setNewExpense] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [newExpenseAmount, setnewExpenseAmount] = useState("");
  const [isOpen, setIsOpen] = useState(open);
  // const [id, setid] = useState(0);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!newExpense) {
      errors.newExpense = "Please Enter Expense.";
    }
    if (!category) {
      errors.category = "Please Select Category";
    }
    if (!date) {
      errors.date = "Please Select Date";
    }
    if (!newExpenseAmount) {
      errors.newExpenseAmount = "Please Enter Amount";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Expense Name", newExpense);
      console.log("Category", category);
      console.log("Expense Amount", newExpenseAmount);
      handleExpenseData({
        description: newExpense,
        category: category,
        date: date,
        amount: parseInt(newExpenseAmount),
      });
      handleExpenseModalChange(setIsOpen(!isOpen));
    }
  };

  const closePopUp = () => {
    handleExpenseModalChange(setIsOpen(!isOpen));
  };
  return (
    <>
      <div className="opacity" onClick={closePopUp}></div>
      <div className="add-expense-container">
        <span className="close-button" onClick={closePopUp}>
          &times;
        </span>
        <div className="add-expense-header-container">
          <h2 className="add-expense-heading">Add Expense</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="add-expense-div">
            <label htmlFor="expense-name">Enter Expense Name</label>
            <input
              type="text"
              name="expense-name"
              placeholder="Enter Expense Name"
              id="expense-name"
              value={newExpense}
              onChange={(e) => setNewExpense(e.target.value)}
            />
            {errors.newExpense && (
              <span style={{ color: "red" }}>{errors.newExpense}</span>
            )}
          </div>
          <div className="add-expense-div">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name=""
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}
          </div>
          <div className="add-expense-div">
            <label htmlFor="options">Category</label>
            <select
              name="options"
              id="options"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Please choose an category</option>
              <option value="Food And Drinks">Food And Drinks</option>
              <option value="Groceries">Groceries</option>
              <option value="Travel">Travel</option>
              <option value="Health">Health</option>
            </select>
            {errors.category && (
              <span style={{ color: "red" }}>{errors.category}</span>
            )}
          </div>
          <div className="add-expense-div">
            <label htmlFor="amount">Enter Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter Amount"
              value={newExpenseAmount}
              onChange={(e) => setnewExpenseAmount(e.target.value)}
            />
            {errors.newExpenseAmount && (
              <span style={{ color: "red" }}>{errors.newExpenseAmount}</span>
            )}
          </div>
          <button className="primary-btn">Add Expense</button>
        </form>
      </div>
    </>
  );
};

AddExpenseModal.propTypes;

export default AddExpenseModal;
