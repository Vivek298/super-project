import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FormRender from "../components/FormRender";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-4 ">
          <DndProvider backend={HTML5Backend}>
            <FormRender />
          </DndProvider>
        </main>
      </div>
    </div>
  );
};

export default Home;
