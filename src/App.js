import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Post from "./component/Post";
import Display from "./component/Display";
import Update from "./component/Update";
import Login from "./component/Login";
import Regester from "./component/Regester";
import Checkout from "./component/Checkout";
import Protectedroute from "./Rouer/Protectedroute";
import Orders from "./component/Orders";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Post></Post>,
      },
      {
        path: "/display",
        element: <Display></Display>,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params.id}`),
        element: (
          <Protectedroute>
            <Update></Update>
          </Protectedroute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/ragister",
        element: <Regester></Regester>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkoutbyid/${params.id}`),
        element: (
          <Protectedroute>
            <Checkout></Checkout>
          </Protectedroute>
        ),
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
