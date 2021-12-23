import React from "react";
import { Text, Box } from "@chakra-ui/react";
import Title from "./Title";

export default function Footer() {
  return (
    <>
      <Box
        backgroundImage="url('/img/assets/iStock-521263035.jpg')"
        h="30rem"
        w={["100%", "50rem"]}
        zIndex="100"
        marginTop={["4rem", "8rem"]}
        paddingBottom="0px"
        marginBottom="0px"
        backgroundSize="cover"
      ></Box>
      <Box
        background="#000000"
        h="20rem"
        w={["100vw", "50rem"]}
        p="4"
        display="flex"
        flexDirection="column"
        right="0px"
        bottom="0px"
        zIndex="100"
        position="absolute"
      >
        <Title
          fontSize={{
            base: "20px",
            sm: "20px",
            md: "23px",
            lg: "36px",
            xl: "36px",
            "2xl": "62px",
          }}
          fontWeight="800"
          lineHeight="40px"
          paddingRight="25%"
          color="#FFF"
        >
          Drawdown Research Platform
        </Title>
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text
            textStyle="caps"
            fontSize={{
              base: "14px",
              sm: "14px",
              md: "14px",
              lg: "14px",
              xl: "14px",
              "2xl": "28px",
            }}
            fontFamily="Sora"
            lineHeight="20px"
            fontWeight="800"
            textAlign="left"
            marginTop={["10px", "20px", "36px"]}
            paddingRight="15%"
            color="#FFF"
          >
            ©2021
          </Text>
        </Box>
      </Box>
    </>
  );
}
