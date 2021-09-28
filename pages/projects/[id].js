import React from "react";
import fs from "fs";
import PropTypes from 'prop-types'
import { MDXRemote } from 'next-mdx-remote'
import { ChakraProvider, Flex, Link, Button, Heading, Text, Stack, Image, Grid, SimpleGrid, Box} from "@chakra-ui/react"
import matter from 'gray-matter';

function Post({
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
          <Heading as="h1" textStyle="caps" fontSize={["20px", "30px", "48px"]} left="78px" top="93px" textAlign="left" paddingRight={["10%", "25%"]}>
            Project Detail
          </Heading>
          <Link fontSize={["15px", "15px", "15px"]} paddingRight={["10%", "35%"]}  textAlign="left" href="/" >
            {"<< Back to project listing"}
          </Link>
          <Text fontSize="20px">{data.name}</Text>
          <Text fontSize="20px" fontWeight="600px" paddingTop="2rem" paddingRight={["10%", "35%"]}  textAlign="left" >
            {data.description}
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
        mixBlendMode="normal"></Box>
      </Box>
)
}

Post.propTypes = {
  data: PropTypes.array
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
  const data = matter(source)
  return {
    props: { data: data.data },
  };
};

export default Post

