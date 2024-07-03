import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { router } from "./router";

import { theme } from "./theme/default";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}
