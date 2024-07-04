import { RouterProvider } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { router } from "./router";

import { theme } from "./theme/default";

import Navbar from "./components/Navbar";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />
			<Container maxWidth="lg">
				<RouterProvider router={router} />
			</Container>
		</ThemeProvider>
	);
}
