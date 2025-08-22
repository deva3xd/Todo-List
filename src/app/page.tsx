"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Todos from "@/components/Todos";

type Todo = {
    id: number;
    todo: string;
    done: boolean;
};

const Home = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    // load localStorage
    useEffect(() => {
        const saved = localStorage.getItem("todos");
        if (saved) setTodos(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // handler
    const addTodo = (todo: string) => {
        setTodos((prev) => [...prev, { id: Date.now(), todo, done: false }]);
    };

    const updateTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
        );
    };

    const deleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <main>
            <Navbar />
            <Header todos={todos} onAdd={addTodo} />
            <Todos todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
        </main>
    );
};

export default Home;
