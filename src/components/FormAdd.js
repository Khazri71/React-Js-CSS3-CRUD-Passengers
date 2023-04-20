import React, { useState } from "react";

const FormAdd = (props) => {
  const { handleAddPassenger, handleDeleteAllPass } = props;
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  //Make Inputs Empty
  const emptyInputs = () => {
    setFname("");
    setLname("");
    setAge("");
    setCountry("");
  };
  return (
    <div className="mt-5 mb-5">
      <form
        onSubmit={(e) => {
          handleAddPassenger(e, { fname, lname, age, country });
          emptyInputs();
        }}
      >
        <div className="row">
          <div className="mb-3 col-6">
            <input
              type="text"
              className="form-control"
              placeholder=" Your Firstname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="mb-3 col-6">
            <input
              type="text"
              className="form-control"
              placeholder=" Your Lastname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-6">
            <input
              type="text"
              className="form-control"
              placeholder=" Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3 col-6">
            <input
              type="text"
              className="form-control"
              placeholder=" Your Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={(e) => {
            handleAddPassenger(e, { fname, lname, age, country });
            emptyInputs();
          }}
        >
          Add Passenger
        </button>
      </form>
      <button
        type="button"
        className="btn btn-secondary float-end"
        onClick={handleDeleteAllPass}
      >
        Delete All Passengers
      </button>
    </div>
  );
};
export default FormAdd;
