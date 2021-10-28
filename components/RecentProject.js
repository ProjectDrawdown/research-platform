import React from "react"
import { GridItem, Box, Heading, Link } from "@chakra-ui/react"

export default function Render({ project }) {
  return (
    <GridItem
      px="1rem"
      colSpan={[7, 3]}
      rowSpan={2}>
      <Box
        background="#F5F5F5"
        border="4px solid #000000"
        borderRadius="5px"
        padding="2rem"
        height="100%"
        position="relative"
        >
          <Heading as="h2" size="md" textStyle="caps" fontSize={["20px", "20px", "30px"]} color="#00C24E">
            <Link href={`/projects/${project.split('__')[3]}`}>
              {project.split('_')[0]}
            </Link>
          </Heading>
          <Box
            position="absolute"
            bottom="0"
            paddingBottom="2rem">
            <Link href={`/projects/${project.split('__')[3]}`}>
              View
            </Link>
          </Box>
      </Box>
    </GridItem>
  )
}
