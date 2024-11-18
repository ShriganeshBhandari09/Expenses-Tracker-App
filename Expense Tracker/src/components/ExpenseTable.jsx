import deleteimage from "../assets/delete.svg";
import editimage from "../assets/edit.svg";

const ExpenseTable = (props) => {
  const expenseData = props.expenseData;
  return (
    <>
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
              <th>Sr.</th>
              <th>Expense</th>
              <th>Amount</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {expenseData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.description}</td>
                  <td>{parseInt(item.amount)}</td>
                  <td>
                    <div>
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
    </>
  );
};

ExpenseTable.propTypes;

export default ExpenseTable;
