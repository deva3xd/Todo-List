"use client";
import { FaTrash } from "react-icons/fa";

type Todo = {
    id: number;
    todo: string;
    done: boolean;
}

type HeaderProps = {
    todo: Todo;
    onDelete: (id: number) => void;
}

const DeleteTodo = ({ todo, onDelete }: HeaderProps) => {
    return (
        <button type="button" onClick={() => onDelete(todo.id)}>
            <FaTrash className="hover:text-red-500" />
        </button>
    )
}

export default DeleteTodo