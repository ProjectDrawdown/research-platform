import React from "react";
import { Text, Box} from "@chakra-ui/react"
import Title from "./Title";

export default function Footer () {
    return (
      <>
        <Box backgroundImage="url('img/assets/Rectangle 1094.png')"
          h={["300px", "300px", "400px"]}
          w={["100%", "80%", "80%"]}
          zIndex="100"
          marginTop="200px"
          paddingBottom="0px"
          marginBottom="0px"
          ></Box>
            <Box
            background="#000000"
            w={["70%", "50%", "50%"]}
            p="4"
            display="flex"
            flexDirection="column"
            right="0px"
            bottom="0px"
            zIndex="100"
            position="absolute"
            >
          <Title fontSize={["20px", "23px", "36px"]} fontWeight="800" lineHeight="40px" paddingRight="15%" color="#FFF">
            Open Solutions Collaboratory
          </Title>
          <Box flex="1" display="flex" flexDirection="column" justifyContent="space-between" >
          <Text textStyle="caps" fontSize={["12px", "14px", "18px"]} fontWeight="600" lineHeight="28px" fontFamily="Sora" textAlign="left" paddingRight="15%" color="#FFF">
            Contact Us
          </Text>
          <Text textStyle="caps" fontSize="14px" fontFamily="Sora" lineHeight="20px" fontWeight="800" textAlign="left" marginTop={["10px", "20px", "36px"]} paddingRight="15%" color="#FFF">
            ©2021
          </Text>
          </Box>
        </Box>
        </>
    )
  }
  