import React from "react";
import { Text, Box, Image} from "@chakra-ui/react"
import Title from "./Title";

export default function Header ({ title, description }) {
  return (
    <>
      <Box position="relative" width="100%" height="max-content">
        <Box background="#FFFFFF"
        w={["60rem", "45rem"]}
        height="35rem"
        left={["10rem", "10rem"]}
        top="3rem"
        zIndex="100"
        padding="30px"
        boxShadow="base"
        display="block"
        direction="row"
        boxSizing="border-box"
        borderColor="black"
        borderWidth="3px"
        borderRadius="10px"
        borderStyle="solid"
        position="absolute">
          <Title paddingRight={["10px", "30px", "15%"]} fontSize="6xl">
            {title}
          </Title>
          <Text fontSize="3xl" fontFamily="sora" paddingTop="2rem" paddingRight={["0px", "20px", "15%"]}  textAlign="left" >
            {description}
          </Text>
          <Box marginLeft="10px" marginTop={["20px", "20px","20px"]} marginTop={["3.5rem", "1.9rem"]}>
            <Arrow displayStyle={["block", "block", "block"]} />
            <Arrow displayStyle={["none", "block", "block"]} />
            <Arrow displayStyle={["none", "block", "block"]} />
          </Box>
        </Box>
        <Box 
        position="relative"
        w="50rem"
        h="50rem"
        left="35%"
        top = "10rem"
        zIndex="90"
        marginBottom="150px"
        backgroundImage = "url('img/assets/Rectangle 1087.png')"
        mixBlendMode="normal"></Box>
      </Box>
      <Image 
        src="img/assets/wavy.png" 
        width={["80%", "80%","25%"]} 
        marginTop={["20px", "20px", "-50px"]} 
        marginLeft={["10%"]} 
        maxHeight="40px" 
        objectFit="contain" />
    </>
  )
}

const Arrow = ({displayStyle}) => {
  return (
    <Image src="img/assets/path.png" display={displayStyle} width="3.5rem" />
  )
}


  
