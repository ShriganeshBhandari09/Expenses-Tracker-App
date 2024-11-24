const Budget = ({ title, budget, image }) => {
  return (
    <div className="budget-component">
      <div>
        <h2>{title}</h2>
        <p>₹{Number(budget).toLocaleString()}</p>
      </div>
      <div>
        <img src={image} alt="" className="budget-component-img" />
      </div>
    </div>
  );
};

Budget.propTypes;

export default Budget;
