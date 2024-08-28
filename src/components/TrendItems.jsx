import { ItemCard } from "@/components/ItemCard";
import { HStack } from "@chakra-ui/react";

export function TrendItems() {
	return (
		<HStack h="100%" gap={10} overflow="auto">
			<ItemCard />
			<ItemCard />
			<ItemCard />
		</HStack>
	);
}
