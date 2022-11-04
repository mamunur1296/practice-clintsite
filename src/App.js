import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Post from "./component/Post";
import Display from "./component/Display";
import Update from "./component/Update";
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
        element: <Update></Update>,
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
