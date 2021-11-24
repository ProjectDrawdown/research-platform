import React from "react";
import { Heading } from "@chakra-ui/react"


export default function Title (props) {
  const {children, color, fontSize, pr, mb} = props

  return (
    <>
      <Heading as="h1" textStyle="caps" fontFamily="Sora" fontSize={fontSize} textAlign="left" pr={pr} mb={mb} color={color}>
        {children}
      </Heading>
    </>
  )
}
