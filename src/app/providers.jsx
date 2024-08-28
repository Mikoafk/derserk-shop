"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { light } from "@/theme/light";

export function Providers({ children }) {
	return <ChakraProvider theme={light}>{children}</ChakraProvider>;
}
