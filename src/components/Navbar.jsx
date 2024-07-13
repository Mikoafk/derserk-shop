import { AppBar, Container, Toolbar, Typography, Box, Button, Divider } from "@mui/material";
import React from "react";

import Logo from "../static/img/derserk_white.png";

export default function Navbar() {
	return (
		<AppBar position="static" color="primary">
			<Container maxWidth="xl">
				<Toolbar className="flex flex-col mt-6">
					<Box>
						<Typography
							variant="h6"
                            fontSize={25}
							noWrap
							sx={{
								display: "inline",
								width: "fit-content",
								fontFamily: "Montserrat",
								m: "0 auto",
							}}
						>
							<Box component="a" href="/" className="block m-auto w-fit">
								D E R<img src={Logo} alt="logo_derserk" className="inline h-9" />E R
								K
							</Box>
						</Typography>
					</Box>
					<Box className="mt-5 mb-3">
						<Typography>- Be the one -</Typography>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
