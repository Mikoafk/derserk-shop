"use client";

import {
	Card,
	CardBody,
	Image,
	Heading,
	Text,
	Button,
	Center,
	Skeleton,
	Stack,
	HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaStar, FaFire } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";

export function ItemCard({
	data = {
		title: "Titulo",
		price: 65500,
		color: "Blanco",
		sizes: ["S", "M", "L", "XL"],
		images: ["https://placeholder.com/230"],
	},
	isSkeleton = false,
	isTrend = false,
}) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (typeof data != "undefined" && !isSkeleton) {
			setLoading(false);
		}
	}, [data, isSkeleton]);

	return (
		<Card size="sm" borderRadius="sm" borderWidth={1} borderColor="gray.200" boxShadow="none">
			<Skeleton isLoaded={!loading}>
				<Image
					bgColor="gray.50"
					borderTopRadius="sm"
					w="100%"
					objectFit="cover"
					aspectRatio="230/230"
					alt={data?.title + " preview image"}
					src={data?.images?.length > 0 ? data?.images[0] : null}
				/>
			</Skeleton>

			<CardBody>
				<Skeleton isLoaded={!loading}>
					<Heading as="h5" size="md" mb={1}>
						{data?.title || "Desconocido"}
					</Heading>
				</Skeleton>

				<Skeleton isLoaded={!loading}>
					<Text fontSize="sm" color="gray.500" mb={2.5}>
						{data?.color || "Desconocido"} -{" "}
						{data?.sizes?.length > 0
							? data?.sizes?.map((size) => size).join(", ")
							: "Desconocido"}
					</Text>
				</Skeleton>

				<Center justifyContent="space-between">
					<Skeleton isLoaded={!loading}>
						<HStack alignItems="center" gap={0.1}>
							<MdAttachMoney size={17} />
							<Text as="span" fontSize={17} mr={2}>
								{(data?.price || -1) / 1000}k
							</Text>
						</HStack>
					</Skeleton>
					<Skeleton isLoaded={!loading}>
						{isTrend ? (
							<FaFire color="red" size={20} className="fire-trend" />
						) : (
							<HStack justifyContent="center" gap={1}>
								{Array.from({ length: 5 }).map((_, index) => (
									<FaStar fontSize={12} key={index} />
								))}
							</HStack>
						)}
					</Skeleton>
				</Center>
			</CardBody>
		</Card>
	);
}
