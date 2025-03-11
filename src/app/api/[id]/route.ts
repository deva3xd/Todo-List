import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const DELETE = async(request: Request, {params}: {params: {id:string}}) => {
    const todo = await prisma.todos.delete({
        where: {
            id: Number(params.id)
        }
    });
    return NextResponse.json(todo, {status: 200});
}