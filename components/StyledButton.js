import React from "react";
import { Button, Link } from "@chakra-ui/react"


export default function StyledButton ({ content, href }) {
    return (
      <Button as={Link} bg="#F1FF51" borderRadius="0px" marginX="auto" border="2px solid #000000" href={href} >
          {content}
      </Button>
    )
}
