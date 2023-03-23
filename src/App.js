import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/users/add",
    element: <AddUser />,
  },
  {
    path: "/update/:id",
    element: <UpdateUser />,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
