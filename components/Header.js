import React from "react";
import { Text, Box} from "@chakra-ui/react"
import Title from "./Title";

export default function Header ({ title, description }) {
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
          <Title fontSize={["20px", "30px", "48px"]} paddingRight={["10%", "15%"]} fontWeight="800px">
            {title}
          </Title>
          <Text fontSize={["15px", "15px", "30px"]} fontFamily="sora" fontWeight="600px" paddingTop="2rem" paddingRight={["10%", "15%"]}  textAlign="left" >
            {description}
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


  
