import React from "react";
import { Text, Box, Image} from "@chakra-ui/react"
import Title from "./Title";

export default function Header ({ title, description }) {
  return (
    <>
      <Box top="0px" marginX="auto" paddingX="auto" position="relative" width="100%" height="max-content">
        <Box background="#FFFFFF"
        w={["75%", "70%", "70%"]}
        minHeight={["240px", "240px", "300px"]}
        maxWidth={["90%", "90%", "671px"]}
        left={["4%", "10%", "10%"]}
        marginX="auto"
        top="53px"
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
          <Title fontSize={["20px", "27px", "48px"]} paddingRight={["10px", "30px", "15%"]} fontWeight="800px">
            {title}
          </Title>
          <Text fontSize={["15px", "15px", "25px"]} fontFamily="sora" fontWeight="600px" paddingTop="2rem" paddingRight={["0px", "20px", "15%"]}  textAlign="left" >
            {description}
          </Text>
          <Box marginLeft="10px" marginTop={["20px", "20px","20px"]}>
            <Arrow displayStyle={["block", "block", "block"]} />
            <Arrow displayStyle={["none", "block", "block"]} />
            <Arrow displayStyle={["none", "block", "block"]} />
          </Box>
        </Box>
        <Box position="relative"
        h={["350px", "380px", "450px"]}
        w={["80%", "60%", "50%"]}
        maxWidth={["90%", "90%", "677px"]}
        left = {["20%","30%","40%"]}
        top = {["80px", "100px","200px" ]}
        zIndex="90"
        marginBottom="150px"
        backgroundImage = "url('img/assets/Rectangle 1087.png')"
        mixBlendMode="normal"></Box>
      </Box>
      <Image src="img/assets/wavy.png" width={["80%", "80%","25%"]} marginTop={["20px", "20px", "-50px"]} marginLeft={["10%"]} maxHeight="40px" objectFit="contain" />
    </>
  )
}

const Arrow = ({displayStyle}) => {
  return (
    <Image src="img/assets/path.png" display={displayStyle} />
  )
}


  
