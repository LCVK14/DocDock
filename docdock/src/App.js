import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Chat from "./Components/Chat";
import Prescription from "./Components/Prescription";
import Contact from "./Components/Contact";

const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  { path: "/prescription", element: <Prescription></Prescription> },
  { path: "/chat", element: <Chat></Chat> },
  { path: "/contact", element: <Contact></Contact> },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
