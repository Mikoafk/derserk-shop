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
					<Box className="mt-5 mb-3" sx={{ display: { xs: "none", md: "flex" } }}>
						<Button sx={{ display: "block", color: "white", px: 3 }}>Oversize</Button>
                        <Divider orientation="vertical" flexItem />
						<Button sx={{ display: "block", color: "white", px: 3 }}>Regular</Button>
                        <Divider orientation="vertical" flexItem />
						<Button sx={{ display: "block", color: "white", px: 3 }}>Anime</Button>
                        <Divider orientation="vertical" flexItem />
						<Button sx={{ display: "block", color: "white", px: 3 }}>Buzos</Button>
                        <Divider orientation="vertical" flexItem />
						<Button sx={{ display: "block", color: "white", px: 3 }}>Destacados</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
