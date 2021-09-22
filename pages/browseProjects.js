import React, { useState } from "react"
import Head from "next/head"
import PropTypes from 'prop-types'
import { ChakraProvider, Flex, FormControl,FormLabel, Heading, Button, Stack, VStack, HStack, Box, Link, Input, Popover, Portal,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,} from "@chakra-ui/react"

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
    <HStack paddingTop="50px" marginLeft="67px" paddingBottom="20px">
      <Box bg="#E2E2E2" w="493px" h="64px"  p={4} color="black" textAlign="Center" display="flex" alignItems="center" paddingLeft="100px" fontSize="12px" textStyle="normal" >
        Have a Reasource to Add? 
        <Popover placement="top" isOpen={popState} onOpen={()=>(handleOpen())}>
          <PopoverTrigger>
            <Link>Click Here</Link>
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
        <Box h="31px" bg="#dddedf" w="501px" fontSize="12px" fontWeight="400"  p={4} color="black" marginLeft="63px" display="flex" alignItems="center" key={project}>
          {project.name}
          {project.tag !== ""? <Button  position="absolute" w="45px" h="18px" marginLeft="430px" marginTop="-1px"  bg="#606060" color="#FFFFFF"  borderRadius="8px" fontSize="10px">{project.tag}</Button>:""}
        </Box>
      ))}
    </>
  );
}


const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  return (
    <HStack paddingTop="71px" paddingBottom="31px" marginLeft="50px">
      <Input placeholder="search" w="582px" h="32px" size="md" borderRadius="none" borderColor="black"
         key="random1" value={keyword} onChange={(e) => setKeyword(e.target.value) }/>
    </HStack>
  );
}

const browseProjects = () => {
  const [input, setInput] = useState('');
  const [ projects, setProjects ] = useState([
    {"name":"UN data on solar water heater", "tag":"model"},
    {"name":"GIS data to land use modal implenmentation", "tag":"data"},
    {"name":"Greenpeace reference senarios to the 2020 reference cases", "tag":"pdf"},
    {"name":"Diffrent First Cost Model for Solal Energy in China", "tag":""}
  ])
  const [projectsDefault, setProjectsDefault] = useState([...projects]);
  const updateInput = async (input) => {
    const filtered = projectsDefault.filter(project => {
      return project.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setProjects(filtered);
 }

  return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <ChakraProvider>
          <Flex as="nav" flexWrap="wrap" alignItems="center" marginLeft="63px" marginRight="169">
            <Stack align="center" marginTop="2rem" >
              <Heading as="h1" textStyle="caps" fontSize="39px" paddingLeft="30px" paddingBottom="20px"  textAlign="center" >
                Browse all projects
                <SearchBar input={input} onChange={updateInput}/>
              </Heading>
              <BrowseList projects={projects} />
              <AddProject projects={projects} setProjects={setProjects} setProjectsDefault={setProjectsDefault}/>
            </Stack>

          </Flex>

        </ChakraProvider>
      </>
    )
}

AddForm.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  setPopState: PropTypes.func,
  setProjectsDefault: PropTypes.func,
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
