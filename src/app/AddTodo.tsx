"use client";
import axios from "axios";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";

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
            <h1 className="font-bold text-3xl text-center">Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Kegiatan" className="px-3 py-1 my-2 border border-slate-500 rounded-sm w-full" /><br />
                <button type="submit" className="bg-blue-600 rounded-sm px-3 py-1 border border-slate-500 text-white hover:bg-blue-900 w-full">Tambah</button>
            </form>
        </>
    )
}

export default AddTodo