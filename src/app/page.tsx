import AddTodo from "@/components/AddTodo";
import DeleteTodo from "@/components/DeleteTodo";
import UpdateTodo from "@/components/UpdateTodo";
import { Toaster } from "sonner";
import { Status } from "@prisma/client";

type Todos = {
  id: number;
  name: string;
  status: Status;
};

type TodosResponse = {
  data: Todos[];
  count: number;
};

const getTodos = async (): Promise<TodosResponse> => {
  const res = await fetch("http://localhost:3000/api", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  const json = await res.json();
  return json;
};

const Home = async () => {
  const todos: TodosResponse = await getTodos();

  return (
    <main className="flex justify-center">
      <Toaster />
      <div className="px-3 w-1/3">
        <h1 className="font-medium text-2xl">
          <span className="nf nf-home"></span>My Tasks
        </h1>
        <p className="text-sm">Keep track of your daily tasks</p>
        <AddTodo />
        <div className="my-2">
          {todos && (
            <div className="mb-2 text-sm font-light">
              Total task: {todos.count}
            </div>
          )}

          {todos?.data.length > 0 &&
            todos.data.map((todo) => (
              <div
                key={todo.id}
                className={`mt-1 py-1 px-2 border flex items-center justify-between rounded-md ${todo.status === Status.done ? "line-through" : ""}`}
              >
                <p>{todo.name}</p>
                <div>
                  <UpdateTodo todos={todo} />
                  <DeleteTodo todos={todo} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
