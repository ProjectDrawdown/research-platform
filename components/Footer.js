import React from "react";
import { Text, Box} from "@chakra-ui/react"
import Title from "./Title";

export default function Footer () {
    return (
      <>
<Box backgroundImage="url('img/assets/Rectangle 1094.png')"
          h={["200px", "300px", "400px"]}
          w={["100%", "50%", "60%"]}
          left="30px"
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
          marginTop="200px"
          marginLeft="50px"
          ></Box>
            <Box
            background="#000000"
            h={["120px", "170px", "270px"]}
            w={["70%", "50%", "50%"]}
            right="0px"
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
            bottom="0px"
            position="absolute"
            marginRight="50px"
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
        </>
    )
  }
  
