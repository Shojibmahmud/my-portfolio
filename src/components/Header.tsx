// src/components/Header.tsx
import React from "react";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

const Header: React.FC = () => {
	return (
		<Box bg="teal.500" p={4} color="white">
			<Flex justify="space-between" align="center">
				<Heading as="h1" size="lg">
					My Portfolio
				</Heading>
				<Flex>
					<Link href="#about" mx={2}>
						About
					</Link>
					<Link href="#projects" mx={2}>
						Projects
					</Link>
					<Link href="#contact" mx={2}>
						Contact
					</Link>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Header;
