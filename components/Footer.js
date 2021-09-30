import React from "react";
import { Text, Box} from "@chakra-ui/react"
import Title from "./Title";

export default function Footer () {
    return (
      <Box
        w="100% " 
        position="relative"
        marginTop="100px">
        <Box backgroundImage="url('img/assets/Rectangle 1094.png')"
          h={["200px", "250px", "300px"]}
          w={["50%", "50%", "60%"]}
          left="30px"
          bottom="100px"
          zIndex="100"
          border="4px solid #000000"
          p="3"
          boxShadow="base"
          display="block"
          direction="row"
          boxSizing="border-box"
          borderColor="black"
          borderWidth="3px"
          borderStyle="solid"
          position="absolute"></Box>
            <Box
            background="#000000"
            h="237px"
            w={["70%", "50%", "50%"]}
            left={["40%", "40%", "40%"]}
            bottom="50px"
            zIndex="100"
            marginTop={["200px", "150px", "200px"]}
            border="4px solid #000000"
            p="3"
            boxShadow="base"
            display="block"
            direction="row"
            boxSizing="border-box"
            borderColor="black"
            borderWidth="3px"
            borderStyle="solid"
            position="relative"
            >
          <Title fontSize={["20px", "28px", "36px"]} paddingRight="15%" color="#FFF">
            Open Solutions Collaboratory
          </Title>
          <Text textStyle="caps" fontSize={["12px", "14px", "18px"]} fontFamily="Sora" textAlign="left" paddingRight="15%" color="#FFF">
            Contact Us
          </Text>
          <Text textStyle="caps" fontSize="14px" fontFamily="Sora" textAlign="left" paddingRight="15%" color="#FFF">
            ©2021
          </Text>
        </Box>
    </Box>
    )
  }
  