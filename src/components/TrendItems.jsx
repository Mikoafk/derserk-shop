import { ItemCard } from "@/components/ItemCard";
import { ITEMS } from "@/lib/itemList";
import { SimpleGrid } from "@chakra-ui/react";

export function TrendItems() {
	return (
		<SimpleGrid minChildWidth={230} h="100%" gap={10} overflow="auto">
			{ITEMS.filter((i) => i.isTrend).map((item) => (
				<ItemCard key={item.id} data={item} isTrend />
			))}
		</SimpleGrid>
	);
}
