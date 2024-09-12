"use client";

import {
	Stack,
	Heading,
	FormControl,
	FormLabel,
	Select,
	CheckboxGroup,
	Checkbox,
	useCheckboxGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { ITEMS } from "@/lib/itemList";

const FILTER_SIZES = ["s", "m", "l", "xl"];

const SORTING_MODE = {
	relevancia: (a, b) => a - b,
	az: (a, b) => (a.title > b.title ? 1 : -1),
	za: (a, b) => (a.title < b.title ? 1 : -1),
	minmax: (a, b) => a.price - b.price,
	maxmin: (a, b) => b.price - a.price,
};

export function ItemSearch() {
	const [itemsList, setItemsList] = useState([]);
	const [orderFilter, setOrderFilter] = useState("relevancia");
	const { value, setValue, getCheckboxProps } = useCheckboxGroup({
		defaultValue: FILTER_SIZES,
	});

	useEffect(() => {
		let result = ITEMS.sort(SORTING_MODE[orderFilter]);

		result = result.filter((item) =>
			item.sizes.some((size) => value.includes(size.toLowerCase()))
		);

		setItemsList(result);
	}, [value, orderFilter]);

	const handleSortFilterChange = (e) => {
		setOrderFilter(e.target.value);
	};

	const handleSizesFilterChange = (values) => {
		setValue(values);
	};

	return (
		<Stack flexDirection={{ base: "column", md: "row" }}>
			<Stack
				h="fit-content"
				minW={300}
				p={6}
				bgColor="white"
				position="sticky"
				zIndex={1000}
				top={0}
			>
				<Heading as="h5" size="md" mb={2}>
					Filtros
				</Heading>
				<Stack gap={4}>
					<FormControl>
						<FormLabel>Orden</FormLabel>
						<Select onChange={handleSortFilterChange}>
							<option value="relevancia">Relevancia</option>
							<option value="az">Nombre: A - Z</option>
							<option value="za">Nombre: Z - A</option>
							<option value="minmax">Precio: menor a mayor</option>
							<option value="maxmin">Precio: mayor a menor</option>
						</Select>
					</FormControl>

					<FormControl>
						<FormLabel>Tallas</FormLabel>
						<CheckboxGroup value={value} onChange={handleSizesFilterChange}>
							<Stack flexDir="row" flexWrap="wrap" gap={3}>
								{FILTER_SIZES.map((size, index) => (
									<Checkbox key={index} {...getCheckboxProps({ value: size })}>
										{size.toUpperCase()}
									</Checkbox>
								))}
							</Stack>
						</CheckboxGroup>
					</FormControl>
				</Stack>
			</Stack>

			<ItemList items={itemsList} />
		</Stack>
	);
}
