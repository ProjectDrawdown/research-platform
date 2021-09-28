import React from "react";
import { ChakraProvider, Flex, Link, Button, Heading, Text, Stack, Image, Grid, SimpleGrid, Box} from "@chakra-ui/react"

export default () =>{
  return (
    <>
      <Box top="0px" left="0px" width="100%" height="max-content">
        <Box background="#FFFFFF"
        w={["80%", "60%", "50%"]}
        left="10%"
        top="53px"
        zIndex="100"
        p="3"
        boxShadow="base"
        display="block"
        direction="row"
        boxSizing="border-box"
        borderColor="black"
        borderWidth="3px"
        borderRadius="10px"
        borderStyle="solid"
        position="absolute">
        <Heading as="h1" textStyle="caps" fontSize={["20px", "30px", "48px"]} left="78px" top="93px" textAlign="left" paddingRight={["10%", "25%"]}>
          Open Solutions Collaboratory
        </Heading>
          <Text fontSize={["15px", "15px", "30px"]} fontWeight="600px" paddingTop="2rem" paddingRight={["10%", "35%"]}  textAlign="left" >
          Building the worlds  largest open research platform for climate solutions...
          </Text>
        </Box>
        <Box position="relative"
        h={["250px", "250px", "500px"]}
        w={["60%", "50%"]}
        left = {["40%"]}
        top = {["150px" ]}
        zIndex="90"
        marginBottom="150px"
        backgroundImage = "url('img/assets/Rectangle 1087.png')"
        mixBlendMode="normal"></Box>
      </Box>
    </>
  )
}



