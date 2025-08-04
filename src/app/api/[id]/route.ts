import { NextResponse } from "next/server";
import { PrismaClient, Status } from "@prisma/client";

const prisma = new PrismaClient();

export const DELETE = async(request: Request, {params}: { params: { id:string }}) => {
    const todo = await prisma.todos.delete({
        where: {
            id: Number(params.id)
        }
    });
    return NextResponse.json(todo, {status: 200});
}

export const PATCH = async (request: Request, {params}: { params: { id:string } }) => {
    try {
        const { status }: { status: Status } = await request.json();
        const id = parseInt(params.id);

        const updatedTodo = await prisma.todos.update({
            where: { id },
            data: { status },
        });

        return NextResponse.json(updatedTodo);
    } catch (error) {
        console.error("Failed to update status:", error);
        return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }
};