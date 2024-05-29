import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";

function TableData({ setUpdate, handleOpen }) {
  const table = useSelector((state) => state.table);
  const dispatch = useDispatch();

  const handleUpdate = (id) => {
    // console.log("todo",id)
    setUpdate(id);
    handleOpen();
  };

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8 ">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-gray-800">
        <thead class="text-xs text-yellow-200 uppercase bg-slate-600 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 ">
              First Name
            </th>
            <th scope="col" class="px-6 py-3">
              Last Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Address
            </th>
            <th scope="col" class="px-6 py-3 ">
              Actions
            </th>
          </tr>
        </thead>
        <tbody >
          {table.map((todo) => (
            <tr
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200
               even:dark:bg-gray-800 border-b dark:border-gray-700"
              key={todo.id}
              todo={todo}
            >
              <td class="px-6 py-4">{todo.firstName}</td>
              <td class="px-6 py-4">{todo.lastName}</td>
              <td class="px-6 py-4">{todo.email}</td>
              <td class="px-6 py-4">{todo.address}</td>
              <td>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-sky-800 border-0 py-1 px-2 focus:outline-none
                   hover:bg-orange-700 rounded text-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    handleUpdate(todo.id);
                  }}
                  className="
                  text-white bg-sky-800 border-0 py-1 px-3 focus:outline-none
                   hover:bg-orange-700 rounded text-md ml-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-5a1 1 0 00-1 1v3.586L7.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 9.586V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
