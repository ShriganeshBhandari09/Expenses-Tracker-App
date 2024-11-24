const Budget = (props) => {
  return (
    <div className="budget-component">
      <div>
        <h2>{props.title}</h2>
        <p>₹{props.budget.toLocaleString()}</p>
      </div>
      <div>
        <img src={props.image} alt="" className="budget-component-img"/>
      </div>
    </div>
  );
};

Budget.propTypes;

export default Budget;
