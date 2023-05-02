import React, { useState } from "react";

const Form = () => {
  const [accounts, setAccounts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newAccount = {
      id: accounts.length + 1,
      customerName: formData.get("customerName"),
      accountNumber: formData.get("accountNumber"),
      accountType: formData.get("accountType"),
    };
    console.log(newAccount);
    setAccounts([...accounts, newAccount]);
    event.target.reset();
  };

  const handleDelete = (id)=>{
    const deleteAccount = accounts.filter((account) => account.id !== id)
    setAccounts(deleteAccount);


  }
  return (
    <>
      <div className="container w-50 mt-5">
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="customerName">
                Customer Name
              </label>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="customerName"
                  className="form-control"
                  name="customerName"
                />
              </div>

              <label className="form-label" htmlFor="accountNumber">
                Account Number
              </label>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="accountNumber"
                  className="form-control"
                  name="accountNumber"
                />
              </div>

              <label className="form-label" htmlFor="accountNumber">
                Account Type
              </label>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="accountType"
                  className="form-control"
                  name="accountType"
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-info btn-lg mb-4 w-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        {accounts.map((account) => (
          <div className="card w-25 p-3 d-inline-block m-2" key={account.id}>
            <h2>{account.customerName}</h2>
            <p>id: {account.id}</p>
            <p>Customer Name: {account.customerName}</p>
            <p>Account Number: {account.accountNumber}</p>
            <p>Account Type: {account.accountType}</p>
            <button className="btn btn-info w-25 " onClick={()=>handleDelete(account.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
