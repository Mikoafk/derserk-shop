import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
	return (
		<>
			<Navbar />
			<RouterProvider router={router} />
			<Footer />
		</>
	);
}
