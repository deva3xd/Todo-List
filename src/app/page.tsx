import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Header from "./components/Header";
import Todo from "./components/Todo";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Toaster />
      <Header />
      <Todo />
    </main>
  );
};

export default Home;