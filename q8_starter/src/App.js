import "./styles.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { ItemDetails } from "./pages/ItemDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Protected } from "./pages/Protected";
import { useState } from "react";

export default function App() {
  const [loggedIn,setLoggedin] = useState(false);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      errorElement:<NotFound/>,
      children: [
        {
          index: true, element: <Home loggedIn={loggedIn} setLoggedin={setLoggedin}/>
        },
        {
          path: 'list',element:loggedIn?<List/>:<Home/>
        },
        {
          path: 'contact', element:loggedIn?<Contact/>:<Home/>
        },
        {
          path:'list/:itemId',element:loggedIn?<ItemDetails/>:<Home/>
        }
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
