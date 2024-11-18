import { useState } from "react";

const PrimaryButton = ({ image, buttonname, handleModalChange }) => {
  const [openModal, setOpenModal] = useState(true);
  const handleClick = () => {
    setOpenModal(!openModal);
    console.log(openModal);
    handleModalChange(openModal);
  };
  return (
    <button className="primary-btn" onClick={handleClick}>
      <img src={image} alt="" />
      {buttonname}
    </button>
  );
};
PrimaryButton.propTypes;

export default PrimaryButton;
