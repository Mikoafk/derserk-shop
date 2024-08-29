import { Center, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { ItemCard } from "./ItemCard";

export function ItemList({ items = [] }) {
	return items?.length > 0 ? (
		<SimpleGrid flexGrow={1} minChildWidth={230} gap={4} py={10} px={5}>
			{items.map((item) => (
				<ItemCard key={item.id} data={item} />
			))}
		</SimpleGrid>
	) : (
		<Center w="100%" h="100vh" flexDir="column">
			<Heading>Sin resultados</Heading>
			<Text>No hay productos disponibles :(</Text>
		</Center>
	);
}
