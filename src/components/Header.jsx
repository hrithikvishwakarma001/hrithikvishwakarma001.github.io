import {
	Box,
	Button,
	Container,
	Grid,
	GridItem,
	Heading,
	Image,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
	return (
		<Container
			m='0'
			maxW='100%'
			id='#'
			p='5'
			w='full'
			h='full'
			bg={useColorModeValue("gray.100", "gray.900")}>
			<Grid
				boxShadow={useColorModeValue("lg", "dark-lg")}
				_hover={{
					transform: "translateY(-5px)",
					transition: "all 0.2s ease-out",
					boxShadow: "0 10px 50px -20px #b0c4de",
				}}
				w='100%'
				h='auto'
				p={4}
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(3, 1fr)",
				}}
				flexDirection={{ base: "column-reverse", md: "row" }}
				placeItems='center'
				bg={useColorModeValue("white", "#000000")}
				mt={20}>
				<GridItem colSpan='2' width={{ base: "full", md: "90%" }}>
					<Box maxW='80rem'>
						<Heading
							fontFamily={"caveat"}
							size={"2xl"}
							fontWeight='extrabold'
							mb={4}
							color={useColorModeValue("black", "gray.400")}
							id='user-detail-name'>
							Hi, I'm Hrithik Vishwakarma
						</Heading>
						<Text
							id='user-detail-intro'
							fontSize='xl'
							mt='30px'
							// fontFamily={"cursive"}
							color={useColorModeValue("black", "gray.400")}>
							A fullstack focused web developer building the
							frontend of websites and web applications that leads
							to the success of the overall product.
						</Text>
						<a
							href='https://drive.google.com/file/d/1YY07wH41LhM9WpmetL3n-E4c5MoTxfyX/view?usp=share_link'
							target='_blank'
							rel='noreferrer'>
							<Button
								size='lg'
								mt='35px'
								pr={4}
								color={useColorModeValue("black", "gray.400")}
								id='resume-button-1'>
								My Resume
								<Image
									src='https://em-content.zobj.net/source/noto-emoji-animations/344/fire_1f525.gif'
									w='30px'
									mb='1'
									ml='1'
								/>
							</Button>
						</a>
					</Box>
				</GridItem>
				<GridItem mt={4} mb={4} width={{ base: "full", md: "20rem" }}>
					<Image src='pic.jpg' class='home-img' alt='hrithik' />
				</GridItem>
			</Grid>
		</Container>
	);
};

export default Header;
