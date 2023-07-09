import React from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper";

import {
	Badge,
	Button,
	Container,
	Image,
	List,
	ListIcon,
	ListItem,
	Stack,
	useBreakpointValue,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle, FaGithub } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { CalendarIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { GoTools } from "react-icons/go";
const projects = [
	{
		id: 1,
		tools: "HTML | CSS | JavaScript",
		tag: "Ecommerce",
		span: "2 days",
		website: "Grill In",
		img: "grill.png",
		typePlan: "Grill In",
		github: "https://github.com/hrithikvishwakarma001/Grill-inn",
		link: "https://shiny-cranachan-408e6a.netlify.app/",
		deploy: "https://shiny-cranachan-408e6a.netlify.app/",
	},
	{
		id: 2,
		tools: "HTML | CSS | JavaScript",
		tag: "Ecommerce",
		span: "5 days",
		website: "Clone of geekbuying.com",
		img: "techx.png",
		typePlan: "Tech-X",
		github: "https://github.com/hrithikvishwakarma001/lackadaisical-look-2573",
		link: "https://www.geekbuying.com/",
		deploy: "https://chimerical-mousse-3a41fa.netlify.app/",
	},
	{
		id: 3,
		tools: "HTML | CSS | JavaScript",
		tag: "Ecommerce",
		span: "5 days",
		website: "Clone of mythrersa.com",
		img: "clothingo.png",
		typePlan: "Clothingo",
		github: "https://github.com/hrithikvishwakarma001/complex-oranges-7381",
		link: "https://www.mytheresa.com/int_en/women.html",
		deploy: "https://luxury-vacherin-56d222.netlify.app/",
	},
	{
		id: 4,
		tools: "JavaScript",
		tag: "Snippets-extension",
		span: "3 days",
		website: "Extension marketplace",
		img: "snippets.png",
		typePlan: "snippets",
		github: "https://github.com/hrithikvishwakarma001/snippets-extension",
		link: "https://marketplace.visualstudio.com/items?itemName=hrithikvishwakarma001.fetch-axios-snippets",
		deploy: "https://marketplace.visualstudio.com/items?itemName=hrithikvishwakarma001.fetch-axios-snippets",
	},
	{
		id: 5,
		tools: "Javascript | React JS | Chakra UI",
		tag: "Booking site",
		span: "5 days",
		website: "Clone of avis.com",
		img: "rentovento.png",
		typePlan: "Rentovento",
		github: "https://github.com/hrithikvishwakarma001/unkempt-snow-4804",
		link: "https://www.avis.com/en/home",
		deploy: "https://rentovento.vercel.app",
	},
	{
		id: 6,
		tools: "Typescript | React JS | Chakra UI",
		tag: "Home decor site",
		span: "5 days",
		website: "Clone of dollartree.com",
		img: "deco.jpg",
		typePlan: "Deco-ninja",
		github: "https://github.com/hrithikvishwakarma001/potent-scent-4991.git",
		link: "https://www.dollartree.com/",
		deploy: "https://deco-ninja.vercel.app",
	},
	{
		id: 7,
		tools: "Javascript | React JS | Chakra UI",
		tag: "Make-up Products site",
		span: "5 days",
		website: "Clone of nykaa.com",
		img: "mykaa.png",
		typePlan: "Mykaa",
		github: "https://github.com/hrithikvishwakarma001/bitter-level-627.git",
		link: "https://www.nykaa.com/?root=logo",
		deploy: "https://mykaa.vercel.app/",
	},
	{
		id: 8,
		tools: "React JS | Node JS | MognoDB | Express JS",
		tag: "Clothings fashion site",
		span: "5 days",
		website: "Clone of koovs.com",
		img: "clotho.png",
		typePlan: "Clotho",
		github: "https://github.com/hrithikvishwakarma001/Koovs-clone-Clotho",
		link: "https://www.koovs.com/",
		deploy: "https://clotho.vercel.app/",
	},
	{
		id: 9,
		tools: "React JS | Node JS | TypeScript | Tailwind CSS",
		tag: "Fitness site (Hackathon)",
		span: "3 days",
		website: "Self designed project",
		img: "fitfustion.png",
		typePlan: "Fitfusion",
		github: "https://github.com/hrithikvishwakarma001/fitfusion-hackathon",
		link: "https://fitfusion.vercel.app/",
		deploy: "https://fitfusion.vercel.app/",
	},
	{
		id: 10,
		tools: "Javascript | React JS | Chakra UI",
		tag: "VidsCoin (Company task)",
		span: "2 days",
		website: "Figma to React JS",
		img: "vidscoin.png",
		typePlan: "VidsCoin",
		github: "https://github.com/hrithikvishwakarma001/vidscoin",
		link: "https://www.figma.com/file/e08uWkzw9Vk5PVszbrrdKi/Vidscoin?type=design&node-id=0-1&mode=design",
		deploy: "https://vidscoin.vercel.app/",
	},
];
const reverseProjects = projects.reverse();
const PackageTier = ({
	img,
	typePlan,
	github,
	deploy,
	tag,
	span,
	website,
	link,
	tools,
}) => {
	return (
		<Stack
			className='project-card'
			cursor='grab'
			onMouseEnter={(e) => {
				e.currentTarget.style.transform = "scale(1.01)";
				e.currentTarget.style.transition = "all 0.2s ease-in-out";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.transform = "scale(1)";
				e.currentTarget.style.transition = "all 0.2s ease-in-out";
			}}
			// p={3}
			justifyContent={{
				base: "center",
				md: "space-around",
			}}
			direction={{
				base: "column",
				md: "column",
				lg: "row",
			}}
			transition={"all 0.2s ease-in-out"}
			alignItems={{ md: "center" }}>
			<Image
				src={img}
				w={{ base: "100%", md: "20rem" }}
				h='185px'
				objectFit={"cover"}
				alt={typePlan}
				border='2px dashed gray'
				p='2'
			/>

			<List spacing={3} textAlign='start' className='project-tech-stack'>
				<ListItem display='flex' alignItems={"center"}>
					<ListIcon as={ExternalLinkIcon} color='green.500' />
					<a href={link} target='_blank' rel='noreferrer'>
						{website}
					</a>
				</ListItem>
				<ListItem
					display='flex'
					alignItems={"center"}
					className='project-description"'>
					<ListIcon as={FaCheckCircle} color='green.500' />
					<p>{tag}</p>
				</ListItem>
				<ListItem display='flex' alignItems={"center"}>
					<ListIcon as={CalendarIcon} color='green.500' />
					{span}
				</ListItem>
				<ListItem
					display='flex'
					alignItems={"center"}
					className='project-tech-stack'>
					<ListIcon as={GoTools} color='green.500' />
					{tools}
				</ListItem>
			</List>
			<Badge
				fontSize={"1rem"}
				fontWeight='400'
				px='2'
				py='2'
				colorScheme='purple'
				textAlign='start'
				maxW={{ base: "100%", md: "325px" }}
				className='project-title'>
				{typePlan}
			</Badge>
			<Stack direction={{ base: "column", md: "row" }} spacing={4}>
				<Button
					className='project-github-link'
					as='a'
					target='_blank'
					cursor='pointer'
					href={github}
					size='md'
					boxShadow={useColorModeValue("lg", "purple.400")}
					maxW={{ base: "100%", md: "325px" }}>
					<FaGithub fontSize={"20px"} /> &nbsp; GitHub
				</Button>
				<IconContext.Provider
					value={{
						color: "#7CFCOO",
						className: "global-class-name",
					}}>
					<Button
						className='project-deploy-link'
						as='a'
						target='_blank'
						cursor='pointer'
						href={deploy}
						size='md'
						boxShadow={useColorModeValue("lg", "purple.400")}
						maxW={{ base: "100%", md: "325px" }}>
						<IoRocketSharp
							color={useColorModeValue("black", "limegreen")}
							fontSize={"20px"}
						/>{" "}
						&nbsp;
						{tag === "Snippets-extension" ? "Demo" : "Live"}
					</Button>
				</IconContext.Provider>
			</Stack>
		</Stack>
	);
};

export default function ScrollContainer() {
	const smallScreen = useBreakpointValue({ base: true, md: false });
	return (
		<Container maxW={{ base: "100%", md: "100%", lg: "100%" }}>
			<Swiper
				direction={smallScreen ? "horizontal" : "vertical"}
				slidesPerView={smallScreen ? 1 : 2}
				spaceBetween={20}
				mousewheel={true}
				modules={[Mousewheel]}
				className='mySwiper'>
				{reverseProjects.map((project) => (
					<SwiperSlide>
						<PackageTier {...project} />
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
}


