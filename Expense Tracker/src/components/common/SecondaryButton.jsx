const SecondaryButton = ({ image, buttonname , handleCategoryChange }) => {
  return (
    <button className="secondary-btn" onClick={handleCategoryChange}>
      {image ? <img src={image} alt="" /> : null}
      {buttonname}
    </button>
  );
};
SecondaryButton.propTypes;

export default SecondaryButton;
