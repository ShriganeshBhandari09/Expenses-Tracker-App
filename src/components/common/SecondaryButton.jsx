const SecondaryButton = ({
  image,
  buttonname,
  handleCategoryChange,
  activeButton,
  index,
}) => {
  return (
    <button
      className={`secondary-btn ${activeButton === index ? "active" : ""}`}
      onClick={() => handleCategoryChange(buttonname, index)}
    >
      {image ? <img src={image} alt="" /> : null}
      {buttonname}
    </button>
  );
};

SecondaryButton.propTypes;

export default SecondaryButton;
