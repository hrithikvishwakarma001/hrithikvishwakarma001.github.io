import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const SkillsArray = [
  { title: "React JS", icon: "react.png" },
  { title: "Next JS", icon: "next.webp" },
  { title: "Remix React", icon: "remix.png" },
  { title: "JavaScript", icon: "js.png" },
  { title: "Python", icon: "python.png" },
  { title: "TypeScript", icon: "typescript.png" },
  { title: "Node JS", icon: "node.png" },
  { title: "Express JS", icon: "express.png" },
  { title: "Mongo DB", icon: "mongodb.png" },
  { title: "My SQL", icon: "mysql.png" },
  { title: "Redux", icon: "redux.png" },
  { title: "HTML", icon: "html.png" },
  { title: "CSS", icon: "css.png" },
];

const Skills = () => {
  return (
    <Container
      m="0"
      maxW="100%"
      p="5"
      w="full"
      h="full"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Grid
        boxShadow={useColorModeValue("lg", "dark-lg")}
        _hover={{
          transform: "translateY(-5px)",
          transition: "all 0.2s ease-out",
          boxShadow: "0 10px 50px -20px #b0c4de",
        }}
        w="100%"
        h="auto"
        p={8}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        flexDirection={{ base: "column-reverse", md: "row" }}
        placeItems="center"
        bg={useColorModeValue("white", "#000000")}
        mt={12}
      >
        <GridItem width={{ base: "full", md: "90%" }}>
          <Box maxW="80rem">
            <Heading
              fontSize="4xl"
              color={useColorModeValue("black", "gray.400")}
              fontFamily={"Signika Negative"}
              mb={4}
            >
              Get to know me!
            </Heading>
            <Text
              fontSize="md"
              mt="30px"
              // fontFamily={"cursive"}
              color={useColorModeValue("#666676", "gray.400")}
            >
              I'm a fullstack web developer building the front-end of websites
              and web applications that leads to the success of the overall
              product heck out some of my work in the projects section. <br />
              <br />I also like sharing content related to the stuff that I have
              learned over the years in web development so it can help other
              people of the dev community. Feel free to Connect or follow me on
              my linkedin where I post useful content related to web development
              and programming
            </Text>
            <Link as="a" href="#contact">
              <Button
                size="lg"
                mt="35px"
                mb={6}
                w={{ base: "full", md: "40%" }}
                color={useColorModeValue("black", "gray.400")}
              >
                Contact Me
              </Button>
            </Link>
          </Box>
        </GridItem>
        <GridItem
          // border='1px solid red'
          id="skills"
          mb={4}
          width={{ base: "full", md: "50%m" }}
          height="full"
        >
          <Heading
            fontSize="4xl"
            color={useColorModeValue("black", "gray.400")}
            fontFamily={"Signika Negative"}
            mb={10}
          >
            My Skills
          </Heading>
          <Stack>
            <ButtonGroup
              color={useColorModeValue("black", "gray.400")}
              variant="ghost"
              display="grid"
              gridTemplateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                "2xl": "repeat(4, 1fr)",
              }}
              gridGap="1rem"
            >
              {SkillsArray.map(({ title, icon }, idx) => {
                return (
                  <Tooltip label={title} placement="top-start" key={idx}>
                    <Box
                      position={"relative"}
                      left={idx === 0 && "2"}
                      className="skills-card"
                      display="grid"
                      placeItems="center"
                      fontWeight="semibold"
                      p={2}
                      rounded="md"
                      bg="#e7e7e7"
                      _dark={{ bg: "gray.800", color: "gray.400" }}
                      color="#666676"
                      w={{ base: "80%", md: "90%" }}
                      textAlign="center"
                    >
                      <Flex align={"center"} w="100%">
                        <Image
                          className="skills-card-img"
                          src={icon}
                          alt="js"
                          w="25px"
                        />

                        <Text
                          className="skills-card-name"
                          as="span"
                          ml={{ base: "2", md: "2" }}
                          isTruncated
                          fontSize={["0.8em", "1em"]}
                        >
                          {title}
                        </Text>
                      </Flex>
                    </Box>
                  </Tooltip>
                );
              })}
            </ButtonGroup>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Skills;
