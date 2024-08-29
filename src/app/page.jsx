import { ItemSearch } from "@/components/ItemSearch";
import { TrendItems } from "@/components/TrendItems";
import { Box, Center, Heading } from "@chakra-ui/react";

export default function RootPage() {
	return (
		<>
			<Box bgColor="gray.100" h="calc(100vh - 97px)" pt={10} pb={10}>
				<Center h="100%" flexDir="column">
					<Center mb={5}>
						<Heading as="h5" size="sm" letterSpacing={5}>
							DESTACADOS
						</Heading>
					</Center>
					<Center flex={1}>
						<TrendItems />
					</Center>
				</Center>
			</Box>

			<ItemSearch />
		</>
	);
}
