import { PrismaClient } from "@prisma/client";
import Todo from "@/addTodo";
import DeleteTodo from "@/deleteTodo";

const prisma = new PrismaClient();

const getTodos = async () => {
  const res = await prisma.todos.findMany();
  return res;
}

export default async function Home() {
  const todos = await getTodos();
  
  return (
    <main className="mx-10 my-5 flex justify-center">
      <div className="px-3 w-1/3">
        <Todo />
        <div className='my-1'>
          {todos.map((todo) => (
            <div className='p-2 border-b border-black flex items-center justify-between' key={todo.id}>
              <p>{todo.name}</p>
              <DeleteTodo todos={todo} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
