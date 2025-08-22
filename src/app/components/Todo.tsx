"use client";
import React, { useState } from "react";
import UpdateTodo from "./UpdateTodo";
import DeleteTodo from "./DeleteTodo";
import { Status } from "@prisma/client";

type Todos = {
  id: number;
  name: string;
  status: Status;
};

type TodosResponse = {
  data: Todos[];
  count: number;
};

const Todo = ({ todos }: { todos: TodosResponse }) => {
  const [status, setStatus] = useState("all");

  const filteredTodos = (() => {
    if (!todos?.data) return [];

    switch (status) {
      case "all":
        return todos.data;
      case "pending":
        return todos.data.filter((todo) => todo.status === Status.pending);
      case "done":
        return todos.data.filter((todo) => todo.status === Status.done);
      default:
        return [];
    }
  })();

  return (
    <section className="px-4 py-4 sm:px-20 bg-white max-w-screen-2xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h3 className="uppercase text-2xl font-semibold">your tasks</h3>
        <div className="flex flex-row gap-1">
          <button
            onClick={() => setStatus("all")}
            className={`px-3 sm:px-4 py-0 sm:py-1  border border-black flex items-center text-xl shadow-default  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
              status == "all"
                ? "bg-black text-white hover:bg-black hover:text-white"
                : "bg-white text-black hover:bg-black hover:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("pending")}
            className={`px-3 sm:px-4 py-0 sm:py-1  border border-black flex items-center text-xl shadow-default  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
              status == "pending"
                ? "bg-black text-white hover:bg-black hover:text-white"
                : "bg-white text-black hover:bg-black hover:text-white"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setStatus("done")}
            className={`px-3 sm:px-4 py-0 sm:py-1  border border-black flex items-center text-xl shadow-default  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
              status == "done"
                ? "bg-black text-white hover:bg-black hover:text-white"
                : "bg-white text-black hover:bg-black hover:text-white"
            }`}
          >
            Done
          </button>
        </div>
      </div>
      {filteredTodos.length > 0 ? (
        filteredTodos
          .slice()
          .sort((a, b) => {
            if (a.status === Status.done && b.status !== Status.done) return 1;
            if (a.status !== Status.done && b.status === Status.done) return -1;
            return 0;
          })
          .map((todo) => (
            <div
              key={todo.id}
              className={`bg-white text-lg p-2 sm:p-3 border-4 border-black shadow-sm shadow-black flex flex-row justify-between items-center mb-2 ${
                todo.status === Status.done ? "line-through opacity-80" : ""
              }`}
            >
              <span className="font-normal text-black">{todo.name}</span>
              <div className="flex flex-row items-center gap-2 pe-2">
                <UpdateTodo todos={todo} />
                <DeleteTodo todos={todo} />
              </div>
            </div>
          ))
      ) : (
        <div className="bg-white text-lg p-2 sm:p-3 border-4 border-black shadow-sm shadow-black flex flex-row justify-center items-center mb-2">
          No Data Available
        </div>
      )}
    </section>
  );
};

export default Todo;
