import React from "react";
import fs from "fs";
import PropTypes from 'prop-types'
import { Link, Heading, Text, Box, Avatar, Grid, GridItem } from "@chakra-ui/react"
import matter from 'gray-matter';
import StyledButton from '../../components/StyledButton';
import getStaticFilesFrontMatter from '../../getStatic';

function Project({
  data
}) {
  return (
    <Box top="0px" left="0px" width="100%" height="max-content">
        <Box background="#FFFFFF"
        w={["80%", "60%", "50%"]}
        left="10%"
        top="53px"
        zIndex="100"
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
          <Grid templateColumns="repeat(5, 1fr)">
            <GridItem colSpan={3}>
              <Heading as="h1" textStyle="caps" fontSize={["20px", "30px", "48px"]} left="78px" top="93px" textAlign="left">
                Project Detail
              </Heading>
            </GridItem>
            <GridItem colSpan={1} />
            <GridItem colSpan={1}>
              <StyledButton content="PROJECT LINK" href={data.link} />
            </GridItem>
          </Grid>
          <Link fontSize={["15px", "15px", "15px"]} paddingRight={["10%", "35%"]}  textAlign="left" href="/" >
            {"<< Back to project listing"}
          </Link>
          <Text fontSize="20px" marginTop="2vh">{data.name}</Text>
          {data.video &&
            <iframe
              src={data.video}
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
            />
          }
          <Heading as="h3" size="md" marginTop="2vh"> Description: </Heading>
          <Text fontSize="20px" fontWeight="600px" paddingRight={["10%", "35%"]}  textAlign="left" >
            {data.description}
          </Text>
          <Heading as="h3" size="md" marginTop="5vh"> Collaborators: </Heading>
          {data.collaborators.map((collaborator, collaboratorIndex) => <Avatar name={collaborator} src="https://bit.ly/broken-link" marginTop="2vh" key={collaboratorIndex}/>)}
          <Heading as="h3" size="md" marginTop="5vh"> Hub resources: </Heading>
          <Text fontSize="20px" marginTop="2vh">
            <ul>
            {data.resources.map((resource, k) => (
              <li key={k}>
                <b>{resource.name}</b>
                <p>{resource.description}</p>
                <a href={resource.file}>{resource.file}</a>
                <a href={resource.link}>{resource.link}</a>
              </li>
            ))}
            </ul>
          </Text>
        </Box>
        <Box position="relative"
        h={["250px", "250px", "500px"]}
        w={["60%", "50%"]}
        left = {["40%"]}
        top = {["150px" ]}
        zIndex="90"
        marginBottom="150px"
        backgroundImage = "url('img/assets/Rectangle 1087.png')"
        mixBlendMode="normal">
          This is awesome.
        </Box>
      </Box>
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

