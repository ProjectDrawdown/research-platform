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
    <Box display="flex" justifyContent="center" flexDirection="column" padding="70px">
      <Box paddingBottom="3em" paddingTop="3em" marginBottom={["350px", "350px", "0px"]} >
        <Text fontSize={["24px", "24px", "36px"]} fontWeight="bold" textStyle="caps" textAlign="left">
          Recently Active Projects
        </Text>
      </Box>
      <Center>
      <Grid marginTop="6em" marginBottom={["250px", "250px", "0px"]} templateColumns="1fr" width={["375px", "375px","800px"]} height={["375px","375px","800px"]} marginX="auto" backgroundPosition="center" backgroundSize="cover" backgroundImage="url('img/assets/Rectangle 1083.png')">
        <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={["10px", "10px", "10%"]} marginX={["0px", "0px", "-70px"]} marginTop={["-430px", "-430px", "-100px"]}>
          {projects.slice(0,2).map((project) => (
          <Box boxSizing="border-box" height={["290px", "290px","390px"]} padding="45px 10px" position="relative" background="#F5F5F5" margin="auto"  key={project} border="4px solid #000000" borderRadius="5px">
            <Text boxSize="85%" paddingLeft={["25px","35px","60px"]} >
              <Heading as="h2" fontFamily="Sora" fontWeight="600" size="md" textStyle="caps" fontSize={["20px", "20px", "30px"]} color="#00C24E">
                {project.split('_')[0]}
              </Heading>
            </Text>
            <Link href={`/projects/${project.split('_')[3]}`} paddingLeft={["20px","40px","60px"]} textAlign="left" textTransform="uppercase" padding="1rem" fontWeight="bold" position="absolute" bottom="0px" backgroundColor="transparent">
              View
            </Link>
          </Box>
          ))}
        </Grid>
        <Heading as="h5" fontSize="18px" marginY={["20px", "20px", "0px"]} fontWeight="800" size="md" textStyle="caps" textTransform="uppercase" textAlign="center">
          <Link href="browseProjects">
            <StyledButton content={"Browse all projects"} />
          </Link>
        </Heading>
        <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={["10px", "10px", "10%"]} marginX={["0px", "0px", "-70px"]} marginBottom={["0px", "0px", "-100px"]} marginTop={["0px", "0px", "-100px"]}>
          {projects.slice(2,4).map((project) => (
          <Box boxSizing="border-box" height={["290px", "290px","390px"]} padding="45px 10px" position="relative" background="#F5F5F5" margin="auto"  key={project} border="4px solid #000000" borderRadius="5px">
            <Text boxSize="85%" paddingLeft={["25px","35px","60px"]} >
              <Heading as="h2" fontFamily="Sora" fontWeight="600" size="md" textStyle="caps" fontSize={["20px", "20px", "30px"]} color="#00C24E">
                {project.split('_')[0]}
              </Heading>
            </Text>
            <Link href={`/projects/${project.split('_')[3]}`} paddingLeft={["20px","40px","60px"]} textAlign="left" textTransform="uppercase" padding="1rem" fontWeight="bold" position="absolute" bottom="0px" backgroundColor="transparent">
              View
            </Link>
          </Box>
          ))}
        </Grid>
      </Grid>
      </Center>
    </Box>
  )
}

