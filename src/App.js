import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import FormAdd from "./components/FormAdd";
import TableShow from "./components/TableShow";
import { useState } from "react";
import uniqid from "uniqid";
import Swal from "sweetalert2";

function App() {
  let [posts, setPosts] = useState([]);
  let iduni = uniqid();
  //Add Passengers
  let empArr = [];
  const addPass = (e, passenger) => {
    let isEmpty = Object.values(passenger).some((p) => p == "");
    if (isEmpty) {
      Swal.fire({
        icon: "warning",
        title: "All Inputs Are Required !...",
        text: "Enter All Infos About Passenger",
      });
    } else {
      const { fname, lname, age, country } = passenger;
      setPosts([{ iduni, fname, lname, age, country }, ...posts]);
      console.log(posts);
      //Add Item To Local Storage
      localStorage.setItem(
        iduni,
        JSON.stringify({ iduni, fname, lname, age, country })
      );
      Swal.fire({
        icon: "success",
        title: "Passenger Added Successfully...",
        text: "Good",
      });
    }
  };
  //Delete Passenger
  const deletePass = (id) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let postsRest = posts.filter((post) => post.iduni != id);
        setPosts(postsRest);
        //Delete Item From Local Storage
        localStorage.removeItem(id);
        Swal.fire("Deleted!", "Passenger deleted.", "success");
      }
    });
  };
  //Get All Passengers From Local Storage
  let arr = [];
  const getAllPass = () => {
    for (let [key, value] of Object.entries(localStorage)) {
      arr.push(JSON.parse(value));
    }
  };
  getAllPass();
  console.log(arr);
  //Delete All Passengers From Local Storage
  const deleteAllPass = () => {
    if (arr.length == 0) {
      Swal.fire({
        icon: "warning",
        title: "No Items Found To Delete!!...",
        text: "No...",
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          arr = [];
          Swal.fire("Deleted!", "All Passengers Deleted.", "success");
          window.location.reload();
        }
      });
    }
  };
  return (
    <div className="container">
      <h1 className="text-center mt-3 text-secondary"> Passengers</h1>
      <FormAdd
        handleAddPassenger={addPass}
        handleDeleteAllPass={deleteAllPass}
      />
      <TableShow postsArr={arr} handleDeletePassenger={deletePass} />
    </div>
  );
}
export default App;
