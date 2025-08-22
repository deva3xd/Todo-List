"use client"
import React from 'react'
import { FaCheck } from 'react-icons/fa';

type Todo = {
    id: number;
    todo: string;
    done: boolean;
}

type HeaderProps = {
    todo: Todo;
    onUpdate: (id: number) => void;
}

const UpdateTodo = ({ todo, onUpdate }: HeaderProps) => {
    return (
        <button onClick={() => onUpdate(todo.id)}>
            <FaCheck className="hover:text-green-500" />
        </button>
    )
}

export default UpdateTodo
