const PrimaryButton = ({ image, buttonname, handelModalChange }) => {
  return (
    <button className="primary-btn" onClick={handelModalChange}>
      {image ? <img src={image} alt="" /> : null}
      {buttonname}
    </button>
  );
};
PrimaryButton.propTypes;

export default PrimaryButton;
