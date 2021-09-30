import React from "react";
import { Button } from "@chakra-ui/react"


export default function StyledButton ({content}) {
    return (
      <Button colorScheme="yellow" borderRadius="0px" border="2px solid #000000">
          {content}
      </Button>
    )
}
