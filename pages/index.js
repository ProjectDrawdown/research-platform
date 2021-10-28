import React from "react"
import {
  Link,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import Header from "../components/Header";
import SubHeading from "../components/SubHeading";
import RecentProject from "../components/RecentProject";
import ContributionOption from "../components/ContributionOption";
import BorderBox from "../components/BorderBox";
import Footer from "../components/Footer";
import StyledButton from "../components/StyledButton";
import { attributes } from '../content/home.md';
import "@fontsource/sora/500.css";
import "@fontsource/sora/800.css";

// This is the default breakpoint
createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em"
})

const FeaturedProjectsList = () => {
  const { projects, bottom_image } = attributes;
  
  return (
    <>
      <SubHeading
        title="Recently Active Projects"
      />

      <Grid
        mx={[0, "5rem"]}
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(5, 1fr)"
        gap={6}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={["100%", "75% 75%"]}
        backgroundImage={"url('" + bottom_image + "')"}>

        {projects.slice(0,2).map((project, index) => {
            return (
              <React.Fragment
                key={`project_${index}`}>
                {
                  index % 2 != 0 &&
                    <GridItem />
                }
                <RecentProject 
                  project={project}
                />
              </React.Fragment>
            )
          })
        }

        <GridItem
          colStart={[2,3]}
          colSpan={3}>
            <Heading as="h5" fontSize="18px" marginY="2rem" fontWeight="800" size="md" textStyle="caps" textTransform="uppercase" textAlign="center">
              <Link href="browseProjects">
                <StyledButton content={"Browse all projects"} />
              </Link>
            </Heading>
        </GridItem>

        {projects.slice(2,4).map((project, index) => {
            return (
              <React.Fragment
                key={`project_2_${index}`}>
                {
                  index % 2 != 0 &&
                    <GridItem />
                }
                <RecentProject 
                  project={project}
                />
              </React.Fragment>
            )
          })
        }
      </Grid>
    </>
  )
}

const Partners = () =>{
  return(
    <>
      <SubHeading
        title="Our Partners"
      />
      <Grid
        px="1rem"
        templateColumns="repeat(5, 1fr)"
        gap={6}
        >
        <GridItem colSpan={[5, 2]} colStart={[1, 2]}>
          <Image src="img/assets/Group 53.png" alt="Global Council for Science and Education" />
        </GridItem>
        <GridItem colSpan={[5,2]}>
          <Image src="img/assets/image 3.png" alt="Climatebase" />
        </GridItem>
        <GridItem colSpan={[5, 2]}>
          <Image marginX={[0, "auto"]} src="img/assets/image 2.png" alt="Project Drawdown" />
        </GridItem>
        <GridItem colSpan={[5,1]}>
          <Image marginX={[0, "auto"]} src="img/assets/Group 23.png" alt="Drawdown GA" />
        </GridItem>
        <GridItem colSpan={[5,2]}>
          <Image marginX={[0, "auto"]} src="img/assets/drawdown.png" alt="Drawdown Europe" />
        </GridItem>
        <GridItem colSpan={[5, 2]} colStart={[1, 2]}>
          <Image src="img/assets/Ellipse 10.png" alt="ECOSIA" />
        </GridItem>
        <GridItem colSpan={[5,2]}>
          <Image src="img/assets/Group 52.png" alt="One Project" />
        </GridItem>
      </Grid>
    </>
  )
}

const Contribution = () => {
  return (
    <>
      <Grid
        px="1rem"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        mb={8}
      >
        <GridItem
          colStart={[1, 3]}
          colSpan={[5, 1]}>
          <Image marginX="auto" src="img/assets/wavy2.png" />
        </GridItem>
        <GridItem
          colStart={[1, 2]}
          colSpan={[5, 3]}>
            <Heading as="h4" textAlign="center" fontSize={["2xl", "3xl"]}>
              Are you Interested in Contributing?
            </Heading>
        </GridItem>
      </Grid>

      <Grid
        my="1rem"
        templateColumns="repeat(3, 1fr)">
          <ContributionOption
            title="Have a Resource to Add?"
            buttonTitle="GET STARTED"
            image={<Image marginX="auto" src="img/assets/Linear2.png" alt="Segun Adebayo" />}
            onClick={() => { console.log('Add resource action') }}/>
          <ContributionOption
            title="Engergized by this but not sure how to contibute?"
            buttonTitle="CONNECT ON SLACK"
            image={<Image marginX="auto" src="img/assets/Linear.png" alt="Segun Adebayo" />}
            onClick={() => { console.log('Add resource action') }}/>
          <ContributionOption
            title="Propose your own project."
            buttonTitle="CONTACT US"
            image={<Image marginX="auto" src="img/assets/Linear3.png" alt="Segun Adebayo" />}
            onClick={() => { console.log('Add resource action') }}/>
      </Grid>
    </>
  )
}

const AboutUs = ({ project_image }) => {
  return (
    <>
      <SubHeading
        title="Who We Are"
      />
      
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={[4, 64]}
        mx={[0, "5rem"]}
        mb={8}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={["100%", "75% 75%"]}
        backgroundImage={"url('" + project_image + "')"}>
          <GridItem colSpan={[2, 1]}>
            <Grid
              templateRows="repeat(3, 1fr)"
              gap={4}>
                <GridItem>
                  <BorderBox textAlign="center" padding="1rem" backgroundColor="#ffffff">
                    <Heading as="h2" mt="5" size="md" fontWeight="700" fontStyle="normal" fontSize={["40px","40px","48px"]}> 12 </Heading>
                    <Heading as="h4" mt="5" size="md" color="blue" fontWeight="400" fontSize="36px" fontFamily="work-sans"> Countries </Heading>
                  </BorderBox>
                </GridItem>
                <GridItem>
                  <BorderBox textAlign="center" padding="1rem" backgroundColor="#ffffff">
                    <Heading as="h2" mt="5" size="md" fontWeight="700" fontStyle="normal" fontSize={["40px","40px","48px"]}> 300 </Heading>
                    <Heading as="h4" mt="5" size="md" color="blue" fontWeight="400" fontSize="36px" fontFamily="work-sans"> Collaborators </Heading>
                  </BorderBox>
                </GridItem>
                <GridItem>
                  <BorderBox textAlign="center" padding="1rem" backgroundColor="#ffffff">
                    <Heading as="h2" mt="5" size="md" fontWeight="700" fontStyle="normal" fontSize={["40px","40px","48px"]}> 500 </Heading>
                    <Heading as="h4" mt="5" size="md" color="blue" fontWeight="400" fontSize="36px" fontFamily="work-sans"> Projects </Heading>
                  </BorderBox>
                </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={[2, 1]}>
            <Grid
              templateRows="repeat(2, 1fr)"
              height="100%">
                <GridItem>
                  <BorderBox height="100%" padding="1rem" backgroundColor="#ffffff">
                    <Text>
                      There could be a short description here with a bit more inspirational somethn’ somethn’
                    </Text>
                  </BorderBox>
                </GridItem>
              </Grid>
          </GridItem>
      </Grid>
    </>
  )
}

const Home = () => {
  let { title, description, header_image, project_image, bottom_image } = attributes;
  
  return (
    <div style={{marginX: '20px', marginBottom: '0px'}}>
      <Header title={title} description={description} image={header_image}/>
      <Partners />
      <FeaturedProjectsList />
      <Contribution />
      <AboutUs project_image={project_image} />
      <Footer bottom_image={bottom_image} />
  </div>
  )
}

export default Home;
