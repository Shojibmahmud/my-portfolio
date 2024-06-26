// src/components/About.tsx
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const About: React.FC = () => {
	return (
		<Box p={4} id="about">
			<Heading as="h2" size="xl" mb={4}>
				About Me
			</Heading>
			<Text fontSize="lg">Write a brief introduction about yourself here.</Text>
		</Box>
	);
};

export default About;
