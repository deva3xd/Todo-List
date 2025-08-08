"use client";
import axios from "axios";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

const AddTodo = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("./api", {
      name: name,
    });
    setName("");
    router.refresh();
  };

  const router = useRouter();

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <label htmlFor="task" className="sr-only">
        Task
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add a new task"
        className="w-full rounded-sm bg-white p-3 transition focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none shadow-default border border-black"
      />
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 rounded-sm bg-black px-5 py-3 text-white transition focus:outline-hidden mt-0 w-auto hover:bg-opacity-95 shadow-default  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      >
        <span className="text-sm font-medium"> Add </span>
        <FaArrowRight className="text-white" />
      </button>
    </form>
  );
};

export default AddTodo;
