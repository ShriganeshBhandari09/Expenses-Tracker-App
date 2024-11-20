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

  const handleSubmit = (e) => {
    e.preventDefault();
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
            id="expense-name"
            value={newExpense}
            onChange={(e) => setNewExpense(e.target.value)}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name=""
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
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
          <label htmlFor="amount">Enter Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter Amount"
            value={newExpenseAmount}
            onChange={(e) => setnewExpenseAmount(e.target.value)}
          />
          <button className="primary-btn" onClick={handleSubmit}>
            Add Expense
          </button>
        </form>
      </div>
    </>
  );
};

AddExpenseModal.propTypes;

export default AddExpenseModal;
