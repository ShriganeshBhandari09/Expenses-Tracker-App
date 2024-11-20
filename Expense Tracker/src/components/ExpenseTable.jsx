import deleteimage from "../assets/delete.svg";
import editimage from "../assets/edit.svg";

const ExpenseTable = (props) => {
  const expenseData = props.expenseData;
  return (
    <>
      {expenseData.length > 0 ? (
        <div className="expense-container">
          {/* <div className="expense-container-heading">
          <p>Sr.</p>
          <p>Expense</p>
          <p>Amount</p>
          <p>Edit/Delete</p>
        </div>
        <div className="expense-container-data">
          <div>
          <p>1</p>
          <p>Expense on Pizza</p>
          <p>200</p>
          <p><button type="button">Edit</button> <button type="button">Delete</button></p>
          </div>
          <div>
          <p>1</p>
          <p>Expense on Pizza</p>
          <p>200</p>
          <p><button type="button">Edit</button> <button type="button">Delete</button></p>
          </div>
          <div>
          <p>1</p>
          <p>Expense on Pizza</p>
          <p>200</p>
          <p><button type="button">Edit</button> <button type="button">Delete</button></p>
          </div>          <div>
          <p>1</p>
          <p>Expense on Pizza</p>
          <p>200</p>
          <p><button type="button">Edit</button> <button type="button">Delete</button></p>
          </div>          <div>
          <p>1</p>
          <p>Expense on Pizza</p>
          <p>200</p>
          <p><button type="button">Edit</button> <button type="button">Delete</button></p>
          </div>  
        </div> */}
          <table>
            <thead>
              <tr>
                <th className="table-header">Sr.</th>
                <th className="table-header">Date</th>
                <th className="table-header">Expense</th>
                <th className="table-header">Category</th>
                <th className="table-header">Amount</th>
                <th className="table-header">Edit / Delete</th>
              </tr>
            </thead>
            <tbody className="table-data">
              {expenseData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.date.split("-").reverse().join("-")}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{parseInt(item.amount)}</td>
                    <td>
                      <div className="table-button-div">
                        <button type="button" className="table-button">
                          <img src={editimage} alt="" />
                          Edit
                        </button>
                        <button type="button" className="table-button">
                          <img src={deleteimage} alt="" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="warning">Add Your Expenses!!</h2>
      )}
    </>
  );
};

ExpenseTable.propTypes;

export default ExpenseTable;
