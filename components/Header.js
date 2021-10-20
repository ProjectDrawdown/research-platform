import React from "react";
import { Text, Box, Image} from "@chakra-ui/react"

import Title from "./Title"
import BorderBox from "./BorderBox"

export default function Header ({ title, description }) {
  return (
    <>
      <Box marginY="2rem" position="relative" width="100%" height="max-content"
      
        backgroundImage="url('img/assets/Rectangle 1087.png')"
        backgroundPosition={["right", "right bottom"]}
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
            <Box marginLeft="10px" marginTop={["20px", "20px","20px"]}>
              <Arrow displayStyle={["block", "block", "block"]} />
              <Arrow displayStyle={["none", "block", "block"]} />
              <Arrow displayStyle={["none", "block", "block"]} />
            </Box>
        </BorderBox>
          <Box margin="5rem">
            <Image src="img/assets/wavy.png" objectFit="contain" />
          </Box>
      </Box>
    </>
  )
}

const Arrow = ({displayStyle}) => {
  return (
    <Image src="img/assets/path.png" display={displayStyle} />
  )
}


  
