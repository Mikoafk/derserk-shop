import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography, Stack } from "@mui/material";

import Item from "./Item";

export default function SectionItems({ icon, name }) {
	return (
		<Box>
			<Box className="mb-5 md:mb-10">
				<Typography
					variant="h4"
					fontWeight="bold"
					fontFamily="Montserrat"
					sx={{ fontSize: { xs: 17, md: 30 } }}
				>
					<i class={`${icon} md:mr-3 mr-1`}></i> {name}
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
					<Item name="Camisa oversize - GRK" price={60000} />
					<Item name="Camisa oversize - GRK" price={60000} />
					<Item name="Camisa oversize - GRK" price={60000} />
					<Item name="Camisa oversize - GRK" price={60000} />
				</Carousel>
			</Box>
		</Box>
	);
}
