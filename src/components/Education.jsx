import {
	Box,
	Container,
	Grid,
	GridItem,
	Heading,
	Text,
	useColorModeValue,
	Badge,
} from "@chakra-ui/react";
import React from "react";

const Education = () => {
	return (
		<Container
			m='0'
			maxW='100%'
			p='5'
			w='full'
			h='full'
			bg={useColorModeValue("gray.100", "gray.900")}>
			<GridItem colSpan={3} width='97%' mb='5'>
				<Heading
					size={"lg"}
					// fontFamily={"cursive"}
					color={useColorModeValue("black", "gray.400")}
					textAlign='left'>
					Education 📝
				</Heading>
			</GridItem>
			<Grid
				boxShadow={useColorModeValue("lg", "dark-lg")}
				_hover={{
					transform: "translateY(-5px)",
					transition: "all 0.2s ease-out",
					boxShadow: "0 10px 50px -20px #b0c4de",
				}}
				w='100%'
				p={8}
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
					lg: "repeat(2, 1fr)",
					xl: "repeat(3, 1fr)",
				}}
				gridGap={6}
				placeItems='center'
				bg={useColorModeValue("white", "#000000")}>
				<GridItem width={{ base: "full", md: "70%" }} h='100%'>
					<Box
						boxShadow={useColorModeValue("lg", "dark-lg")}
						h='100%'
						maxW='80rem'
						p='5'
						bg={useColorModeValue("gray.100", "#000")}
						border='2px dashed #666676'
						rounded='lg'>
						<Badge
							size={"md"}
							colorScheme='yellow'
							fontWeight='400'
							// // fontFamily={"cursive"}
							mb='4'>
							July 2022 - July 2023
						</Badge>
						<Heading
							size={"md"}
							// fontFamily={"cursive"}
							color={useColorModeValue("black", "gray.400")}>
							Full Stack Web Development
						</Heading>
						<Text
							fontSize='md'
							mt='4'
							mb='4'
							// fontFamily={"cursive"}
							color={useColorModeValue("#666676", "gray.400")}>
							Masai School - Bangalore, India <br /> Driven by
							Outcomes, Fuelled by Ambitions.
						</Text>
						<Badge
							size={"md"}
							fontWeight='400'
							colorScheme='green'
							// fontFamily={"cursive"}
							mb='4'>
							Full Time
						</Badge>
					</Box>
				</GridItem>
				<GridItem width={{ base: "full", md: "70%" }}>
					<Box
						boxShadow={useColorModeValue("lg", "dark-lg")}
						h='100%'
						maxW='80rem'
						rounded={"lg"}
						p='5'
						bg={useColorModeValue("gray.100", "#000")}
						border='2px dashed #666676'>
						<Badge
							size={"md"}
							colorScheme='yellow'
							fontWeight='400'
							// // fontFamily={"cursive"}
							mb='4'>
							Aug 2023 - present
						</Badge>
						<Heading
							size={"md"}
							// fontFamily={"cursive"}
							color={useColorModeValue("black", "gray.400")}>
							Sant Gahira Guru Vishwavidyalaya
						</Heading>
						<Text
							fontSize='md'
							mt='4'
							mb='4'
							// fontFamily={"cursive"}
							color={useColorModeValue("#666676", "gray.400")}>
							Bachelor of Computer Application, Chhattisgarh{" "}
							<br />
							Swami Vivekanand PG College
						</Text>
						<Badge
							size={"md"}
							fontWeight='400'
							colorScheme='green'
							// fontFamily={"cursive"}
							mb='4'>
							B.C.A (persuing)
						</Badge>
					</Box>
				</GridItem>
				<GridItem width={{ base: "full", md: "70%" }} h='100%'>
					<Box
						boxShadow={useColorModeValue("lg", "dark-lg")}
						h='100%'
						maxW='80rem'
						rounded={"lg"}
						p='5'
						bg={useColorModeValue("gray.100", "#000")}
						border='2px dashed #666676'>
						<Badge
							size={"md"}
							fontWeight='400'
							colorScheme='yellow'
							// fontFamily={"cursive"}
							mb='4'>
							July 2021 - May 2022
						</Badge>
						<Heading
							size={"md"}
							// fontFamily={"cursive"}
							color={useColorModeValue("black", "gray.400")}>
							Higher Secondary Education
						</Heading>
						<Text
							fontSize='md'
							mt='4'
							mb='4'
							// fontFamily={"cursive"}
							color={useColorModeValue("#666676", "gray.400")}>
							State Board, Chhattisgarh <br /> Vijay English
							Medium School
						</Text>
						<Badge
							size={"md"}
							fontWeight='400'
							colorScheme='green'
							// fontFamily={"cursive"}
							mb='4'>
							12th
						</Badge>
					</Box>
				</GridItem>
			</Grid>
		</Container>
	);
};

export default Education;
