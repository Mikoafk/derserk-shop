import { createBrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ItemPage from "./pages/ItemPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />,
	},
	{
		path: "/products/:id",
		element: <ItemPage />,
	},
	{
		path: "*",
		element: <h1>No encontrado!</h1>,
	},
]);
