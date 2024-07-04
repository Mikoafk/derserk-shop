import React from "react";
import { Container } from "@mui/material";

import SectionItems from "../components/SectionItems";

export default function MainPage() {
	return (
		<Container fixed className="pt-10">
			<SectionItems
				icon="fa-solid fa-fire fa-bounce text-red-500"
				name="¡Nuevo nuevo nuevo!"
			/>
			<SectionItems
				icon="fa-solid fa-star fa-flip text-yellow-500"
				name="Destacados & favoritas"
			/>
		</Container>
	);
}
