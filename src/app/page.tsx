import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Header from "./components/Header";
import Todo from "./components/Todo";
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

const Home = async() => {
    const todos: TodosResponse = await getTodos();

  return (
    <main>
      <Navbar />
      <Toaster richColors />
      <Header todos={todos} />
      <Todo todos={todos} />
    </main>
  );
};

export default Home;