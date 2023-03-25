import { Flex, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

const navItems = ({ text, icon, location,close,className,id }) => {
	// const navigate = useNavigate();
	return (
		<a
			id={id}
			className={className}
			rel='noreferrer'
			target={text === "Resume" ? "_blank" : "_self"}
			href={
				text === "Resume"
					? "https://drive.google.com/file/d/1IwC2GA6rCVmCCzWRN82bWFFqpYDpCDqo/view?usp=share_link"
					: location
			}
			textunderlineoffset='5px'>
			<Flex
				onClick={close}
				cursor='pointer'
				w={"80%"}
				p='4'
				mt='5'
				mx='6'
				py='2'
				rounded={"md"}
				alignItems='center'
				// _hover={{
				// 	bg: useColorModeValue("gray.200", "#111111"),
				// }}
			>
				<Icon
					as={icon}
					fontSize='25'
					mr='5'
					// color={useColorModeValue("gray.700", "gray.200")}
				/>
				<Text
					fontWeight={700}
					fontSize='18'
					// color={useColorModeValue("gray.600", "gray.200")}
				>
					{text}
				</Text>
			</Flex>
		</a>
	);
};

export default navItems;
