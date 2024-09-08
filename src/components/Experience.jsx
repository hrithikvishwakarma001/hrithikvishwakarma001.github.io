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

const experienceItem = [
  {
    date: "9 oct 2023 - Present",
    title: "Software Development Engineer - 1 at CoinSwitch",
    description:
      "CoinSwitch is now India's largest crypto app with over 2 Crore+ users and more than 500 employees.",
    type: "Full Time",
  },
].reverse();

const Experience = () => {
  return (
    <Container
      m="0"
      maxW="100%"
      p="5"
      w="full"
      h="full"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <GridItem colSpan={3} width="97%" mb="5">
        <Heading
          fontSize="4xl"
          color={useColorModeValue("black", "gray.400")}
          fontFamily={"Signika Negative"}
          mb={4}
          textAlign="left"
        >
          Experience 👨🏻‍💻
        </Heading>
      </GridItem>
      <Grid
        boxShadow={useColorModeValue("lg", "dark-lg")}
        _hover={{
          transform: "translateY(-5px)",
          transition: "all 0.2s ease-out",
          boxShadow: "0 10px 50px -20px #b0c4de",
        }}
        w="100%"
        p={8}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gridGap={6}
        placeItems="center"
        bg={useColorModeValue("white", "#000000")}
      >
        {experienceItem.map((item, index) => (
          <ExperienceItem
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
            type={item.type}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Experience;
const ExperienceItem = ({ date, title, description, type }) => {
  return (
    <GridItem width={{ base: "full", md: "100%" }} h="100%">
      <Box
        boxShadow={useColorModeValue("lg", "dark-lg")}
        h="100%"
        p="5"
        bg={useColorModeValue("gray.100", "#000")}
        border="2px dashed #666676"
        rounded="lg"
      >
        <Badge size="md" colorScheme="yellow" fontWeight="400" mb="4">
          {date}
        </Badge>
        <Heading size="md" color={useColorModeValue("black", "gray.400")}>
          {title}
        </Heading>
        <Text
          fontSize="md"
          mt="4"
          mb="4"
          color={useColorModeValue("#666676", "gray.400")}
        >
          {description}
        </Text>
        <Badge size="md" fontWeight="400" colorScheme="green" mb="4">
          {type}
        </Badge>
      </Box>
    </GridItem>
  );
};
