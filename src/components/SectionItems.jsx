import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography, Stack } from "@mui/material";

import Item from "./Item";

export default function SectionItems({ icon, name }) {
	return (
		<Box>
			<Box className="mb-10">
				<Typography variant="h4" fontWeight="bold" fontFamily="Montserrat">
					<i class={`${icon} mr-3`}></i> {name}
				</Typography>
			</Box>
			<Box className="mb-16">
				<Carousel
					navButtonsAlwaysVisible={true}
					fullHeightHover={false}
					autoPlay={false}
					animation="slide"
					duration={500}
					interval={5000}
				>
					<Stack direction="row" spacing={2} justifyContent="center">
						<Item name="Camisa oversize - GRK" price={60000} />
						<Item name="Camisa oversize - GRK" price={60000} />
						<Item name="Camisa oversize - GRK" price={60000} />
						<Item name="Camisa oversize - GRK" price={60000} />
					</Stack>
					<Stack direction="row" spacing={2} justifyContent="center">
						<Item name="Camisa oversize - GRK" price={60000} />
						<Item name="Camisa oversize - GRK" price={60000} />
						<Item name="Camisa oversize - GRK" price={60000} />
						<Item name="Camisa oversize - GRK" price={60000} />
					</Stack>
				</Carousel>
			</Box>
		</Box>
	);
}
