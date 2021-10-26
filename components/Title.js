import React from "react";
import { Heading } from "@chakra-ui/react"


export default function Title ({color, fontSize, pr, mb}) {
    return (
      <>
        <Heading as="h1" textStyle="caps" fontFamily="Sora" fontSize={fontSize} textAlign="left" pr={pr} mb={mb} color={color}>
          Open Solutions Collaboratory
        </Heading>
      </>
    )
  }
