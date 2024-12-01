import exclamation from "../assets/exclamation.png";

import "react-toastify/dist/ReactToastify.css";
const DeleteBudgetModal = ({ onClose, onConfirm }) => {
  // const handleDeleteChange = (id) => {
  //   // const newExpenseData = [...expenseData];
  //   // console.log(index.target.value)
  //   // newExpenseData.splice(index, 1);
  //   const deleteExpense = expenseData.filter((data) => {
  //     return data.id !== id;
  //   });
  //   console.log(deleteExpense);
  //   handleExpenseDeleteChange(deleteExpense);
  //   handleDeleteModalChange(setIsOpen(!isOpen));
  //   delteNotify();
  // };

  return (
    <>
      <div className="opacity" onClick={() => onClose()}></div>
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
            <button className="primary-btn" onClick={() => onConfirm()}>
              Delete
            </button>
            <button
              className="primary-btn"
              style={{ backgroundColor: "#ff2146" }}
              onClick={() => onClose()}
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
