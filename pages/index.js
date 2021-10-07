import React from "react"
import Head from "next/head"
import { ChakraProvider, extendTheme, Flex, Link, Center, Button, Heading, Text, Stack, Image, Grid, SimpleGrid, Box} from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import Header from "../components/Header";
import Footer from "../components/Footer";
import StyledButton from "../components/StyledButton";
import { attributes } from '../content/home.md';

// This is the default breakpoint
createBreakpoints({
sm: "30em",
md: "48em",
lg: "62em"
})

const theme = extendTheme({
  fonts: {
    heading: "Sora",
    body: "Sora",
  },
})


const FeaturedProjectsList = () => {
  const { projects } = attributes;
  return (
    <>
      <Box paddingBottom="3em" paddingTop="3em" paddingLeft="5%">
        <Text fontSize="36px" fontWeight="bold" textStyle="caps" textAlign="left">
          Recently Active Projects
        </Text>
      </Box>
      <Center>
      <Grid marginTop="6em" templateColumns="1fr" width={["300px", "400px","800px"]} height={["700px", "700px","800px"]} marginX="auto"  gap={6}  backgroundPosition="center" backgroundSize="cover" backgroundImage="url('img/assets/Rectangle 1083.png')">
        <Grid templateColumns="repeat(2, 1fr)" gap="10%" marginX={["-20px", "-50px", "-70px"]} marginTop="-100px">
          {projects.map(project => (
          <Box width={["170px", "190px","390px"]} height={["290px", "290px","390px"]} padding="45px 10px" position="relative" background="#F5F5F5" margin="auto"  key={project}>
            <Text boxSize="85%" paddingLeft={["25px","35px","60px"]} >
              <Heading as="h2" fontFamily="Sora" size="md" textStyle="caps" fontSize={["15px", "20px", "30px"]} color="#00C24E">
                {project.split('_')[0]}
              </Heading>
            </Text>
            <Link href={`/projects/${project.split('_')[2]}`} paddingLeft={["20px","40px","60px"]} textAlign="left" padding="1rem" fontWeight="bold" position="absolute" bottom="0px" backgroundColor="transparent">
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
      </Grid>
      </Center>
    </>
  )
}

const Partners = () =>{
  return(
    <>
      <Box paddingBottom="3em" paddingTop="3em" paddingLeft="5%">
        <Text fontSize="36px" fontWeight="bold" textStyle="caps" textAlign="left">
          Our Partners
        </Text>
      </Box>
      <Center>
      <SimpleGrid columns={[1,2,5]} justifyContent="center" rowGap="80px" maxWidth="90%" paddingRight="10%" paddingLeft="3%" >
      <div></div>
        <Image marginX="auto" display="block" maxWidth={["250px", "250px", "360px"]} src="img/assets/Group 53.png" alt="Global Council for Science and Education" />
        <div></div>
        <Image marginX="auto" display="block" maxWidth={["250px", "250px", "360px"]} src="img/assets/image 3.png" alt="Climatebase" />
        <div></div>
        <Image marginX="auto" display="block" maxWidth={["250px", "250px", "360px"]} src="img/assets/image 2.png" alt="Project Drawdown" />
        <div></div>
        <Image marginX="auto" display="block" maxWidth={["250px", "250px", "360px"]} src="img/assets/Group 23.png" alt="Drawdown GA" />
        <div></div>
        <Image marginX="auto" display="block" maxWidth={["250px", "250px", "360px"]} src="img/assets/drawdown.png" alt="Drawdown Europe" />
        <div></div>
        <Image marginX="auto" display="block" maxWidth={["250px", "250px", "360px"]} src="img/assets/Ellipse 10.png" alt="ECOSIA" />
        <div></div>
        <Image marginX="auto" display="block" maxWidth={["250px", "250px", "360px"]} src="img/assets/Group 52.png" alt="One Project" />
        <div></div>
      </SimpleGrid>
      </Center>
    </>
  )
}

const Body = () =>{
  return (
    <>
      <Box paddingBottom="3em" paddingTop="3em" paddingLeft="5%">
          <Text fontSize="36px" fontWeight="bold" textStyle="caps" textAlign="left">
            Who We Are
          </Text>
      </Box>
      <Center>
      <Grid templateColumns="1fr 1.5fr" width={["90%", "70%", "50%"]} marginX="auto"  padding="40px" backgroundImage="url('img/assets/Rectangle 1082.png')" backgroundPosition="center" backgroundSize="cover">
        <Stack marginLeft={["-20%", "-35%", "-40%"]} gap={6}>
          <Box textAlign="center" padding="20px" paddingTop="0px" width={["150px","150px","250px"]} border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md"> 12 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue"> Countries </Heading>
          </Box>
          <Box textAlign="center" padding="20px" paddingTop="0px" width={["150px","150px","250px"]} border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md"> 300 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue"> Collaborators </Heading>
          </Box>
          <Box textAlign="center" padding="20px" paddingTop="0px" width={["150px","150px","250px"]} border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md"> 500 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue"> Projects </Heading>
          </Box>
        </Stack>
          <Box width={["180px","200px","355px"]} height={["255px","255px","355px"]} border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Center>
            <Text paddingTop="10px" fontWeight="bold" boxSize="55%">
              There could be a short description here with a bit more inspirational somethn’ somethn’
            </Text>
            </Center>
          </Box>
      </Grid>
      </Center>
      <Center>
      <Heading as="h4" mt="5" size="md" textStyle="caps" paddingTop="100px">
        Are you Interested in Contributing?
      </Heading>
      </Center>
      <Center>
      <Stack spacing="50px" padding="2rem">
        <Grid templateColumns="1fr 1fr" gap={6} >
          <Box display="flex" justifyContent="flex-end">
            <Image maxWidth="80px" src="img/assets/Linear2.png" alt="Segun Adebayo" />
          </Box>
          <Box w="100%">
            <Text fontWeight="bold" fontFamily="Sora" marginBottom="20px">
              Have a Resource to Add?
            </Text>
            <Button borderRadius="0px" border="2px solid #000000" background="#ffffff" fontFamily="Sora">GET STARTED</Button>
          </Box>
        </Grid>
        <Grid templateColumns="1fr 1fr" gap={6} >
          <Box display="flex" justifyContent="flex-end">
            <Image maxWidth="80px" src="img/assets/Linear.png" alt="Segun Adebayo" />
          </Box>
          <Box w="100%">
            <Text fontWeight="bold" fontFamily="Sora" marginBottom="20px">
              Engergized by this but not sure how to contibute?
            </Text>
            <Button borderRadius="0px" border="2px solid #000000" background="#ffffff" fontFamily="Sora"> CONNECT ON SLACK</Button>
          </Box>
        </Grid>
        <Grid templateColumns="1fr 1fr" gap={6} >
          <Box display="flex" justifyContent="flex-end">
            <Image maxWidth="80px" src="img/assets/Linear3.png" alt="Segun Adebayo" />
          </Box>
          <Box w="100%">
            <Text fontWeight="bold" fontFamily="Sora" marginBottom="20px">
              Propose your own project.
            </Text>
            <Button borderRadius="0px" border="2px solid #000000" background="#ffffff" fontFamily="Sora">CONTACT US</Button>
          </Box>
        </Grid>
      </Stack>
      </Center>
    </>
  )
}

const Home = () => {
  let { title, description } = attributes;
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <ChakraProvider theme={theme}>
        <Flex as="nav" flexWrap="wrap" direction="row">
        <Header title={title} description={description} />
        <Stack marginTop="2rem" width="100vw">
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
