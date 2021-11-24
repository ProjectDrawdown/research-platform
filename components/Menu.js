import React from "react";
import { Link, Text, Grid, GridItem } from "@chakra-ui/react"
import { FcHome } from "react-icons/fc"


export default function Menu () {
  return (
    <Grid templateColumns="repeat(2, 1fr)" textAlign="center" w="19rem">
      <GridItem borderRight="2px solid #000">
        <Link href="/">
          <FcHome size={30} style={{ margin: "auto" }} />
        </Link>
      </GridItem>
      <GridItem>
        <Link href="/projects">
          <Text fontSize="1rem"> Project Listing </Text>
        </Link>
      </GridItem>
    </Grid>
  )
}
