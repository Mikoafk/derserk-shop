import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata = {
	title: "Derserk Shop",
	description: "Be The One.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
