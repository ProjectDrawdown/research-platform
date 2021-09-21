import React, {useState} from "react"
import Head from "next/head"
import { ChakraProvider, Flex, Link, Button, Heading, Text, Stack, HStack, Image, Grid, SimpleGrid, Box} from "@chakra-ui/react"


const Header = () =>{
  return (
    <>
      <Box top="0px" left="0px" width="100" height="max-content">
        <Box background="#FFFFFF"
        h="621px"
        w="792px"
        left="28px"
        top="53px"
        zIndex="100"
        border="4px solid #000000"
        p="3"
        boxShadow="base"
        display="block"
        direction="row"
        boxSizing="border-box"
        borderColor="black"
        borderWidth="3px"
        borderRadius="10px"
        borderStyle="solid"
        position="absolute">
        <Heading as="h1" textStyle="caps" fontSize="48px" height="96px" fontFamily="Sora" 
        weight="800px" left="78px" top="93px" textAlign="left" paddingRight="25%">
          Open Solutions Collaboratory
        </Heading>
          <HStack >
            <Text fontSize="30px" fontWeight="600px" paddingTop="2rem" paddingRight="35%"  textAlign="left" left="78px" top="243px"> 
            Building the worlds  largest open research platform for climate solutions...
            </Text>
          </HStack>
        </Box>
        <Box position="relative" 
        border="4px solid #000000"
        width = "860px"
        height= "800px"
        left = "452px"
        top = "150px" 
        zIndex="90"
        marginBottom="150px"
        background = "url(https://bit.ly/sage-adebayo)"
        mixBlendMode="normal"></Box>
      </Box>
    </>
  )
}

const FeaturedProjectsList = () =>{
  const [ projects] = useState([
    {"name":"Open Solutions Model: open source modeling of 100s of climate solutions", "link":""},
    {"name":"2022 Open Climate Research Fellowships", "link":""},
    {"name":"Climate Solutions Data Hub: open research on solution impacts", "link":""},
    {"name":"2023 Open Climate Research Fellowships", "link":""}
  ])
  
  return (
    <>
      <Box paddingRight="60%" paddingBottom="3em" paddingTop="3em">
        <Text fontSize="36px" fontWeight="bold" textStyle="caps" textAlign="left">
          Recently Active Projects
        </Text>
      </Box>
      
      <Grid templateColumns="1fr" gap={6} background="url(https://bit.ly/sage-adebayo)" backgroundPosition="center" backgroundSize="cover">
        <Grid templateColumns="repeat(2, 1fr)" gap="20px" >
          {projects.slice(0,2).map(project => (
          <Box w="100%" padding="45" position="relative" background="#F5F5F5" margin="auto">
            <Text boxSize="400px" >
              <Heading as="h2" size="md" textStyle="caps" fontSize="30px" color="#00C24E">
                {project.name}
              </Heading>
            </Text>
            <Link href="{project.link}" textAlign="left" padding="1rem" fontWeight="bold" position="absolute" bottom="0px" backgroundColor="transparent">
              View
            </Link>
          </Box>
          ))}
        </Grid>
        <Heading as="h5" fontSize="1rem" size="md" textStyle="caps" paddingBottom="30px" textAlign="center">
          <Link href="browseProjects">
            <Button colorScheme="yellow" borderRadius="0px" border="2px solid #000000">Browse all projects</Button>
          </Link>
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap="20px">
          {projects.slice(2,4).map(project => (
          <Box w="100%" padding="45" position="relative" background="#F5F5F5" margin="auto">
            <Text boxSize="400px" >
              <Heading as="h2" size="md" textStyle="caps" fontSize="30px" color="#00C24E">
                {project.name}
              </Heading>
            </Text>
            <Link href="{project.link}" textAlign="left" padding="1rem" fontWeight="bold" position="absolute" bottom="0px" backgroundColor="transparent">
              View
            </Link>
          </Box>
          ))}
        </Grid>
      </Grid>
       
    </>
  )
}

const Partners = () =>{
  return(
    <>
      <Box paddingRight="60%" paddingBottom="3em" paddingTop="3em">
        <Text fontSize="36px" fontWeight="bold" textStyle="caps" textAlign="left">
          Our Partners
        </Text>
      </Box>
      <SimpleGrid minChildWidth="370px" spacing="40px" width="100%">
        <Image borderRadius="full" maxWidth="360px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
        <Image borderRadius="full" maxWidth="229px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
        <Image borderRadius="full" maxWidth="218px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
        <Image borderRadius="full" maxWidth="370px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
        <Image borderRadius="full" maxWidth="370px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
        <Image borderRadius="full" maxWidth="370px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
        <Image borderRadius="full" maxWidth="370px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
      </SimpleGrid>
    </>
  )
}

