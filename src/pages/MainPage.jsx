import React from "react";
import { Container, Grid } from "@mui/material";

import Item from "../components/Item";
import shirtList from "../static/shirts";

// import SectionItems from "../components/SectionItems";

export default function MainPage() {
	return (
		<Container maxWidth="lg" className="pt-10">
			<Grid container spacing={2}>
				{shirtList.map((data, i) => (
					<Grid item xs={6} md={4}>
						<Item key={i} name={data.name} price={data.price} images={data.images} />
					</Grid>
				))}
			</Grid>
			{/* <SectionItems
				icon="fa-solid fa-fire fa-bounce text-red-500"
				name="¡Nuevo nuevo nuevo!"
			/>
			<SectionItems
				icon="fa-solid fa-star fa-flip text-yellow-500"
				name="Destacados & favoritas"
			/> */}
		</Container>
	);
}
