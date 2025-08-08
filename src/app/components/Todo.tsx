import React from "react";
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

const Todo =  ({todos} : {todos: TodosResponse}) => {
  return (
    <section className="px-20 py-4 bg-white max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="uppercase text-2xl font-semibold">your tasks</h3>
        <div className="flex flex-row gap-1">
          <div className="px-4 py-1  border border-black flex items-center text-xl bg-black text-white hover:bg-black hover:text-white shadow-default  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
            All
          </div>
          <div className="px-4 py-1  border border-black flex items-center text-xl bg-white text-black hover:bg-black hover:text-white shadow-default">
            Pending
          </div>
          <div className="px-4 py-1  border border-black flex items-center text-xl bg-white text-black hover:bg-black hover:text-white shadow-default">
            Done
          </div>
        </div>
      </div>
      {todos?.data.length > 0 &&
        todos.data.map((todo) => (
          <div
            key={todo.id}
            className={`bg-white text-lg py-4 px-8 border-4 border-black shadow-sm shadow-black flex flex-row justify-between items-center mb-2 ${todo.status === Status.done ? "line-through" : ""}`}
          >
            <span className="font-normal text-black">{todo.name}</span>
            <div className="flex flex-row items-center gap-2">
              <UpdateTodo
                todos={todo}
              />
              <DeleteTodo
                todos={todo}
              />
            </div>
          </div>
        ))}
    </section>
  );
};

export default Todo;
