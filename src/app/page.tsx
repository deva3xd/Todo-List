import { PrismaClient } from "@prisma/client";
import Todo from "@/components/AddTodo";
import DeleteTodo from "@/components/DeleteTodo";

const prisma = new PrismaClient();

const Home = async() => {
  const todos = await prisma.todos.findMany();;
  const count = await prisma.todos.count();
  
  return (
    <main className="flex justify-center">
      <div className="px-3 w-1/3">
        <Todo />
        <div className='my-2'>
          {todos.map((todo) => (
            <div className='my-1 p-1 border flex items-center justify-between rounded-md' key={todo.id}>
              <p>{todo.name}</p>
              <DeleteTodo todos={todo} />
            </div>
          ))}
        </div>
        <p className="text-sm">{count} task remaining</p>
      </div>
    </main>
  );
}

export default Home