const Body = () =>{
  return (
    <>
      <Box paddingRight="60%"  paddingBottom="3em" paddingTop="3em">
          <Text fontSize="36px" fontWeight="bold" textStyle="caps" textAlign="left">
            Who We Are
          </Text>
      </Box>
      <Grid templateColumns="1fr 1.5fr" width="40%" gap={6} padding="40px" background="url(https://bit.ly/sage-adebayo)" backgroundPosition="center" backgroundSize="cover">
        <Stack marginLeft="-40%" gap={6}>
          <Box textAlign="center" padding="20px" paddingTop="0px" minWidth="200px" maxWidth="300px" border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md"> 12 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue"> Countries </Heading>
          </Box>
          <Box textAlign="center" padding="20px" paddingTop="0px" minWidth="200px" maxWidth="300px" border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md"> 300 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue"> Collaborators </Heading>
          </Box>
          <Box textAlign="center" padding="20px" paddingTop="0px" minWidth="200px" maxWidth="300px" border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md"> 500 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue"> Projects </Heading>
          </Box>
        </Stack>
          <Box padding="20px" maxWidth="300px" border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Text fontWeight="bold">
              There could be a short description here with a bit more inspirational somethn’ somethn’
            </Text>
          </Box>
      </Grid>

      <Heading as="h4" mt="5" size="md" textStyle="caps" paddingTop="100px">
        Are you Interested in Contributing?
      </Heading>
      <Stack padding="2rem">
        <Grid templateColumns="1fr 1fr" gap={6}>
          <Box display="flex" justifyContent="flex-end">
            <Image maxWidth="80px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
          </Box>
          <Box w="100%">
            <Text fontWeight="bold">
              Have a Resource to Add?
            </Text>
            <Button borderRadius="0px" border="2px solid #000000" background="#ffffff">GET STARTED</Button>
          </Box>
        </Grid>
        <Grid templateColumns="1fr 1fr" gap={6}>
          <Box display="flex" justifyContent="flex-end">
            <Image maxWidth="80px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
          </Box>
          <Box w="100%">
            <Text fontWeight="bold">
              Engergized by this but not sure how to contibute?
            </Text>
            <Button borderRadius="0px" border="2px solid #000000" background="#ffffff"> CONNECT ON SLACK</Button>
          </Box>
        </Grid>
        <Grid templateColumns="1fr 1fr" gap={6}>
          <Box display="flex" justifyContent="flex-end">
            <Image maxWidth="80px" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
          </Box>
          <Box w="100%">
            <Text fontWeight="bold">
              Propose your own project.
            </Text>
            <Button borderRadius="0px" border="2px solid #000000" background="#ffffff">CONTACT US</Button>
          </Box>
        </Grid>
      </Stack>
    </>
  )
}

const Footer = () =>{
  return (
    <>
      <Box background = "url(https://bit.ly/sage-adebayo)"
        h="400px"
        w="800px"
        left="30px"
        top="4726px"
        zIndex="100"
        border="4px solid #000000"
        p="3"
        boxShadow="base"
        display="block"
        direction="row"
        boxSizing="border-box"
        borderColor="black"
        borderWidth="3px"
        borderStyle="solid"
        position="absolute"></Box>
          <Box
          background="#000000"
          h="237px"
          w="520px"
          left="775px"
          top="4899px"
          zIndex="100"
          border="4px solid #000000"
          p="3"
          boxShadow="base"
          display="block"
          direction="row"
          boxSizing="border-box"
          borderColor="black"
          borderWidth="3px"
          borderStyle="solid"
          position="absolute"
          >
        <Heading as="h1" textStyle="caps" fontSize="36px" height="80px" fontFamily="Sora" 
        weight="402px" left="807px" top="93px" textAlign="left" paddingRight="25%" color="#FFF">
          Open Solutions Collaboratory
        </Heading>
        <Text textStyle="caps" fontSize="18px" height="96px" fontFamily="Sora" 
        weight="600" left="807px" top="5029px" textAlign="left" paddingRight="25%" color="#FFF">
          Contact Us
        </Text>
        <Text textStyle="caps" fontSize="14px" height="20px" fontFamily="Sora" 
        weight="800" left="807px" top="5093px" textAlign="left" paddingRight="25%" color="#FFF">
          ©2021
        </Text>
      </Box>
  </>
  )
}

const Home = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <ChakraProvider>
        <Flex as="nav" flexWrap="wrap" direction="row" alignItems="center">
        <Header />
        <Stack align="center" marginTop="2rem" width="100vw">
        <Partners />
        <FeaturedProjectsList />
        <Body />
        </Stack>
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
  </>
  )
}

export default Home;