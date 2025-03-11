"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type Todos = {
    id: number;
    name: string;
}

const DeleteTodo = ({todos}: {todos: Todos}) => {
    const handleDelete = async(todosId: number) => {
        await axios.delete(`./api/${[todosId]}`)
        router.refresh();
    }

    const router = useRouter();
    
    return (
        <button type="button" onClick={() => handleDelete(todos.id)} className="py-1 px-2 rounded-md text-black">
            <FontAwesomeIcon icon={faTrash} />
        </button>
    )
}

export default DeleteTodo