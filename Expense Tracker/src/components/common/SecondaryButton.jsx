const SecondaryButton = ({
  image,
  buttonname,
  expenseData,
  handleExpenseDataCategoryChange,
}) => {
  const handleCategoryChange = () => {
    const sortedExpenses = expenseData.filter((item) => {
      return item.category === buttonname;
    });
    const unSortedExpenses = expenseData.filter((item) => {
      return item.category !== buttonname;
    });
    console.log(expenseData);
    console.log([...sortedExpenses]);
    handleExpenseDataCategoryChange([...sortedExpenses, ...unSortedExpenses]);
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
