import React from "react"
import { Box } from "@chakra-ui/react"

export default function Render(props) {

  const { children } = props

  return(
    <Box
      boxShadow="base"
      display="block"
      direction="row"
      boxSizing="border-box"
      borderColor="black"
      borderWidth="3px"
      borderRadius="10px"
      borderStyle="solid"
      {...props}
    >
      {children}
    </Box>
  )
}
