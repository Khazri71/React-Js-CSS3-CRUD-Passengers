import React, { useState } from "react";
import uniqid from "uniqid";
const TableShow = (props) => {
  const { postsArr, handleDeletePassenger } = props;
  let count = 0;
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Age</th>
            <th scope="col">Country</th>
            <th scope="col">Delete X</th>
          </tr>
        </thead>
        <tbody>
          {postsArr.map((post) => {
            count++;
            return (
              <tr key={uniqid()}>
                <th scope="row">{count}</th>
                <td>{post.fname}</td>
                <td>{post.lname}</td>
                <td>{post.age}</td>
                <td>{post.country}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeletePassenger(post.iduni)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TableShow;
