import React from "react"
import BackButton from "../components/BackButton"
import { Box, Button, Center, Heading, Input, Text, Textarea} from "@chakra-ui/react"

const form = () => {
  return (
    <>
    <Center>
      <Box border="4px solid #000000" w={["100%", "90%", "70%"]} boxSizing="border-box" borderRadius="10px" margin="1em" marginLeft="1em" padding="2em" maxWidth="800px">

        <Heading as="h1" textStyle="caps" fontSize="48px" paddingLeft="30px" paddingBottom="20px"  textAlign="left" >
          Connect
          <BackButton />
        </Heading>

        <Center>
          <Text>
            Thank you for your interest in the Open Solutions Collaboratory! Please fill out your name and email and any message youwould like to give to us.
          </Text>
        </Center>

        <Box paddingTop="50px">
          <form name="contact" method="POST" data-netlify="true">
            <Box marginTop="0.5em">
              <label>Your Name: <Input borderColor="black" size="md" type="text" name="name" /></label>
            </Box>
            <Box marginTop="0.5em">
              <label>Your Email: <Input borderColor="black" size="md" type="email" name="email" /></label>
            </Box>
            <Box marginTop="0.5em">
              <label>Message: <Textarea borderColor="black" size="md" name="message"></Textarea></label>
            </Box>

            <Button marginTop="1em" type="submit">Send</Button>
          </form>
        </Box>
      </Box>
    </Center>
    </>
  )
}

export default form;

