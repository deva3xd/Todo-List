"use client";
import axios from "axios";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTodo = () => {
    const [name, setName] = useState("");

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post('./api', {
            name: name
        })
        setName("");
        router.refresh();
    }

    const router = useRouter();
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row gap-1 my-2">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Add a new task" className="px-3 py-2 border rounded-md w-full" /><br />
                    <button type="submit" className="bg-gray-900 rounded-md px-3 py-1 border text-white hover:bg-gray-950 w-fulll flex flex-row items-center">
                        <FontAwesomeIcon icon={faPlus} /><span className="ms-1 text-sm">Add</span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddTodo