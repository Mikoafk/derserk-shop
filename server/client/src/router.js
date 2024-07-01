import { createBrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "*",
        element: <h1>No encontrado!</h1>,
        errorElement: <ErrorPage />,
    },
]);