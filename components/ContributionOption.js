import React from "react"
import { Grid, GridItem, Text, Button } from "@chakra-ui/react"

export default function Render ({
  title,
  buttonTitle,
  image,
  onClick
}) {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap={[4, 2]}
      p="0.5rem"
      my="4rem">
        <GridItem rowSpan={2}>
          {image}
        </GridItem>
        <GridItem colSpan={4}>
          <Text>
            {title}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            border="2px solid #000000"
            background="#ffffff"
            onClick={onClick}>{buttonTitle}</Button>
        </GridItem>
    </Grid>
  )
}
