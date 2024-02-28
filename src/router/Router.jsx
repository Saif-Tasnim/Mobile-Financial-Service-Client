import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import EntryPage from "../components/EnrtyPage/EntryPage";
import UserLayout from "../layout/UserLayout";
import Features from "../components/Features/Features";
import SendMoney from "../components/User/SendMoney/SendMoney";
import CashOut from "../components/User/CashOut/CashOut";
import UserTransaction from "../components/User/UserTransaction/UserTransaction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <EntryPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <Features />,
      },
      {
        path: "user/send-money",
        element: <SendMoney />,
      },
      {
        path: "user/cash-out",
        element: <CashOut />,
      },
      {
        path: "user/transaction",
        element: <UserTransaction />,
      },
    ],
  },
]);
