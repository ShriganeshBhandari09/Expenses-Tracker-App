const ExpenseComponent = ({ title, budget, image }) => {
  return (
    <div className="budget-component">
      <div className="budget-component-details">
        <h2>{title}</h2>
        <p>₹{Number(budget).toLocaleString()}</p>
      </div>
      <div>
        <img src={image} alt="" className="budget-component-img" />
      </div>
    </div>
  );
};

ExpenseComponent.propTypes;

export default ExpenseComponent;
