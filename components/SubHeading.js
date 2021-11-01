import React from "react"
import { Heading } from "@chakra-ui/react"

export default function Render (props) {
  return (
    <Heading mt="6rem" ml="4rem" as="h2" p="1rem" fontSize={["2xl", "4xl"]}>
      {props.title}
    </Heading>
  )
}
