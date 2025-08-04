"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from "sonner";
import { Status } from "@prisma/client";

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
            <FontAwesomeIcon icon={faTrash} className="hover:text-red-500" />
        </button>
    )
}

export default DeleteTodo