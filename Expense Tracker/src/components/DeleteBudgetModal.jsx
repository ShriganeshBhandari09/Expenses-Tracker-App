import { useState } from "react";
import exclamation from "../assets/exclamation.png";



import "react-toastify/dist/ReactToastify.css";
const DeleteBudgetModal = ({
  expenseData,
  handleDeleteModalChange,
  deleteModalOpen,
  handleExpenseDeleteChange,
  delteNotify
}) => {
  const [isOpen, setIsOpen] = useState(deleteModalOpen);
  console.log(isOpen);
  const closePopUp = () => {
    handleDeleteModalChange(setIsOpen(!isOpen));
  };

  const handleDeleteChange = (index) => {
    const newExpenseData = [...expenseData];
    newExpenseData.splice(index, 1);
    handleExpenseDeleteChange(newExpenseData);
    handleDeleteModalChange(setIsOpen(!isOpen));
    delteNotify()
  };


  return (
    <>
      <div className="opacity" onClick={closePopUp}></div>
      <div className="delete-modal-container">
        <div className="delete-modal-img-container">
          <img
            src={exclamation}
            style={{ width: "100px", height: "100px" }}
            alt=""
          />
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2>Are you Sure?</h2>
          <p>You wont be able to revert this!</p>
          <div
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}
          >
            <button className="primary-btn" onClick={handleDeleteChange}>
              Delete
            </button>
            <button
              className="primary-btn"
              style={{ backgroundColor: "#ff2146" }}
              onClick={closePopUp}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


DeleteBudgetModal.propTypes;

export default DeleteBudgetModal;
