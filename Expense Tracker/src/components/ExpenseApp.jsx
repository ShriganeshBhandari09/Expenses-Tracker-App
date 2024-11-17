import Budget from "./common/Budget";

const ExpenseApp = () => {
  return (
    <>
      <div className="main-container">
        <h1>Hello, Shriganesh</h1>
        <div className="container">
          <Budget title="Your Budget" />
          <Budget title="Total Expense" />

        </div>
      </div>
    </>
  );
};

export default ExpenseApp;
