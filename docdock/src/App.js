import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Chat from "./Components/Chat";
import Prescription from "./Components/Prescription";
import Contact from "./Components/Contact";
import Checkout from "./Components/Checkout";
import Payment from "./Components/Payment";

const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  { path: "/prescription", element: <Prescription></Prescription> },
  { path: "/chat", element: <Chat></Chat> },
  { path: "/contact", element: <Contact></Contact> },
  { path: "/checkout/:name/:active/:usage/:dosage", element: <Checkout></Checkout> },
  { path: "/checkout/payment", element: <Payment></Payment> },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
