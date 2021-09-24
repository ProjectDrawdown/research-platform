import React, { useState } from "react"
import Head from "next/head"
import PropTypes from 'prop-types'
import { ChakraProvider, Flex, FormControl,FormLabel, Heading, Button, Stack, VStack, HStack, Box, Text, Input, Popover, Portal,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"

  import { createBreakpoints } from "@chakra-ui/theme-tools"

  // This is the default breakpoint
  createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em"
  })
  

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
            <Button bg="#F1FF51" borderRadius="0px" marginX="auto" border="3px solid #000000" >Propose A Project</Button>
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
            {project.name}
            {project.status && <Button bg="#FAD546" marginX="10px" padding="8px" fontSize="8px" border="1px solid #000" color="#000" textTransform="uppercase" h="18px">{project.status}</Button>}
          </p>
          {project.tag && <Button bg={project.color} padding="5px 10px" h="18px" marginY="5px" color="#FFFFFF" borderRadius="8px" fontSize="10px">{project.tag}</Button>}
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

const Footer = () =>{
  return (
    <Box
      w="100% "
      position="relative"
    >
      <Box background = "url(https://bit.ly/sage-adebayo)"
        h={["200px", "250px", "300px"]}
        w={["50%", "50%", "60%"]}
        left="30px"
        bottom="100px"
        zIndex="100"
        border="4px solid #000000"
        p="3"
        boxShadow="base"
        display="block"
        direction="row"
        boxSizing="border-box"
        borderColor="black"
        borderWidth="3px"
        borderStyle="solid"
        position="absolute"></Box>
          <Box
          background="#000000"
          h="237px"
          w={["70%", "50%", "50%"]}
          left={["40%", "40%", "40%"]}
          bottom="50px"
          zIndex="100"
          marginTop={["200px", "150px", "200px"]}
          border="4px solid #000000"
          p="3"
          boxShadow="base"
          display="block"
          direction="row"
          boxSizing="border-box"
          borderColor="black"
          borderWidth="3px"
          borderStyle="solid"
          position="relative"
          >
        <Heading as="h1" textStyle="caps" fontSize={["20px", "28px", "36px"]} fontFamily="Sora" textAlign="left" paddingRight="15%" color="#FFF">
          Open Solutions Collaboratory
        </Heading>
        <Text textStyle="caps" fontSize={["12px", "14px", "18px"]} fontFamily="Sora" textAlign="left" paddingRight="15%" color="#FFF">
          Contact Us
        </Text>
        <Text textStyle="caps" fontSize="14px" fontFamily="Sora" textAlign="left" paddingRight="15%" color="#FFF">
          ©2021
        </Text>
      </Box>
  </Box>
  )
}


const browseProjects = () => {
  const [input, setInput] = useState('');
  const [ projects, setProjects ] = useState([
    {"name":"UN data on solar water heater", "status": "active", "color":"#006ED3", "tag":"model"},
    {"name":"GIS data to land use modal implenmentation", "status": "active", "color":"#006ED3", "tag":"data"},
    {"name":"Greenpeace reference senarios to the 2020 reference cases", "color":"#09AF74", "tag":"pdf"},
    {"name":"Diffrent First Cost Model for Solal Energy in China", "color":"#09AF74", "tag":""}
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
          <Flex as="nav" flexWrap="wrap" alignItems="left" marginLeft="5%">
            <Box background="#FFFFFF" border="4px solid #000000" w={["100%", "90%", "70%"]} boxSizing="border-box" borderRadius="10px" marginTop="1em" marginLeft="30px">
              <Stack align="left" marginTop="2rem" >
                <Heading as="h1" textStyle="caps" fontSize="48px" paddingLeft="30px" paddingBottom="20px"  textAlign="left" >
                  Browse All Projects
                  <Text fontSize="14px">{'<<'} Back to Home </Text>
                  <SearchBar input={input} onChange={updateInput}/>
                </Heading>
              </Stack>
                <BrowseList projects={projects} />
                <AddProject projects={projects} setProjects={setProjects} setProjectsDefault={setProjectsDefault}/>
            </Box>
            <Footer />
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
