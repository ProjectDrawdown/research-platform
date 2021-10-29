import React from "react"
import { Heading } from "@chakra-ui/react"

export default function Render (props) {
  return (
    <Heading as="h2" p="1rem" fontSize={["2xl", "4xl"]}>
      {props.title}
    </Heading>
  )
}
