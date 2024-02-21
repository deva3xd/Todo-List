import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Todos } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async(request: Request) => {
    const body: Todos = await request.json();
    const todo = await prisma.todos.create({
        data: {
            name: body.name
        }
    })
    return NextResponse.json(todo, {status: 201});
}