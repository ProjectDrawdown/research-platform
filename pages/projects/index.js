import React, { useState } from "react"
import PropTypes from 'prop-types'
import { Text, Center, Flex, FormControl,FormLabel, Button, Stack, VStack, HStack, Box, Input, Popover, Portal,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import Footer from "../../components/Footer";
import StyledButton from "../../components/StyledButton";
import BackButton from "../../components/BackButton"
import Title from "../../components/Title"
import getStaticFilesFrontMatter from '../../getStatic'

const RESULTS_PER_PAGE = 10

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
      {projects.map((project, idx) => (
        <Box minHeight="50px" w="70%" fontSize={["12px", "20px"]} fontWeight="400"  paddingX="4px" marginX="30px" marginY={["24px", "35px"]} color="black" key={idx} borderLeft="solid #000000">
          <p style={{ display: 'flex', justifyContent: 'space-between', width:"100%" }}>
            <a href={"/projects/" + project.path}>{project.name}</a>
            {
              project.active && <Button bg="#FAD546" marginX="10px" borderRadius="8px" padding="0.7rem" fontSize="10px" color="#000" textTransform="uppercase" h="18px" border="none">
                { project.active ? "ACTIVE" : "" }
              </Button>
            }
          </p>

          {
            project.resources.length !== 0 ?
              project.resources.map((resource, k) => (
                <>
                  {resource.file && (
                    <Button key={"resource_file_" + k} bg="#FC5350" padding="5px 10px" h="18px" marginY="5px" marginX="2.5px" color="#FFFFFF" borderRadius="8px" fontSize="10px" borderWidth="0px">
                      <a href={resource.file}>File</a>
                    </Button>
                  )}

                  {resource.link && (
                    <Button key={"resource_link_" + k} bg="#09AF74" padding="5px 10px" h="18px" marginY="5px" marginX="2.5px" color="#FFFFFF" borderRadius="8px" fontSize="10px" borderWidth="0px">
                      <a href={resource.link}>Link</a>
                    </Button>
                  )}
                </>
              )) : ""
          }

          { project.tags &&
              project.tags.map((tag) => {
                <Button bg="#006ED3" padding="5px 10px" h="18px" marginY="5px" marginX="2.5px" color="#FFFFFF" borderRadius="8px" fontSize="10px" borderWidth="0px">
                  <a>{tag}</a>
                </Button>
              })
          }

          {
            project.video &&
              <Button bg="#006ED3" padding="5px 10px" h="18px" marginY="5px" marginX="2.5px" color="#FFFFFF" borderRadius="8px" fontSize="10px" borderWidth="0px">
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
    <HStack paddingTop="1rem" position="relative" paddingBottom="0px" marginLeft="0px">
      <SearchIcon fontSize="1.3rem" position="absolute" left="1rem" />
      <Input fontSize="1.5rem" marginRight="60px" paddingY="1rem" paddingLeft="3rem" w="90%" h="48px" size="md" borderRadius="none" borderColor="black"
         key="random1" value={keyword} onChange={(e) => setKeyword(e.target.value) }/>
    </HStack>
  );
}

const browseProjects = ({ projects }) => {

  const augmentedProjects = projects.map((project) => {
    return {
      ...project,
      status: project.active ? "active" : "inactive"
    }
  })

  const {paginatedProjects, numPages} = paginate(augmentedProjects, 0)

  const [value, setValue] = useState({ augmentedProjects, results: augmentedProjects, paginatedResults: paginatedProjects, page: 0, numPages: numPages, filter: "" })

  function handlePrev () {
    const newPage = value.page <= 0 ? 0 : value.page - 1
    const filteredProjects = filter(augmentedProjects, value.filter)
    const {paginatedProjects, numPages} = paginate(filteredProjects, newPage)
    setValue({
      page: newPage,
      numPages: numPages,
      filter: value.filter,
      projects: value.projects,
      results: filteredProjects,
      paginatedResults: paginatedProjects,
    })
  }

  function handleNext () {
    const maxPage = 100
    const newPage = value.page >= maxPage ? maxPage : value.page + 1
    const filteredProjects = filter(augmentedProjects, value.filter)
    const {paginatedProjects, numPages} = paginate(filteredProjects, newPage)
    setValue({
      page: newPage,
      numPages: numPages,
      filter: value.filter,
      projects: value.projects,
      results: filteredProjects,
      paginatedResults: paginatedProjects,
    })
  }

  function filter(projects, filterQuery) {
    const filter = filterQuery.toLowerCase()
    const filteredProjects = augmentedProjects.filter((project) => {
        const found = project.collaborators && project.collaborators.find((collaborator) => {
          return collaborator.toLowerCase().indexOf(filter) !== -1
        })

        return project.name.toLowerCase().indexOf(filter) !== -1 ||
          project.description.toLowerCase().indexOf(filter) !== -1 ||
          found
      })
    return filteredProjects
  }

  function paginate(projects, page) {
    const numPages = Math.floor(projects.length / RESULTS_PER_PAGE)
    const startSliceIdx = page * RESULTS_PER_PAGE
    const endSliceIdx = startSliceIdx + RESULTS_PER_PAGE
    const paginatedProjects = projects.slice(startSliceIdx, endSliceIdx)
    return {paginatedProjects, numPages}
  }

  function handlekeydown (rawFilter) {
    const filteredProjects = filter(augmentedProjects, rawFilter)
    const {paginatedProjects, numPages} = paginate(filteredProjects, value.page)
    setValue({
      page: 0,
      numPages: numPages,
      filter: rawFilter,
      projects,
      results: filteredProjects,
      paginatedResults: paginatedProjects,
    })
  }


  return (
    <Flex as="nav" flexWrap="wrap" alignItems="left" marginLeft={["1rem", "5%"]} marginRight={["1rem", "5%"]}>
      <Box background="#FFFFFF" border="4px solid #000000" w={["100%", "90%", "70%"]} boxSizing="border-box" borderRadius="10px" marginTop={["0px", "1em"]} marginLeft={["0px","30px"]}>
        <Stack align="left" marginTop="2rem" marginX={["1rem", "2rem"]}>

          <Title fontSize={["3xl", "5xl"]} paddingRight={["10px", "30px", "15%"]} fontWeight="800px">
            Browse All Projects
          </Title>

          <BackButton />

          <SearchBar onChange={handlekeydown}/>

        </Stack>

        <BrowseList projects={value.paginatedResults || []} />

        <Center m={8} mb={16}>
          <StyledButton href="/connect" content={"Propose a Project"} />
        </Center>

        {
          value.results.length > RESULTS_PER_PAGE ?
            <>
            <Flex mx="2rem">
              {
                value.page > 0 ?
                <Button onClick={handlePrev}>prev</Button> : ""
              }
              <Center flex="1"><Text mx="2rem" my="1rem" align="right">Pages: {value.page + 1} of {value.numPages}</Text></Center>
              {
                value.page + 1 < value.numPages ?
                <Button onClick={handleNext}>next</Button> : ""
              }
            </Flex>
            </>
          : ""
        }

      </Box>
      <Footer />
    </Flex>
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

