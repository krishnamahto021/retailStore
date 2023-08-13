import "./styles.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Home /> , basename:'/home'
    },
    {
      path: '/list', element: <List />
    },
    {
      path: '/contact', element: <Contact />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
