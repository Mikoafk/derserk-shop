import Image from "next/image";
import { Box, Center, Text, HStack, Heading, Divider } from "@chakra-ui/react";

export function Navbar() {
	return (
		<Box bgColor="black" w="100%" py={6} px={5}>
			<Center w="100%">
				<HStack>
					<Image
						width={40}
						height={40}
						alt="icon derserk"
						src="/static/img/ICON_DSK_WHITE.png"
					/>
					<div>
						<Heading as="h6" color="white" fontSize={20}>
							DERSERK
						</Heading>
						<Divider />
						<Text
							as="span"
							color="whiteAlpha.800"
							fontSize={12}
							fontFamily="sora, sans-serif"
						>
							Be The One
						</Text>
					</div>
				</HStack>
			</Center>
		</Box>
	);
}
