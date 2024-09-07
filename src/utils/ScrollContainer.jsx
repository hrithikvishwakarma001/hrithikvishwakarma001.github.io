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
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
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
    desc: "Grill In is a restaurant website where you can order food online. It is a single page website with a menu, contact, and home page. It is a fully responsive website.",
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
    desc: "Geekbuying leading online shop selling a wide range of consumer electronic gadgets. Buy e-bikes, e-scooter, 3d printers, vacuum cleaners, tv-boxes etc.",
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
    desc: "Clothingo clone of mytheresa is the finest edit in luxury fashion for women, men and kids. Mytheresa have over 200 of the best international designers ",
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
    desc: "Rentovento clone of avis.com is Car Sales offers several finance options designed to fit your individual needs. To take advantage of our best car finance deals",
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
    desc: "Deco-ninja clone of Dollar Tree, products perfect for restaurants, businesses, schools, churches, party planners & anyone looking for quality supplies ",
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
    desc: "Mykaa clone of nykaa, buy cosmetics & beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products & more from top beauty brands.",
  },
  {
    id: 8,
    tools: "Chakra ui | MERN Stack Project",
    tag: "Clothings fashion site",
    span: "5 days",
    website: "Clone of koovs.com",
    img: "clotho.png",
    typePlan: "Clotho",
    github: "https://github.com/hrithikvishwakarma001/Koovs-clone-Clotho",
    link: "https://www.koovs.com/",
    deploy: "https://clotho.vercel.app/",
    desc: "Clotho clone of KOOVS is the one-stop online fashion destination for all your fashion needs. Inspired by the international runways and the global street.",
  },
  {
    id: 9,
    tools: "Tailwind CSS | MERN Stack Project",
    tag: "Fitness site (Hackathon)",
    span: "3 days",
    website: "Self designed project",
    img: "fitfustion.png",
    typePlan: "Fitfusion",
    github: "https://github.com/hrithikvishwakarma001/fitfusion-hackathon",
    link: "https://fitfusion.vercel.app/",
    deploy: "https://fitfusion.vercel.app/",
    desc: "FitFusion is a fitness dashboard web application that provides users with a comprehensive platform to track and manage their fitness goals.",
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
    desc: "VidsCoin a powerful and flexible creator static website solution designed to showcase your content and engage your audience.",
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
    deploy:
      "https://marketplace.visualstudio.com/items?itemName=hrithikvishwakarma001.fetch-axios-snippets",
    desc: "This extension contains a collection of useful code snippets for fetching data using fetch and axios libraries in JavaScript.",
  },
  {
    id: 11,
    tools: "OpenAI | MERN Stack Project",
    tag: "CloseAi - Image Generator",
    span: "1 week",
    website: "OpenAI API",
    img: "closeai.png",
    typePlan: "CloseAi",
    github:
      "https://github.com/hrithikvishwakarma001/CloseAI-Imaginary-Image-AI-generator.git",
    link: "https://openai.com/blog/openai-api",
    deploy: "https://closeai.vercel.app/",
    desc: "CloseAi is a web application that leverages the power of OpenAI API to generate imaginary images. With CloseAi, you can create unique and captivating images that don't exist in reality.",
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
  desc,
}) => {
  return (
    <Stack
      className="project-card"
      cursor="grab"
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
      alignItems={{ md: "center" }}
      //   border="1px solid red"
    >
      <Image
        src={img}
        w={{ base: "100%", md: "20rem" }}
        h="170px"
        objectFit={"cover"}
        alt={typePlan}
        border="2px dashed gray"
        p="2"
      />

      <List
        spacing={3}
        textAlign="start"
        className="project-tech-stack"
        display={["block", "none", "none", "block"]}
      >
        <ListItem display="flex" alignItems={"center"}>
          <ListIcon as={ExternalLinkIcon} color="green.500" />
          <a href={link} target="_blank" rel="noreferrer">
            {website}
          </a>
        </ListItem>
        <ListItem
          display="flex"
          alignItems={"center"}
          className='project-description"'
        >
          <ListIcon as={FaCheckCircle} color="green.500" />
          <p>{tag}</p>
        </ListItem>
        <ListItem display="flex" alignItems={"center"}>
          <ListIcon as={CalendarIcon} color="green.500" />
          {span}
        </ListItem>
        <ListItem
          display="flex"
          alignItems={"center"}
          className="project-tech-stack"
        >
          <ListIcon as={GoTools} color="green.500" />
          {tools}
        </ListItem>
      </List>
      <Flex flexDir={"column"} maxW={"250px"}>
        <Badge
          fontSize={"1rem"}
          fontWeight="400"
          px="2"
          py="2"
          colorScheme="purple"
          textAlign="start"
          maxW={{ base: "100%", md: "325px" }}
          className="project-title"
          letterSpacing={".5rem"}
        >
          {typePlan} 🎉
        </Badge>
        <Text noOfLines={4}>{desc}</Text>
      </Flex>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Button
          className="project-github-link"
          as="a"
          target="_blank"
          cursor="pointer"
          href={github}
          size="md"
          boxShadow={useColorModeValue("lg", "purple.400")}
          maxW={{ base: "100%", md: "325px" }}
        >
          <FaGithub fontSize={"20px"} /> &nbsp; GitHub
        </Button>
        <IconContext.Provider
          value={{
            color: "#7CFCOO",
            className: "global-class-name",
          }}
        >
          <Button
            className="project-deploy-link"
            as="a"
            target="_blank"
            cursor="pointer"
            href={deploy}
            size="md"
            boxShadow={useColorModeValue("lg", "purple.400")}
            maxW={{ base: "100%", md: "325px" }}
          >
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
        className="mySwiper"
        style={{
          height: smallScreen ? "580px" : "380px",
        }}
      >
        {reverseProjects.map((project) => (
          <SwiperSlide>
            <PackageTier {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
