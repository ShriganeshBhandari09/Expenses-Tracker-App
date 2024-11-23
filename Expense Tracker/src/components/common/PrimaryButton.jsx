const PrimaryButton = ({ image, buttonname, handelModalChange }) => {
  // const [openModal, setOpenModal] = useState(true);
  // const handleClick = () => {
  //   setOpenModal(!openModal);
  //   console.log(openModal);
  //   handleModalChange(openModal);
  // };
  return (
    <button className="primary-btn" onClick={handelModalChange}>
      {image ? <img src={image} alt="" /> : null}
      {buttonname}
    </button>
  );
};
PrimaryButton.propTypes;

export default PrimaryButton;
