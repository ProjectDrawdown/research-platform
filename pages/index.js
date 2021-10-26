import React from "react"
import Head from "next/head"
import { ChakraProvider, extendTheme, Flex, Link, Center, Button, Heading, Text, Stack, Image, Grid, SimpleGrid, Box} from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import Header from "../components/Header";
import Footer from "../components/Footer";
import StyledButton from "../components/StyledButton";
import { attributes } from '../content/home.md';
import "@fontsource/work-sans/400.css"

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
  const { projects, bottom_image } = attributes;
  
  return (
    <Box display="flex" justifyContent="center" flexDirection="column" padding="70px">
      <Box paddingBottom="1em" paddingTop="3em" marginBottom={["350px", "350px", "0px"]} >
        <Text fontSize={["24px", "24px", "36px"]} fontWeight="bold" textStyle="caps" textAlign="left">
          Recently Active Projects
        </Text>
      </Box>
      <Center>
      <Grid marginTop="6em" marginBottom={["250px", "250px", "0px"]} templateColumns="1fr" width={["375px", "375px","800px"]} height={["375px","375px","800px"]} marginX="auto" backgroundPosition="center" backgroundSize="cover" backgroundImage={"url('" + bottom_image + "')"}>
        <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={["10px", "10px", "10%"]} marginX={["0px", "0px", "-70px"]} marginTop={["-430px", "-430px", "-100px"]}>
          {projects.slice(0,2).map((project) => (
          <Box boxSizing="border-box" height={["290px", "290px","390px"]} padding="45px 10px" position="relative" background="#F5F5F5" margin="auto"  key={project} border="4px solid #000000" borderRadius="5px">
            <Text boxSize="85%" paddingLeft={["25px","35px","60px"]} >
              <Heading as="h2" fontFamily="Sora" fontWeight="600" size="md" textStyle="caps" fontSize={["20px", "20px", "30px"]} color="#00C24E">
              <Link href={`/projects/${project.split('__')[3]}`} >
                {project.split('_')[0]}
              </Link>
              </Heading>
            </Text>
            <Link href={`/projects/${project.split('__')[3]}`} paddingLeft={["20px","40px","60px"]} textAlign="left" textTransform="uppercase" padding="1rem" fontWeight="bold" position="absolute" bottom="0px" backgroundColor="transparent">
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
              <Link href={`/projects/${project.split('__')[3]}`} >
                {project.split('_')[0]}
              </Link>
              </Heading>
            </Text>
            <Link href={`/projects/${project.split('__')[3]}`} paddingLeft={["20px","40px","60px"]} textAlign="left" textTransform="uppercase" padding="1rem" fontWeight="bold" position="absolute" bottom="0px" backgroundColor="transparent">
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
      <Box paddingBottom="3em" paddingTop="3em" paddingLeft={["17%", "10%", "10%"]}>
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

const Body = ({ project_image }) =>{
  return (
    <Box paddingX="10px">
      <Box paddingBottom="3em" paddingTop="3em" paddingLeft={["17%", "10%", "10%"]} marginBottom={["110px", "110px", "0px"]}>
          <Text fontSize={["24px", "24px", "36px"]} fontWeight="bold" textStyle="caps" textAlign="left">
            Who We Are
          </Text>
      </Box>
      <Center>
      <Grid templateColumns={["1fr", "1fr", "1fr 1.5fr"]} width={["90%", "70%", "50%"]} height={["375px","375px","700px"]} marginX="auto"  padding={["0px", "0px", "40px"]} backgroundImage={ project_image ? "url('" + project_image+ "')" : ''} backgroundPosition="center" backgroundSize="cover">
        <Stack marginLeft={["auto", "auto", "-40%"]} marginX={["auto"]} marginTop={["-30%", "-30%", "0px"]} gap={6}>
          <Box textAlign="center" padding="20px" paddingTop="1rem" height={["162px","202px","202px"]} width={["250px","250px","380px"]} border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md" fontWeight="700" fontStyle="normal" fontSize={["40px","40px","48px"]}> 12 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue" fontWeight="400" fontSize="36px" fontFamily="work-sans"> Countries </Heading>
          </Box>
          <Box textAlign="center" padding="20px" paddingTop="1rem" height={["162px","202px","202px"]} width={["250px","250px","380px"]} border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md" fontWeight="700" fontStyle="normal" fontSize={["40px","40px","48px"]}> 300 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue" fontWeight="400" fontSize="36px" fontFamily="work-sans"> Collaborators </Heading>
          </Box>
          <Box textAlign="center" padding="20px" paddingTop="1rem" height={["162px","202px","202px"]} width={["250px","250px","380px"]} border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Heading as="h2" mt="5" size="md" fontWeight="700" fontStyle="normal" fontSize={["40px","40px","48px"]}> 500 </Heading>
            <Heading as="h4" mt="5" size="md" color="blue" fontWeight="400" fontSize="36px" fontFamily="work-sans"> Projects </Heading>
          </Box>
        </Stack>
        <Center>
          <Box width={["250px","250px","355px"]} height={["255px","255px","355px"]} padding={["15px", "20px", "25px"]} marginTop={["6px", "6px", "-250px"]} marginBottom={["-30%", "-30%", "0px"]} border="2px solid #000000" borderRadius="5px" background="#FFFFFF">
            <Text paddingTop="10px" fontSize={["20px","20px","24px"]} fontWeight="700">
              There could be a short description here with a bit more inspirational somethn’ somethn’
            </Text>
          </Box>
        </Center>
      </Grid>
      </Center>
      <Center flexDirection="column" alignItems="center" marginTop={["90px", "90px", "0px"]}>
      <Image src="img/assets/wavy2.png" width={["80%", "80%","25%"]} marginLeft={["10%", "10%", "-120px"]} marginTop={["310px","360px","134px"]} maxHeight="40px" objectFit="contain" />
      <Heading as="h4" mt="5" size="md" flex="1" textStyle="caps" fontSize="24px" marginBottom="30px" marginTop="72px" marginLeft={["17%", "10%", "-120px"]} textAlign={["left", "left", "center"]}>
        Are you Interested in Contributing?
      </Heading>
      <Stack spacing="50px" display="flex" flexDirection="column" alignItems="flex-start">
        <Grid templateColumns="80px 1fr" gap={6}>
          <Box display="flex" justifyContent="flex-start">
            <Image maxWidth="80px" src="img/assets/Linear2.png" alt="Segun Adebayo" />
          </Box>
          <Box>
            <Text fontWeight="600" lineHeight="28px" fontFamily="Sora" marginBottom="18px">
              Have a Resource to Add?
            </Text>
            <Button borderRadius="0px" lineHeight="24px" fontSize="16px" fontWeight="800" border="2px solid #000000" background="#ffffff" fontFamily="Sora">GET STARTED</Button>
          </Box>
        </Grid>
        <Grid templateColumns="80px 1fr" gap={6} >
          <Box display="flex" justifyContent="flex-end">
            <Image maxWidth="80px" src="img/assets/Linear.png" alt="Segun Adebayo" />
          </Box>
          <Box >
            <Text fontWeight="600" lineHeight="28px" fontFamily="Sora" marginBottom="18px">
              Engergized by this but not sure how to contibute?
            </Text>

            <Link href="/connect" >
              <Button borderRadius="0px" lineHeight="24px" fontSize="16px" fontWeight="800" border="2px solid #000000" background="#ffffff" fontFamily="Sora"> CONNECT </Button>
            </Link>

          </Box>
        </Grid>
        <Grid templateColumns="80px 1fr" gap={6} >
          <Box display="flex" justifyContent="flex-end">
            <Image maxWidth="80px" src="img/assets/Linear3.png" alt="Segun Adebayo" />
          </Box>
          <Box>
            <Text fontWeight="600" lineHeight="28px" fontFamily="Sora" marginBottom="18px">
              Propose your own project.
            </Text>
            <Button borderRadius="0px" fontSize="16px" lineHeight="24px"  fontWeight="800" border="2px solid #000000" background="#ffffff" fontFamily="Sora">CONTACT US</Button>
          </Box>
        </Grid>
      </Stack>
      </Center>
    </Box>
  )
}

const Home = () => {
  let { title, description, header_image, project_image, bottom_image } = attributes;
  
  return (
    <div style={{marginX: '20px', marginBottom: '0px'}}>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <ChakraProvider theme={theme}>
        <Flex as="nav" flexWrap="wrap" direction="row">
        <Header title={title} description={description} image={header_image}/>
        <Stack marginTop="2rem" width="100vw">
        <Partners />
        <Body project_image={project_image} />
        <FeaturedProjectsList />
        </Stack>
        <Footer bottom_image={bottom_image} ></Footer>
      </Flex>
    </ChakraProvider>
  </div>
  )
}

export default Home;
