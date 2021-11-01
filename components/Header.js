import React from "react";
import { Text, Box, Image} from "@chakra-ui/react"

import Title from "./Title"
import BorderBox from "./BorderBox"

export default function Header ({ title, description }) {
  return (
    <Box position="relative" width="100%" height="max-content"
      px="1rem"
      backgroundImage="url('img/assets/Rectangle 1087.png')"
      backgroundPosition={["right 65%", "right bottom"]}
      backgroundRepeat="no-repeat"
      backgroundSize={["75%", "50%"]}
    >
      <BorderBox background="#FFFFFF"
        maxWidth={["100%", "65%"]}
        padding="2rem">
          <Title fontSize={["3xl", "5xl"]} paddingRight={["10px", "30px", "15%"]} fontWeight="800px">
            {title}
          </Title>
          <Text fontSize={["2xl", "3xl"]} fontWeight="600px" paddingTop="2rem" paddingRight={["0px", "20px", "15%"]}  textAlign="left" >
            {description}
          </Text>
          <Box marginLeft="10px" marginTop={["20px", "20px","40px"]}>
            <Arrow width={{base:"10%", sm:"10%", md:"10%",lg:"15%", xl:"8%", "2xl":"8%"}} displayStyle={["block", "block", "block"]} />
            <Arrow width={{base:"10%", sm:"10%", md:"10%",lg:"15%", xl:"8%", "2xl":"8%"}} displayStyle={["none", "block", "block"]} />
            <Arrow width={{base:"10%", sm:"10%", md:"10%",lg:"15%", xl:"8%", "2xl":"8%"}} displayStyle={["none", "block", "block"]} />
          </Box>
      </BorderBox>
        <Box marginTop="8rem" marginBottom="2.5rem" marginX={["2.5rem", "8rem"]}>
          <Image src="img/assets/wavy.png" objectFit="contain" />
        </Box>
    </Box>
  )
}

const Arrow = ({width, displayStyle}) => {
  return (
    <Image src="img/assets/path.png" width={width} display={displayStyle} />
  )
}


  
