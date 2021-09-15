import React from "react"
import Head from "next/head"

import { Component } from 'react'
import { ChakraProvider, Flex, Heading, Text, Stack, HStack, Image, Grid, Box} from "@chakra-ui/react"
// import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    // let { title, projects } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <ChakraProvider>
        <Flex as="nav" flexWrap="wrap" alignItems="center">
          <Stack align="center" marginTop="2rem">
            <Heading as="h1" textStyle="caps" fontSize="39px">
              Collaboratory
            </Heading>
          <HStack >
            <Text fontSize="1.2rem"  paddingTop="2rem" paddingRight="25%" paddingLeft="25%" textAlign="center">
              Can climate change be reserved? The Collaboratory  is empowering global researchers to answer this question.
            </Text>
          </HStack>
            <Text  fontSize="1.2rem" marginTop="2rem" marginLeft="10%" marginRight="10%">In partnership with</Text>
            <HStack>
              <Image borderRadius="full" boxSize="40px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
              <Image borderRadius="full" boxSize="40px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
              <Image borderRadius="full" boxSize="40px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
              <Image borderRadius="full" boxSize="40px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
              <Image borderRadius="full" boxSize="40px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
            </HStack>
          <HStack >
            <Text fontSize="1.8rem" marginTop="4rem" paddingLeft="15%" paddingRight="15%" textAlign="center" paddingBottom="50px">
            The world’s largest open-source climate solution laboratory
            </Text>
          </HStack>
            <Heading as="h4" size="md" textStyle="caps">
              Active Projects
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <Box w="82%" bg="gray.500" margin="auto">
                <Image boxsize="100px" src="https://bit.ly/sage-adebayo" />
                <Text textAlign="center" padding="1rem">
                  Open Solutions Model: open source modeling of 100s of climate solutions
                </Text>
              </Box>
              <Box w="82%" bg="gray.500" margin="auto">
                <Image boxsize="100px" src="https://bit.ly/sage-adebayo" />
                <Text textAlign="center" padding="1rem">
                  Climate Solutions Data Hub: open research on solution impacts
                </Text>
              </Box>
              <Box w="82%" bg="gray.500" margin="auto">
                <Image boxsize="100px" src="https://bit.ly/sage-adebayo" />
                <Text textAlign="center" padding="1rem">
                  2022 Open Climate Research Fellowships
                </Text>
              </Box>
            </Grid>
            <Heading as="h5" fontSize="1rem" size="md" textStyle="caps" paddingBottom="30px">
              Browse all projects
            </Heading>

            <Heading as="h4" mt="5" size="md" textStyle="caps">
              Want to Contribute?
            </Heading>
            <HStack padding="2rem">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Box w="100%" height="100%" bg="gray.500" textAlign="center">
                <Text padding="1rem">
                  Have a Resource to Add? Click Here to Get Started
                </Text>
              </Box>
              <Box w="100%" height="100%" bg="gray.500" textAlign="center">
                <Text padding="1rem">
                  Engergized by this work but not Sure How to Contibute? Connect with the community on Slack
                </Text>
              </Box>
              <Box w="100%" height="100%" bg="gray.500" textAlign="center">
                <Text padding="1rem">
                  Propose your own project
                </Text>
              </Box>
            </Grid>
            </HStack>
          </Stack>
        </Flex>
      </ChakraProvider>
    </>
    )
  }
}
