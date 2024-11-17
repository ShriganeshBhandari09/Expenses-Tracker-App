import { useState } from "react";

const PrimaryButton = ({ image, buttonname, open }) => {
  const [openModal, setOpenModal] = useState(open);
  const handleClick = () => {
    setOpenModal(true);
    console.log(openModal);
  };
  return (
    <button className="primary-btn" onClick={() => handleClick()}>
      <img src={image} alt="" />
      {buttonname}
    </button>
  );
};
PrimaryButton.propTypes;

export default PrimaryButton;
