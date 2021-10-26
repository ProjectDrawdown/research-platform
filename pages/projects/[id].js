import React from "react";
import fs from "fs";
import PropTypes from 'prop-types'
import { extendTheme, Button, ChakraProvider, Link, Heading, Text, Box, Avatar, Grid, GridItem } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import matter from 'gray-matter';
import StyledButton from '../../components/StyledButton';
import getStaticFilesFrontMatter from '../../getStatic';
import Footer from "../../components/Footer";

  // This is the default breakpoint
  createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  })
  
  const theme = extendTheme({
    fonts: {
      heading: "Sora",
      body: "Sora",
    },
  })
  

function Project({
  data
}) {
  return (
    <ChakraProvider theme={theme}>
    <Box background="#FFFFFF" border="4px solid #000000" fontWeight="bold" padding={{base: "25px", "2xl":"70px"}} w={{base:"100%", sm:"100%", md:"90%", lg:"80%", xl:"80%", "2xl":"90%"}} boxSizing="border-box" borderRadius="10px" marginTop="1em" marginLeft="10px">
          <Grid templateColumns="repeat(5, 1fr)">
            <GridItem colSpan={3}>
              <Heading as="h1" textStyle="caps" fontSize={{base:"18px", sm:"25", md:"30px", "2xl":"98px"}} left="78px" top="93px" textAlign="left">
                Project Detail
                {data.active && <Button bg="#FAD546" marginX="10px" padding={{base:"8px",sm:"8px",md:"8px",lg:"8px",xl:"8px","2xl":"26px"}} fontSize={{base:"8px",sm:"8px",md:"8px",lg:"8px",xl:"8px","2xl":"30px"}} border="1px solid #000" color="#000" textTransform="uppercase" h="18px">Active</Button>}
              </Heading>
            </GridItem>
            <GridItem colSpan={1} />
            <GridItem colSpan={1}>
              <StyledButton content="PROJECT LINK" href={data.link} />
            </GridItem>
          </Grid>
          <Link fontSize={{base:"15px", "2xl":"40px"}} paddingRight={["10%", "35%"]} textAlign="left" href="/projects" >
            {"<< Back to project listing"}
          </Link>
          <Text fontSize={{base:"15px", "2xl":"35px"}} marginTop="2vh" marginBottom="10px">{data.name}</Text>
          {data.video &&
            <iframe
              src={data.video}
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
              style={{maxWidth: "640px", width: "90%", minHeight:"374px", maxHeight: "375px"}}
            />
          }
          <Heading as="h3" fontSize={{base:"20px", "2xl":"40px"}} marginTop="2vh"> Description: </Heading>
          <Text fontSize={{base:"15px", "2xl":"35px"}} paddingRight={["10%", "35%"]}  textAlign="left" >
            {data.description}
          </Text>
          <Heading as="h3" fontSize={{base:"20px", "2xl":"40px"}} marginTop="5vh"> Collaborators: </Heading>
          {data.collaborators.map((collaborator, collaboratorIndex) => <Avatar name={collaborator} src="https://bit.ly/broken-link" marginTop="2vh" marginX="10px" key={collaboratorIndex}/>)}
          <Heading as="h3" fontSize={{base:"20px", "2xl":"40px"}} marginTop="5vh"> Hub resources: </Heading>
          <Text fontSize="20px" marginTop="2vh">
            <ul>
            {data.resources.map((resource, k) => (
              <li key={k}>
                <b>{resource.name}</b>
                <p>{resource.description}</p>
                <div>
                  <Link marginLeft="1em" color="#2995F8" href={resource.file}>
                    {resource.file}
                  </Link>
                </div>
                <div>
                  <Link marginLeft="1em" color="#2995F8" href={resource.link}>
                    {resource.link}
                  </Link>
                </div>
              </li>
            ))}
            </ul>
          </Text>
        </Box>
        <Footer />
      </ChakraProvider>
)
}

Project.propTypes = {
  data: PropTypes.object
}

export const getStaticPaths = async () => {
  const paths = fs.readdirSync('projects');
  const pathsSlugs = paths.map(path => '/projects/' + path.replace('.md', ''));
  return {
    paths: pathsSlugs,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.id;
  const source = fs.readFileSync('projects/' + slug + '.md', "utf8");
  const data = matter(source).data;

  const resources = await getStaticFilesFrontMatter("resources");

  const associatedResources = resources.filter((resource) => {
    return resource && resource.projects && resource.projects.indexOf(data.name) !== -1;
  });

  data["resources"] = associatedResources

  return {
    props: { data: data },
  };
};

export default Project

