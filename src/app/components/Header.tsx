import React from "react";
import AddTodo from "./AddTodo";
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

const Header = ({ todos }: { todos: TodosResponse }) => {
  return (
    <section className="bg-black border-b-4 border-black max-w-screen-2xl mx-auto pt-16">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-white md:text-5xl uppercase">
            create your task
          </h2>

          <p className="hidden text-white sm:mt-4 sm:block uppercase my-2">
            no bullshit, make it more productive
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl bg-white p-8">
          <AddTodo />
        </div>
      </div>
      <div className="flex flex-row justify-evenly items-center bg-white py-4">
        <div className="w-72 flex flex-col justifty-center items-center p-8 border-4 border-black shadow-sm shadow-black">
          <p className="text-4xl font-bold">{todos.count}</p>
          <p className="text-lg font-normal">Total</p>
        </div>
        <div className="w-72 flex flex-col justifty-center items-center p-8 border-4 border-black shadow-sm shadow-black">
          <p className="text-4xl font-bold">
            {todos.data.filter((todo) => todo.status === Status.pending).length}
          </p>
          <p className="text-lg font-normal">Pending</p>
        </div>
        <div className="w-72 flex flex-col justifty-center items-center p-8 border-4 border-black shadow-sm shadow-black">
          <p className="text-4xl font-bold">
            {todos.data.filter((todo) => todo.status === Status.done).length}
          </p>
          <p className="text-lg font-normal">Done</p>
        </div>
        <div className="w-72 flex flex-col justifty-center items-center p-8 border-4 border-black shadow-sm shadow-black">
          <p className="text-4xl font-bold">
            {todos && todos.count > 0
              ? Math.round(
                  (todos.data.filter((todo) => todo.status === Status.done)
                    .length /
                    todos.count) *
                    100
                )
              : 0}
            %
          </p>
          <p className="text-lg font-normal">Progress</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
