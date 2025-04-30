import React from "react";

export default function TodoItem({ item, completed }) {
  // use state here
  const checked = completed ?? false;

  return (
    <li className="flex justify-between items-center p-3 border-b border-gray-300 bg-gray-100">
      <input type="checkbox" name="" id="" defaultChecked={checked} />
      <span>{item}</span>
      <button
        className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
        onClick={() => {
          haha("what ever");
        }}
      >
        Delete
      </button>
    </li>
  );
}
