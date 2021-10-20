import React from "react";
import { Button, Text, Link } from "@chakra-ui/react"


export default function StyledButton ({ content, href }) {
    return (
      <Button as={Link} bg="#F1FF51" borderRadius="0px" marginX="auto" border="2px solid #000000" href={href} >
        <Text  fontSize={{base:"15px", sm:"15px", md:"15pxpx", lg:"15px", xl:"15px", "2xl":"30px"}}>
          {content}
        </Text>
      </Button>
    )
}
