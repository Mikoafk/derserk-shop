"use client";

import {
	Text,
	Stack,
	Heading,
	FormControl,
	FormLabel,
	Select,
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	CheckboxGroup,
	Checkbox,
	SimpleGrid,
	useCheckboxGroup,
} from "@chakra-ui/react";
import { ItemCard } from "./ItemCard";
import { useEffect, useState } from "react";

const FILTER_SIZES = ["S", "M", "L", "XL"];

const SORTING_MODE = {
	relevancia: (a, b) => a - b,
	az: (a, b) => (a.title > b.title ? 1 : -1),
	za: (a, b) => (a.title < b.title ? 1 : -1),
	minmax: (a, b) => a.price - b.price,
	maxmin: (a, b) => b.price - a.price,
};

export function ItemList() {
	const ITEMS = [
		{
			id: 0,
			title: "Supra",
			price: 60000,
			sizes: ["S", "M", "L"],
			images: ["https://placeholder.com/230"],
		},
		{
			id: 1,
			title: "HxH",
			price: 65000,
			sizes: ["M", "L", "XL"],
			images: ["https://placeholder.com/230"],
		},
		{
			id: 2,
			title: "Jhayco",
			price: 125000,
			sizes: ["S", "M", "L", "XL"],
			images: ["https://placeholder.com/230"],
		},
		{
			id: 3,
			title: "Anime",
			price: 20000,
			sizes: ["L", "XL"],
			images: ["https://placeholder.com/230"],
		},
		{
			id: 4,
			title: "GRK",
			price: 70000,
			sizes: ["S", "M", "L", "XL"],
			images: ["https://placeholder.com/230"],
		},
		{
			id: 5,
			title: "Tupac",
			price: 60000,
			sizes: ["S", "M", "XL"],
			images: ["https://placeholder.com/230"],
		},
	];

	const [itemsList, setItemsList] = useState([]);
	const [orderFilter, setOrderFilter] = useState("relevancia");
	const { value, setValue, getCheckboxProps } = useCheckboxGroup({
		defaultValue: ["s", "m", "l", "xl"],
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

					{/*<FormControl>
						<FormLabel>Precio</FormLabel>
						<RangeSlider aria-label={["min", "max"]} defaultValue={[0, 100]}>
							<RangeSliderTrack>
								<RangeSliderFilledTrack bg="black" />
							</RangeSliderTrack>
							<RangeSliderThumb boxSize={6} index={0}>
								<Text fontSize="xs" color="gray.600">
									60k
								</Text>
							</RangeSliderThumb>
							<RangeSliderThumb boxSize={6} index={1}>
								<Text fontSize="xs" color="gray.600">
									100k
								</Text>
							</RangeSliderThumb>
						</RangeSlider>
					</FormControl>*/}

					<FormControl>
						<FormLabel>Tallas</FormLabel>
						<CheckboxGroup value={value} onChange={handleSizesFilterChange}>
							<Stack flexDir="row" flexWrap="wrap" gap={3}>
								{FILTER_SIZES.map((size, index) => (
									<Checkbox
										key={index}
										{...getCheckboxProps({ value: size.toLowerCase() })}
									>
										{size}
									</Checkbox>
								))}
							</Stack>
						</CheckboxGroup>
					</FormControl>

					{/* <FormControl>
						<FormLabel>Color</FormLabel>
						<CheckboxGroup>
							<Stack flexDir="row" flexWrap="wrap">
								<Checkbox>S</Checkbox>
								<Checkbox>M</Checkbox>
								<Checkbox>L</Checkbox>
								<Checkbox>XL</Checkbox>
							</Stack>
						</CheckboxGroup>
					</FormControl> */}
				</Stack>
			</Stack>

			<SimpleGrid flexGrow={1} minChildWidth={230} gap={4} py={10} px={5}>
				{itemsList
					? itemsList.map((item) => <ItemCard key={item.id} data={item} />)
					: Array.from({ length: 6 }).map((x, index) => (
							<ItemCard key={index} isSkeleton />
					  ))}
			</SimpleGrid>
		</Stack>
	);
}
