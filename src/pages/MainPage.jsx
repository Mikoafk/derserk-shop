import React from "react";
import { Box, Container } from "@mui/material";

import Navbar from "../components/Navbar";
import SectionItems from "../components/SectionItems";

export default function MainPage() {
	return (
		<Box>
			<Navbar />
			<Container maxWidth="lg" className="pt-10">
				<SectionItems icon="fa-solid fa-fire fa-bounce text-red-500" name="¡Nuevo nuevo nuevo!" />
				<SectionItems icon="fa-solid fa-star fa-flip text-yellow-500" name="Destacados & favoritas" />
			</Container>
		</Box>
	);
}
