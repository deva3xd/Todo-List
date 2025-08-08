"use client"
import React from 'react'
import { Status } from  "@prisma/client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaCheck } from 'react-icons/fa';

type Todos = {
    id: number;
    name: string;
    status: Status;
}

const UpdateTodo = ({todos}: {todos: Todos}) => {
    const router = useRouter();

    const handleUpdate = async (todosId: number, currentStatus: Status) => {
        const newStatus: Status = currentStatus === "pending" ? "done" : "pending";

        try {
            await axios.patch(`/api/${todosId}`, {
                status: newStatus,
            } );
            router.refresh();
        } catch (error) {
            console.error("Failed to update todo status:", error);
        }
    };

  return (
    <button onClick={() => handleUpdate(todos.id, todos.status)}>
      <FaCheck className="hover:text-green-500" />
    </button>
  )
}

export default UpdateTodo
