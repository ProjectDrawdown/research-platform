import React from "react";
import { Text, Box, Image} from "@chakra-ui/react"
import Title from "./Title";

export default function Header ({ title, description }) {
  return (
    <>
      <Box top="0px" marginX="auto" paddingX="auto" position="relative" width="100%" height="max-content">
        <Box background="#FFFFFF"
        w={{base:"75%", sm:"75%", md:"70%", lg:"75%", xl:"75%", "2xl":"75%"}}
        h="max-content
        "
        minHeight={{base:"45vh", sm:"45vh", md:"45vh", lg:"45vh", xl:"45vh", "2xl":"45vh"}}
        maxWidth={["90%", "90%", "50vw"]}
        left={["4%", "10%", "10%"]}
        marginX="auto"
        top="53px"
        zIndex="100"
        padding={{base:"30px",sm:"30px",md:"30px",lg:"30px",xl:"30px","2xl":"60px"}}
        boxShadow="base"
        display="block"
        direction="row"
        boxSizing="border-box"
        borderColor="black"
        borderWidth="3px"
        borderRadius="10px"
        borderStyle="solid"
        position="absolute">
          <Title fontSize={{base:"17px",sm:"17px", md:"38px", lg:"48px",xl:"48px","2xl":"75px"}} paddingRight={{sm:"10px", md:"30px", lg:"15%", xl:"15%", "2xl":"30%"}} fontWeight="800px">
            {title}
          </Title>
          <Text fontSize={{base:"17px",sm:"24px", md:"30px", lg:"30px",xl:"30px","2xl":"45px"}} fontFamily="sora" fontWeight="600px" marginTop="2rem" paddingRight={{sm:"0px", md:"20px", lg:"15%", xl:"15%", "2xl":"30%"}}  textAlign="left" >
            {description}
          </Text>
          <Box marginLeft="10px" marginTop={["20px", "20px","40px"]}>
            <Arrow width={{base:"10%", sm:"10%", md:"10%",lg:"25%", xl:"8%", "2xl":"8%"}} displayStyle={["block", "block", "block"]} />
            <Arrow width={{base:"10%", sm:"10%", md:"10%",lg:"25%", xl:"8%", "2xl":"8%"}} displayStyle={["none", "block", "block"]} />
            <Arrow width={{base:"10%", sm:"10%", md:"10%",lg:"25%", xl:"8%", "2xl":"8%"}} displayStyle={["none", "block", "block"]} />
          </Box>
        </Box>
        <Box position="relative"
        h={{base:"53vh",sm:"53vh", md:"58vh", lg:"58vh", xl:"78vh", "2xl":"58vh" }}
        w={["80%", "60%", "55%"]}
        maxWidth={["90%", "90%", "50vw"]}
        left = {["20%","30%","45%"]}
        top = {["80px", "100px","200px" ]}
        zIndex="90"
        marginBottom="150px"
        backgroundImage = "url('img/assets/Rectangle 1087.png')"
        bgRepeat="no-repeat"
        bgSize="cover"
        mixBlendMode="normal"></Box>
      </Box>
      <Image src="img/assets/wavy.png" width={{base:"80%", sm:"80%", md:"80%",lg:"25%", xl:"25%","2xl":"25%"}} marginTop={{base:"70px", sm:"20px", md:"100px",lg:"-50px",xl:"-50px","2xl":"-100px"}} marginLeft={["10%"]} maxHeight={{base:"40px",sm:"40px",md:"40px",lg:"40px",xl:"40px","2xl":"130px"}} objectFit="contain" />
    </>
  )
}

const Arrow = ({width, displayStyle}) => {
  return (
    <Image src="img/assets/path.png" width={width} display={displayStyle} />
  )
}


  
