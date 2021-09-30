import React from "react";
import { Heading } from "@chakra-ui/react"


export default function Title ({color, fontSize, paddingRight}) {
    return (
      <>
        <Heading as="h1" textStyle="caps" fontSize={["20px", "30px", "48px"]} fontFamily="Sora" fontSize={fontSize} textAlign="left" paddingRight={paddingRight} color={color}>
          Open Solutions Collaboratory
        </Heading>
      </>
    )
  }