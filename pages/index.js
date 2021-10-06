import React, {useState} from "react"
import Head from "next/head"
import { ChakraProvider, Flex, Link, Button, Heading, Text, Stack, Image, Grid, SimpleGrid, Box} from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import Header from "../components/Header";
import Footer from "../components/Footer";
import StyledButton from "../components/StyledButton";

// This is the default breakpoint
createBreakpoints({
sm: "30em",
md: "48em",
lg: "62em"
})

const FeaturedProjectsList = () =>{
  const [ projects] = useState([
    {"name":"Open Solutions Model: open source modeling of 100s of climate solutions", "link":""},
    {"name":"2022 Open Climate Research Fellowships", "link":""},
    {"name":"Climate Solutions Data Hub: open research on solution impacts", "link":""},
    {"name":"2023 Open Climate Research Fellowships", "link":""}
  ])
  
  return (
    <>
      <Box paddingBottom="3em" paddingTop="3em">
        <Text fontSize="36px" fontWeight="bold" textStyle="caps" textAlign="left">
          Recently Active Projects
        </Text>
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid templateColumns="1fr" width="80%" marginX="auto"  gap={6}  backgroundPosition="center" backgroundSize="cover" backgroundImage="url('img/assets/Rectangle 1083.png')">
        <Grid templateColumns="repeat(2, 1fr)" gap="10%" marginX={["-20px", "-50px", "-70px"]} marginTop="-100px">
          {projects.slice(0,2).map(project => (
          <Box w="100%" minHeight={["200px", "200px","300px"]} padding="45px 10px" position="relative" background="#F5F5F5" margin="auto"  key={project}>
            <Text boxSize="100%" >
              <Heading as="h2" size="md" textStyle="caps" fontSize={["15px", "20px", "30px"]} inlineSize="150px" overflowWrap="break-word" color="#00C24E">
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
            <StyledButton content={"Browse all projects"} />
          </Link>
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap="10%" marginX={["-20px", "-50px", "-70px"]} marginBottom="-100px">
          {projects.slice(2,4).map(project => (
          <Box w="100%" minHeight={["200px", "200px","300px"]} padding="45px 10px" position="relative" background="#F5F5F5" margin="auto"  key={project}>
            <Text boxSize="100%" >
              <Heading as="h2" size="md" textStyle="caps" fontSize={["15px", "20px", "30px"]} color="#00C24E">
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
       <br></br>
       <br></br>
       <br></br>
       <br></br>
    </>
  )
}

const Partners = () =>{
  return(
    <>
      <Box paddingBottom="3em" paddingTop="3em">
        <Text fontSize="36px" fontWeight="bold" textStyle="caps" textAlign="left">
          Our Partners
        </Text>
      </Box>
      <SimpleGrid minChildWidth="370px" padding="50px" spacing="40px" width="100%" >
        <Image marginX="auto" maxWidth={["250px", "250px", "360px"]} src="img/assets/Group 53.png" alt="Global Council for Science and Education" />
        <Image marginX="auto" maxWidth={["250px", "250px", "360px"]} src="img/assets/image 3.png" alt="Climatebase" />
        <br></br>
        <Image marginX="auto" maxWidth={["250px", "250px", "360px"]} src="img/assets/image 2.png" alt="Project Drawdown" />
        <Image marginX="auto" maxWidth={["250px", "250px", "360px"]} src="img/assets/Group 23.png" alt="Drawdown GA" />
        <Image marginX="auto" maxWidth={["250px", "250px", "360px"]} src="img/assets/drawdown.png" alt="Drawdown Europe" />
        <Image marginX="auto" maxWidth={["250px", "250px", "360px"]} src="img/assets/Ellipse 10.png" alt="ECOSIA" />
        <Image marginX="auto" maxWidth={["250px", "250px", "360px"]} src="img/assets/Group 52.png" alt="One Project" />
      </SimpleGrid>
    </>
  )
}

const Body = () =>{
  return (
    <>
      <Box paddingBottom="3em" paddingTop="3em">
          <Text fontSize="36px" fontWeight="bold" textStyle="caps" textAlign="left">
            Who We Are
          </Text>
      </Box>
      <Grid templateColumns="1fr 1.5fr" width={["90%", "70%", "50%"]} marginX="auto" gap={6} padding="40px" backgroundImage="url('img/assets/Rectangle 1082.png')" backgroundPosition="center" backgroundSize="cover">
        <Stack marginLeft={["-20%", "-35%", "-40%"]} gap={6}>
          <Box textAlign="center" padding="20px" paddingTop="0px" minWidth="200px" maxWidth="250px" border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md"> 12 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue"> Countries </Heading>
          </Box>
          <Box textAlign="center" padding="20px" paddingTop="0px" minWidth="200px" maxWidth="250px" border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md"> 300 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue"> Collaborators </Heading>
          </Box>
          <Box textAlign="center" padding="20px" paddingTop="0px" minWidth="200px" maxWidth="250px" border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md"> 500 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue"> Projects </Heading>
          </Box>
        </Stack>
          <Box padding="20px" maxWidth={["100%"]} border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
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
            <Image maxWidth="80px" src="img/assets/Linear2.png" alt="Segun Adebayo" />
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
            <Image maxWidth="80px" src="img/assets/Linear.png" alt="Segun Adebayo" />
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
            <Image maxWidth="80px" src="img/assets/Linear3.png" alt="Segun Adebayo" />
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
        <Body />
        <FeaturedProjectsList />
        </Stack>
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
  </>
  )
}

export default Home;
