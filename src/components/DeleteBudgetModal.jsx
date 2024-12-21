import { useContext } from "react";
import exclamation from "../assets/exclamation.png";

import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../Context/AppProvider";
const DeleteBudgetModal = () => {
  const { closeDeleteModal, handleConfirmDelete } = useContext(AppContext);

  return (
    <>
      <div className="opacity" onClick={closeDeleteModal}></div>
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
            <button
              className="primary-btn"
              onClick={() => handleConfirmDelete()}
            >
              Delete
            </button>
            <button
              className="primary-btn"
              style={{ backgroundColor: "#ff2146" }}
              onClick={closeDeleteModal}
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
