import React from "react";
import { Link, Text } from "@chakra-ui/react"


export default function BackButton () {
    return (
      <Link href="/">
        <Text fontSize={{base:"14px", sm:"14px", md:"14px", lg:"14px", xl:"14px", "2xl":"44px"}}>{'<<'} Back to Home </Text>
      </Link>
    )
}
