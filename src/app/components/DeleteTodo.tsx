"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Status } from "@prisma/client";
import { FaTrash } from "react-icons/fa";

type Todos = {
    id: number;
    name: string;
    status: Status;
}

const DeleteTodo = ({todos}: {todos: Todos}) => {
    const router = useRouter();

    const handleDelete = async(todosId: number) => {
        await axios.delete(`./api/${[todosId]}`);
        toast.success('Data deleted');
        router.refresh();
    }

    return (
        <button type="button" onClick={() => handleDelete(todos.id)} className="py-1 px-2 rounded-md text-black">
            <FaTrash className="hover:text-red-500" />
        </button>
    )
}

export default DeleteTodo