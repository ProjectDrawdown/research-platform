import React from "react"
import Head from "next/head"
import { Input } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"

import { Component } from 'react'
import { ChakraProvider, Flex, Heading, Text, Button, Stack, HStack, VStack, Image, Grid, Box, Center} from "@chakra-ui/react"

export default class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <ChakraProvider>
        <Flex as="nav" flexWrap="wrap" alignItems="center" marginLeft="63px" marginRight="169">
          <Stack align="center" marginTop="2rem" >
            <Heading as="h1" textStyle="caps" fontSize="39px" paddingLeft="30px" paddingBottom="20px"  textAlign="center" >
              Browse all projects
              <HStack paddingTop="71px" paddingBottom="31px" marginLeft="50px">
              <Input placeholder="search" w="582px" h="32px" size="md" borderRadius="none" borderColor="black"  />
              </HStack>
            </Heading>


            <Box h="31px" bg="#dddedf" w="501px" fontSize="12px" fontWeight="400"  p={4} color="black" marginLeft="63px" display="flex" alignItems="center">
            UN data on solar water heater
            <Button  position="absolute" w="45px" h="18px" marginLeft="430px" marginTop="-1px"  bg="#606060" color="#FFFFFF"  borderRadius="8px" fontSize="10px">model</Button>
            </Box>
            <Box h="31px" bg="#dddedf" w="501px" fontSize="12px" fontWeight="400" p={4} color="black" marginLeft="63px" display="flex" alignItems="center">
            GIS data to land use modal implenmentation
            <Button position="absolute" w="45px" fontSize="10px" h="18px" marginLeft="430px" marginTop="-1px" bg="#606060" color="#FFFFFF"  borderRadius="8px">data</Button>
            </Box>
            <Box h="31px" bg="#dddedf" w="501px" fontSize="12px" fontWeight="400" p={4} color="black" marginLeft="63px" display="flex" alignItems="center">
            Greenpeace reference senarios to the 2020 reference cases
            <Button position="absolute" w="45px" fontSize="10px" h="18px" marginLeft="430px" marginTop="-1px" bg="#606060" color="#FFFFFF"  borderRadius="8px">pdf</Button>
            </Box>
            <Box h="31px" bg="#E2E2E2" w="501px" fontSize="12px" fontWeight="400" p={4} color="black" marginLeft="63px" display="flex" alignItems="center">
            Diffrent First Cost Model for Solal Energy in China
            </Box>
            <Box h="31px" bg="#E2E2E2" w="501px" fontSize="12px" fontWeight="400" p={4} color="black" marginLeft="63px" display="flex" alignItems="center">
            UN data on solar water heaters
            </Box>
            <Box h="31px" bg="#E2E2E2" w="501px" fontSize="12px" fontWeight="400" p={4} color="black" marginLeft="63px" display="flex" alignItems="center">
            GIS data to land use modal implenmentation
            </Box>
            <Box h="31px" bg="#E2E2E2" w="501px" fontSize="12px" fontWeight="400" p={4} color="black" marginLeft="63px" display="flex" alignItems="center">
            Greenpeace reference senarios to the 2020 reference cases
            </Box>
            <Box h="31px" bg="#E2E2E2" w="501px" fontSize="12px" fontWeight="400" p={4} color="black" marginLeft="63px" display="flex" alignItems="center">
            Diffrent First Cost Model for Solal Energy in China
            </Box>
            <Box h="31px" bg="#E2E2E2" w="501px" fontSize="12px" fontWeight="400" p={4} color="black" marginLeft="63px" display="flex" alignItems="center" >
            UN data on solar water heaters
            </Box>
            <Box h="31px" bg="#E2E2E2" w="501px" fontSize="12px" fontWeight="400" p={4} color="black" marginLeft="63px" display="flex" alignItems="center">
            GIS data to land use modal implenmentation
            </Box>
            <Box h="31px" bg="#E2E2E2" w="501px" fontSize="12px" fontWeight="400" p={4} color="black" marginLeft="63px" display="flex" alignItems="center">
            Greenpeace reference senarios to the 2020 reference cases
            </Box>
            <Box h="31px" bg="#E2E2E2" w="501px" fontSize="12px" fontWeight="400" p={4} color="black" marginLeft="63px" display="flex" alignItems="center">
            Greenpeace reference senarios to the 2020 reference cases
            </Box>
            <Box h="31px" bg="#E2E2E2" w="501px" fontSize="12px" fontWeight="400" p={4} color="black" marginLeft="63px" display="flex" alignItems="center" >
            Diffrent First Cost Model for Solal Energy in China
            </Box>
            <HStack paddingTop="50px" marginLeft="67px" paddingBottom="20px">
            <Box bg="#E2E2E2" w="493px" h="64px"  p={4} color="black" textAlign="Center" display="flex" alignItems="center" paddingLeft="100px" fontSize="12px" textStyle="normal" >
            Have a Reasource to Add? <Link>Click Here</Link>
            </Box>
            </HStack>
          </Stack>

        </Flex>

      </ChakraProvider>
    </>
    )
  }
}
