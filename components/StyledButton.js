import React from "react";
import { Button } from "@chakra-ui/react"


export default function StyledButton ({content}) {
    return (
      <Button bg="#F1FF51" borderRadius="0px" marginX="auto" border="2px solid #000000" >
          {content}
      </Button>
    )
}
