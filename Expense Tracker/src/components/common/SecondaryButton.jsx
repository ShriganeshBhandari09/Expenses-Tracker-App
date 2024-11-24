const SecondaryButton = ({
  image,
  buttonname,
  expenseData,
  handleExpenseDataCategoryChange,
}) => {
  const filterData = [...expenseData]
  const handleCategoryChange = () => {
    console.log(expenseData);
    const sortedExpenses = filterData.filter((item) => {
      return item.category === buttonname;
    });
    console.log(expenseData);
    console.log([...sortedExpenses]);
    handleExpenseDataCategoryChange([...sortedExpenses]);
  };

  return (
    <button className="secondary-btn" onClick={handleCategoryChange}>
      {image ? <img src={image} alt="" /> : null}
      {buttonname}
    </button>
  );
};
SecondaryButton.propTypes;

export default SecondaryButton;
