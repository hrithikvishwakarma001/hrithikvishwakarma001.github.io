import React from "react";
import { Center, Heading, Text, VStack } from "@chakra-ui/react";
export default function About({ heading, paragraph, id }) {
  return (
    <Center
      width={{ base: "90%", md: "60%" }}
      borderRadius="20px"
      mx="auto"
      mt="20px"
      py={5}
      id={id}
      className="about section"
    >
      <VStack>
        <Heading
          fontSize="3xl"
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="shorter"
          _dark={{
            color: "#b0c4de",
          }}
          textAlign="center"
          fontFamily={"Signika Negative"}
          p="5px"
        >
          {heading}
        </Heading>
        <Text
          fontSize="xl"
          // fontFamily={"cursive"}
          letterSpacing="tight"
          lineHeight="shorter"
          _dark={{
            color: "#b0c4de",
          }}
          textAlign="center"
          mt="20px"
          mb="20px"
        >
          {paragraph}
        </Text>
      </VStack>
    </Center>
  );
}
