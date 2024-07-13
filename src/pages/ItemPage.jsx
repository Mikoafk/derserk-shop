import React from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";

import Logo from "../static/img/derserk_white.png";

export default function ItemPage({}) {
	return (
		<Box className="mb-20">
			<Stack direction="row" justifyContent="center" sx={{ mt: 10 }}>
				<Box className="mr-32">
					<img src={Logo} className="h-96 w-96 bg-gray-100 mx-auto" />
					<Stack direction="row" className="mt-5" gap={1}>
						<img src={Logo} className="h-28 w-28 bg-gray-100" />
						<img src={Logo} className="h-28 w-28 bg-gray-100" />
						<img src={Logo} className="h-28 w-28 bg-gray-100" />
						<img src={Logo} className="h-28 w-28 bg-gray-100" />
						<img src={Logo} className="h-28 w-28 bg-gray-100" />
					</Stack>
				</Box>
				<Box>
					<Typography variant="h4" fontWeight="bold">
						Camisa Oversize - GRK
					</Typography>
					<Typography variant="h5" className="text-green-500" sx={{ mt: 1 }}>
						$ 60.000
					</Typography>
					<Box className="mt-10">
						<Typography variant="h6">Talla</Typography>
						<Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
							<Chip label="S" />
							<Chip label="M" />
							<Chip label="L" />
						</Stack>
					</Box>
					<Box className="mt-5">
						<Typography variant="h6">Color</Typography>
						<Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
							<Chip label="Blanco" />
							<Chip label="Negro" />
						</Stack>
					</Box>
					<Box className="mt-12">
						<a
							className="block w-fit mx-auto bg-green-500 rounded-lg py-5 px-10 text-center text-white text-xl"
							href={`https://api.whatsapp.com/send?phone=+573162709840&text=%C2%A1Hola!%20Quiero%20hacer%20un%20pedido%20de%20${"Camisa Oversize - GRK"}.%20Talla:%20${"S"}.%20Color:%20${"Blanco"}`}
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
