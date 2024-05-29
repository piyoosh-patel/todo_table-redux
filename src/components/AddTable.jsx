import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todoSlice";
import { useState } from "react";
// import TableData from "./TableData";

function AddTable(props) {
  const table = useSelector((state) => state.table);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // const [update, setUpdate] = useState("");
  const { update, setUpdate, setOpen } = props;

  useEffect(() => {
    if (update) {
      let findOne = table.find((detail) => detail.id == update);

      setFirstName(findOne.firstName);
      setLastName(findOne.lastName);
      setEmail(findOne.email);
      setAddress(findOne.address);

      // console.log( findOne);
      return () => {
        setUpdate("");
      };
    }
  }, [update]);

  const dispatch = useDispatch();

  const addTodoHandlear = (e) => {
    e.preventDefault();
    setOpen(false);
    if (update == "") {
      dispatch(
        addTodo({
          firstName: firstName,
          lastName: lastName,
          email: email,
          address: address,
        })
      );

      setFirstName("");
      setLastName("");
      setEmail("");
      setAddress("");
    } else {
      tableUpdate();
    }
  };

  const tableUpdate = () => {
    if (firstName && lastName && email && address !== null) {
      dispatch(
        updateTodo({
          id: update,
          firstName: firstName,
          lastName: lastName,
          email: email,
          address: address,
        })
      );
    }
    setAddress("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setUpdate("");
  };

  return (
    <>
      <h3 className="font-semibold ">
        User - {firstName} {lastName}
      </h3>
      <form onSubmit={addTodoHandlear} className="flex flex-col mt-12  gap-4">
        <input
          type="text"
          className="flex-col bg-gray-500 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter First Name.."
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="flex-col bg-gray-500 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter Last Name.."
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          className="flex-col bg-gray-500 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter Email .."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="flex-col bg-gray-500 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter Address .."
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          type="submit"
          className="flex-col text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg w-fit ml-52 "
        >
          {!!update ? "Update" : "Add User"}
        </button>
      </form>
      {/* <TableData setUpdate={setUpdate} /> */}
    </>
  );
}
export default AddTable;
