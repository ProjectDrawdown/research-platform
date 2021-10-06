import React from "react";
import "@fontsource/sora/800.css";
import { Heading } from "@chakra-ui/react"


export default function Title ({color, fontSize, paddingRight}) {
    return (
      <>
        <Heading as="h1" textStyle="caps" fontFamily="Sora" fontSize={fontSize} textAlign="left" paddingRight={paddingRight} color={color}>
          Open Solutions Collaboratory
        </Heading>
      </>
    )
  }