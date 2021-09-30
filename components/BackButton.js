import React from "react";
import { Button, Link, Text } from "@chakra-ui/react"


export default function BackButton () {
    return (
      <Link href="/">
        <Text fontSize="14px">{'<<'} Back to Home </Text>
      </Link>
    )
}
