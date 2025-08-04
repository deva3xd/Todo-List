"use client"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Status } from  "@prisma/client";
import axios from 'axios';
import { useRouter } from 'next/navigation';

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
      <FontAwesomeIcon icon={faCheck} className="hover:text-green-500" />
    </button>
  )
}

export default UpdateTodo
