import React, { useState } from "react"
import Head from "next/head"
import PropTypes from 'prop-types'
import { ChakraProvider, extendTheme, Flex, FormControl,FormLabel, Heading, Button, Stack, VStack, HStack, Box, Input, Popover, Portal,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import Footer from "../components/Footer";
import StyledButton from "../components/StyledButton";
import BackButton from "../components/BackButton"
import getStaticFilesFrontMatter from '../getStatic'

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
  

export async function getStaticProps() {
  const projects = await getStaticFilesFrontMatter("projects")
  const resources = await getStaticFilesFrontMatter("resources")

  const preloadedProjects = projects.map((project) => {
    const associatedResources = resources.filter((resource) => {
      return resource && resource.projects && resource.projects.indexOf(project.name) !== -1
    })
    project.resources = associatedResources
    return project
  })

  return {
    props: {
      projects: preloadedProjects,
      resources: resources,
    },
  }
}

const AddForm = ({projects, setProjects, setPopState, setProjectsDefault}) =>{
  const [projectInput, setProjectInput] = useState({"name":"", "tag":""});

  const handleFormChange = (setValue, e) => {
    const newInput = {...projectInput};
    newInput[setValue] = e.target.value; 
    setProjectInput(newInput);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProjects = [...projects, projectInput];
    setProjects(newProjects);
    setProjectsDefault(newProjects);
    setPopState(false);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
    <VStack paddingTop="20px" paddingBottom="31px" marginLeft="10px" align="left">
      <HStack paddingBottom="10px">
        <FormControl as="fieldset" isRequired>
          <FormLabel > Name </FormLabel>
            <Input width="250px" value={projectInput.name} onChange={(e) => handleFormChange("name",e)}/>
        </FormControl>
      </HStack>
      <HStack paddingBottom="20px">
        <FormControl as="fieldset">
          <FormLabel > Tag </FormLabel>
            <Input width="250px" value={projectInput.tag} onChange={(e) => handleFormChange("tag",e)}/>
        </FormControl>
      </HStack>
      <Button colorScheme="blue" type="submit">Submit</Button>
    </VStack>
    </form>
  )
}

const AddProject = ({projects, setProjects, setProjectsDefault}) =>{
  const [popState, setPopState] = useState(false);
  const handleOpen = () =>{
    setPopState(true);
  }

  return (
    <HStack paddingTop="50px" paddingBottom="20px">
      <Box w="100%" h="64px"  p={4} color="black" textAlign="Center" display="flex" alignItems="center" fontSize="12px" textStyle="normal" >
        <Popover placement="top" isOpen={popState} onOpen={()=>(handleOpen())}>
          <PopoverTrigger>
            <StyledButton content={"Propose A Project"} />
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Enter Project Details</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <AddForm projects={projects} setProjects={setProjects} setPopState={setPopState} popState={popState} setProjectsDefault={setProjectsDefault}/>
              </PopoverBody>
              <PopoverFooter />
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
    </HStack>
  )
}

const BrowseList = ({projects}) => {
  return (
    <>
      {projects.map(project => (
        <Box minHeight="50px" w="70%" fontSize="12px" fontWeight="400"  paddingX="4px" marginX="30px" marginY="10px" color="black" key={project} borderLeft="solid #000000">
          <p style={{ display: 'flex', justifyContent: 'space-between', width:"100%" }}>
            <a href={"/projects/" + project.path}>{project.name}</a>
            {
              project.active && <Button bg="#FAD546" marginX="10px" padding="8px" fontSize="8px" border="1px solid #000" color="#000" textTransform="uppercase" h="18px">
                { project.active ? "ACTIVE" : "INACTIVE" }
              </Button>
            }
          </p>

          {
            project.resources.length !== 0 ?
              project.resources.map((resource, k) => (
                <Button key={k} bg="#FC5350" padding="5px 10px" h="18px" marginY="5px" color="#FFFFFF" borderRadius="8px" fontSize="10px">
                  {resource.file && (
                    <a href={resource.file}>File</a>
                  )}
                  {resource.link && (
                    <a href={resource.link}>Link</a>
                  )}
                </Button>
              )) : ""
          }

          {
            project.link &&
              <Button bg="#09AF74" padding="5px 10px" h="18px" marginY="5px" color="#FFFFFF" borderRadius="8px" fontSize="10px">
                <a href={project.link}>Link</a>
              </Button>
          }

          {
            project.video &&
              <Button bg="#006ED3" padding="5px 10px" h="18px" marginY="5px" color="#FFFFFF" borderRadius="8px" fontSize="10px">
                <a href={project.video}>Video</a>
              </Button>
          }

        </Box>
      ))}
    </>
  );
}


const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  return (
    <HStack paddingTop="71px" position="relative" paddingBottom="31px" marginLeft="0px">
      <SearchIcon fontSize="18px" position="absolute" left="16px" />
      <Input placeholder="Search helper text" marginRight="60px" paddingLeft="30px" w="90%" h="32px" size="md" borderRadius="none" borderColor="black"
         key="random1" value={keyword} onChange={(e) => setKeyword(e.target.value) }/>
    </HStack>
  );
}

const browseProjects = ({ projects, resources }) => {

  const augmentedProjects = projects.map((project) => {
    return {
      ...project,
      status: project.active ? "active" : "inactive"
    }
  })

  const [value, setValue] = useState({ augmentedProjects, resources, filteredProjects: augmentedProjects, filteredResources: resources })

  function handlekeydown (rawFilter) {
    const filter = rawFilter.toLowerCase()
    setValue({
      projects,
      resources,
      filteredProjects: augmentedProjects.filter((project) => {
        return project.name.toLowerCase().indexOf(filter) !== -1 ||
          project.description.toLowerCase().indexOf(filter) !== -1 ||
          project.collaborators.toLowerCase().indexOf(filter) !== -1
      }),
      filteredResources: resources.filter((resource) => {
        return resource.name.toLowerCase().indexOf(filter) !== -1 ||
          resource.description.toLowerCase().indexOf(filter) !== -1
      })
    })
  }

  return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <ChakraProvider theme={theme}>
          <Flex as="nav" flexWrap="wrap" alignItems="left" marginLeft="5%">
            <Box background="#FFFFFF" border="4px solid #000000" w={["100%", "90%", "70%"]} boxSizing="border-box" borderRadius="10px" marginTop="1em" marginLeft="30px">
              <Stack align="left" marginTop="2rem" >
                <Heading as="h1" textStyle="caps" fontSize="48px" paddingLeft="30px" paddingBottom="20px"  textAlign="left" >
                  Browse All Projects
                  <BackButton />
                  <SearchBar onChange={handlekeydown} />
                </Heading>
              </Stack>

              <BrowseList projects={value.filteredProjects} />

            </Box>
            <Footer />
          </Flex>
          
        </ChakraProvider>
      </>
    )
}

AddForm.propTypes = {
  projects: PropTypes.array,
  resources: PropTypes.array
}

AddProject.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  setProjectsDefault: PropTypes.func,
}

BrowseList.propTypes = {
  projects: PropTypes.array,
}

SearchBar.propTypes = {
  input: PropTypes.string,
  onChange: PropTypes.func,
}
export default browseProjects;