const Partners = () =>{
  return(
    <>
      <Box paddingBottom="3em" paddingTop="3em" paddingLeft="5%">
        <Text fontSize={["24px", "24px", "36px"]} fontWeight="bold" textStyle="caps" textAlign="left">
          Our Partners
        </Text>
      </Box>
      <Center>
      <SimpleGrid columns={[1,1,5]} justifyContent={["column-reverse", "row-reverse", "center"]} rowGap={["20px", "40px", "80px"]} maxWidth="90%" paddingRight="10%" paddingLeft="3%" >
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
    <Box paddingX="10px">
      <Box paddingBottom="3em" paddingTop="3em" paddingLeft="5%" marginBottom={["110px", "110px", "0px"]}>
          <Text fontSize={["24px", "24px", "36px"]} fontWeight="bold" textStyle="caps" textAlign="left">
            Who We Are
          </Text>
      </Box>
      <Center>
      <Grid templateColumns={["1fr", "1fr", "1fr 1.5fr"]} width={["90%", "70%", "50%"]} height={["375px","375px","X"]} marginX="auto"  padding={["0px", "0px", "40px"]} backgroundImage="url('img/assets/Rectangle 1082.png')" backgroundPosition="center" backgroundSize="cover">
        <Stack marginLeft={["auto", "auto", "-40%"]} marginX={["auto"]} marginTop={["-30%", "-30%", "0px"]} gap={6}>
          <Box textAlign="center" padding="20px" paddingTop="0px" width="250px" border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md"> 12 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue"> Countries </Heading>
          </Box>
          <Box textAlign="center" padding="20px" paddingTop="0px" width="250px" border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md"> 300 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue"> Collaborators </Heading>
          </Box>
          <Box textAlign="center" padding="20px" paddingTop="0px" width="250px" border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md"> 500 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue"> Projects </Heading>
          </Box>
        </Stack>
        <Center>
          <Box width={["250px","250px","355px"]} height={["255px","255px","355px"]} padding={["15px", "20px", "25px"]} marginTop={["6px", "6px", "0px"]} marginBottom={["-30%", "-30%", "0px"]} border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Text paddingTop="10px" fontSize={["15px","20px","24px"]} fontWeight="bold">
              There could be a short description here with a bit more inspirational somethn’ somethn’
            </Text>
          </Box>
        </Center>
      </Grid>
      </Center>
      <Center flexDirection="column" alignItems="center" marginTop={["90px", "90px", "0px"]}>
      <Stack spacing="50px" display="flex" flexDirection="column" alignItems="flex-start">
        <Grid templateColumns="1fr" gap={6}>
          <Box>
            <Heading as="h4" mt="5" size="md" flex="1" textStyle="caps" textAlign="left" paddingTop="100px" paddingLeft="15px">
              Are you Interested in Contributing?
            </Heading>
        </Grid>
        <Grid templateColumns="80px 1fr" gap={6}>
          <Box display="flex" justifyContent="flex-start">
            <Image maxWidth="80px" src="img/assets/Linear2.png" alt="Segun Adebayo" />
          </Box>
          <Box>
            <Text fontWeight="600" fontFamily="Sora" marginBottom="20px">
              Have a Resource to Add?
            </Text>
            <Button borderRadius="0px" lineHeight="24px" fontWeight="800" border="2px solid #000000" background="#ffffff" fontFamily="Sora">GET STARTED</Button>
          </Box>
        </Grid>
        <Grid templateColumns="80px 1fr" gap={6} >
          <Box display="flex" justifyContent="flex-end">
            <Image maxWidth="80px" src="img/assets/Linear.png" alt="Segun Adebayo" />
          </Box>
          <Box >
            <Text fontWeight="600" fontFamily="Sora" marginBottom="20px">
              Engergized by this but not sure how to contibute?
            </Text>
            <Button borderRadius="0px" lineHeight="24px" fontWeight="800" border="2px solid #000000" background="#ffffff" fontFamily="Sora"> CONNECT ON SLACK</Button>
          </Box>
        </Grid>
        <Grid templateColumns="80px 1fr" gap={6} >
          <Box display="flex" justifyContent="flex-end">
            <Image maxWidth="80px" src="img/assets/Linear3.png" alt="Segun Adebayo" />
          </Box>
          <Box>
            <Text fontWeight="600" fontFamily="Sora" marginBottom="20px">
              Propose your own project.
            </Text>
            <Button borderRadius="0px" lineHeight="24px"  fontWeight="800" border="2px solid #000000" background="#ffffff" fontFamily="Sora">CONTACT US</Button>
          </Box>
        </Grid>
      </Stack>
      </Center>
    </Box>
  )
}

const Home = () => {
  let { title, description } = attributes;
  return (
    <div style={{marginX: '20px', marginBottom: '0px'}}>
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
  </div>
  )
}

export default Home;
