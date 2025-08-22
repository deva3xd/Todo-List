"use client";
import React from "react";
import AddTodo from "@/components/AddTodo";

type Todo = {
    id: number;
    todo: string;
    done: boolean;
};

type HeaderProps = {
    todos: Todo[];
    onAdd: (text: string) => void;
};

const Header = ({ todos, onAdd }: HeaderProps) => {
    return (
        <section className="bg-black border-b-4 border-black max-w-screen-2xl mx-auto pt-16">
            <div className="p-4 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-2xl font-bold text-white sm:text-4xl uppercase">
                        create your task
                    </h2>
                    <p className="text-white mt-2 sm:mt-4 sm:block uppercase text-xs sm:text-base">
                        no bullshit, make it more productive
                    </p>
                </div>
                <div className="mx-auto mt-2 sm:mt-4 max-w-xl bg-white p-4 sm:p-8">
                    <AddTodo onAdd={onAdd} />
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 bg-white py-4 px-4">
                <div className="w-full flex flex-col justify-center items-center p-4 lg:p-8 border-4 border-black shadow-sm shadow-black">
                    <p className="text-3xl md:text-4xl font-bold">{todos.length}</p>
                    <p className="text-lg font-normal">Total</p>
                </div>
                <div className="w-full flex flex-col justifty-center items-center p-4 lg:p-8 border-4 border-black shadow-sm shadow-black">
                    <p className="text-3xl md:text-4xl font-bold">
                        {todos.filter((todo) => todo.done === false).length}
                    </p>
                    <p className="text-lg font-normal">Pending</p>
                </div>
                <div className="w-full flex flex-col justifty-center items-center p-4 lg:p-8 border-4 border-black shadow-sm shadow-black">
                    <p className="text-3xl md:text-4xl font-bold">
                        {todos.filter((todo) => todo.done === true).length}
                    </p>
                    <p className="text-lg font-normal">Done</p>
                </div>
                <div className="w-full flex flex-col justifty-center items-center p-4 lg:p-8 border-4 border-black shadow-sm shadow-black">
                    <p className="text-3xl md:text-4xl font-bold">
                        {todos && todos.length > 0
                            ? Math.round(
                                (todos.filter((todo) => todo.done === true).length /
                                    todos.length) *
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
