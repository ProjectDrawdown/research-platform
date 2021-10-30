import React from "react";
import { Link, Text } from "@chakra-ui/react"


export default function BackButton ({mb}) {
    return (
      <Link href="/">
        <Text mb={mb} fontSize="14px">{'<<'} Back to Home </Text>
      </Link>
    )
}
