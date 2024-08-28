import { extendTheme } from "@chakra-ui/react";
import "@fontsource/rubik";
import "@fontsource/sora";

export const light = extendTheme({
	fonts: {
		heading: "Sora, roboto, sans-serif",
		body: "Rubik, sans-serif",
	},
});
