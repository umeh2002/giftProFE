import { createBrowserRouter } from "react-router-dom";
import Layout from "../block/Layout";
import Landing from "../pages/Landing";
import Register from "../auth/Register";
import SignIn from "../auth/SignIn";
import Otp from "../auth/Otp";
import Message from "../pages/Message";
import OtpMessage from "../pages/OtpMessage";
import Homepage from "../pages/Homepage";
import PrivateRoute from "./PrivateRouter";
import TransactionHistory from "../pages/TransactionHistory";
import Send from "../pages/Send";
import Recieve from "../pages/Recieve";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/:token/verify-account",
    element: <SignIn />,
  },
  {
    path: "/:token/first-verify",
    element: <Otp />,
  },
  {
    path: "/congrats",
    element: <Message />,
  },
  {
    path: "/message",
    element: <OtpMessage />,
  },
  {
    path: "/history",
    element: <TransactionHistory />,
  },
  {
    path: "/transfer",
    element: <Send />,
  },
  {
    path: "/withdraw",
    element: <Recieve />,
  },
  {
    path: "/homepage",
    element: (
      <PrivateRoute>
        <Homepage />,
      </PrivateRoute>
    ),
  },
]);
