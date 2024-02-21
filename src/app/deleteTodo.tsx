"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

type Todos = {
    id: number;
    name: string;
}

const deleteTodo = ({todos}: {todos: Todos}) => {
    const handleDelete = async(todosId: number) => {
        await axios.delete(`./api/todos/${[todosId]}`)
        router.refresh();
    }

    const router = useRouter();
    
    return (
        <>
            <button type="button" onClick={() => handleDelete(todos.id)} className="bg-red-600 hover:bg-red-900 py-1 px-2 rounded-sm text-white">Hapus</button>
        </>
    )
}

export default deleteTodo