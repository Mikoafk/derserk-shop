import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";

import shirtList from "../static/shirts";
import Logo from "../static/img/derserk_white.png";

export default function ItemPage({}) {
	const { name } = useParams();
	const [indexPreview, setIndexPreview] = useState(0);
	const [selectedSize, setSelectedSize] = useState("");

	const data = shirtList.find((data) => data.name == name);

	return (
		<Box className="mb-20">
			<Stack direction="row" sx={{ mt: 10, width: "100%" }}>
				<Box className="basis-1/2">
					<img src={data.images[indexPreview]} className="bg-gray-100 mx-auto" />
					<Stack direction="row" justifyContent="center" className="mt-5" gap={1}>
						{data.images.map((img, i) => (
							<img key={i} src={img} style={{ border: (indexPreview === i) ? "solid 2px green" : "none" }}  className="h-28 w-28 bg-gray-100" onClick={() => setIndexPreview(i)} />
						))}
					</Stack>
				</Box>
				<Box className="basis-1/2 ml-20">
					<Typography variant="h4" fontWeight="bold">
						{data.name}
					</Typography>
					<Typography variant="h4" className="text-green-500" sx={{ mt: 3 }}>
						$ {data.price.toLocaleString()}
					</Typography>
					<Box className="mt-10">
						<Typography variant="h6">Talla</Typography>
						<Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
							{data.sizes.map((size, i) => (
								<Chip key={i} label={size} sx={{ fontSize: 25, border: (selectedSize === size) ? "solid 2px black" : "none" }} onClick={() => {setSelectedSize(size)}} />
							))}
						</Stack>
					</Box>
					{/* <Box className="mt-5">
						<Typography variant="h6">Color</Typography>
						<Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
							<Chip label="Blanco" />
							<Chip label="Negro" />
						</Stack>
					</Box> */}
					<Box className="mt-12">
						<a
							className="block w-full bg-green-500 rounded-lg py-5 px-10 text-center text-white text-xl"
							href={`https://api.whatsapp.com/send?phone=+573162709840&text=%C2%A1Hola!%20Quiero%20hacer%20un%20pedido%20de%20${data.name}.%20${selectedSize && `Talla:%20${selectedSize}`}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-brands fa-whatsapp text-3xl"></i>
							<span className="ml-3">Hacer pedido por WhatsApp</span>
						</a>
					</Box>
				</Box>
			</Stack>
		</Box>
	);
}
