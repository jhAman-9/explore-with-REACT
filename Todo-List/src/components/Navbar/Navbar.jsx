import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-slate-700 m-auto">
      <div className="logo p-8 flex items-center font-mono">
        <span className="font-bold text-xl  text-white  hover:text-orange-500">
          TodoList By React
        </span>
      </div>
      <ul className="flex gap-8 items-center p-8 text-yellow-400 hover:text-yellow-500">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">
          Your Task
        </li>
      </ul>
    </nav>
  );
}
