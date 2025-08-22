"use client";
import { useState, FormEvent } from "react";
import { FaArrowRight } from "react-icons/fa";

type HeaderProps = {
    onAdd: (text: string) => void;
};

const AddTodo = ({ onAdd }: HeaderProps) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!todo.trim()) return;
        onAdd(todo);
        setTodo("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <label htmlFor="task" className="sr-only">
                Task
            </label>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task"
                className="w-full rounded-sm bg-white p-2 sm:p-3 transition focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none shadow-default border border-black"
            />
            <button
                type="submit"
                className="group flex items-center justify-center gap-2 rounded-sm bg-black px-3 py-1 sm:px-5 sm:py-3 text-white transition focus:outline-hidden mt-0 w-auto hover:bg-opacity-95 shadow-default  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
                <span className="text-sm font-medium"> Add </span>
                <FaArrowRight className="text-white" />
            </button>
        </form>
    );
};

export default AddTodo;
