import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

import Logo from "../static/img/derserk_white.png";

export default function Item({ name, price, images }) {
	return (
		<Card component={Link} to={`/products/${name}`} className="block w-full">
			<CardMedia component="img" height="4rem" width="4rem" image={images[0] || Logo} className="bg-gray-50" />
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
