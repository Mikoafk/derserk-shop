import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Item from "./Item";

export default function SectionItems({ icon, name }) {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

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
				<Carousel responsive={responsive}>
					<Item name="Camisa oversize - GRK" price={60000} />
					<Item name="Camisa oversize - GRK" price={60000} />
					<Item name="Camisa oversize - GRK" price={60000} />
					<Item name="Camisa oversize - GRK" price={60000} />
				</Carousel>
			</Box>
		</Box>
	);
}
