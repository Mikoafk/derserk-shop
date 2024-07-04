import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

import Logo from "../static/img/derserk_white.png";

export default function Item({ name, price }) {
	return (
		<Card component="a" href="/products/example" className="block w-64">
			<CardMedia component="img" height="4rem" width="4rem" image={Logo} className="bg-gray-50" />
			<CardContent className="bg-gray-100">
				<Box className="w-fit m-auto text-center">
					<Typography variant="body2" fontWeight="bold" fontFamily="Montserrat" sx={{ mb: 1 }}>
						{name}
					</Typography>
					<Typography variant="body1" color="green" fontFamily="Montserrat">
						$ {price.toLocaleString()}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
}
