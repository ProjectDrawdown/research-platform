import React from "react"
import BackButton from "../components/BackButton"
import BorderBox from "../components/BorderBox";
import Title from "../components/Title";
import { Button, Box, Center, Input, Text, Textarea} from "@chakra-ui/react"

const form = () => {
  return (
    <>
    <Center>
      <BorderBox
        w={["100%", "90%", "70%"]}
        padding="2rem"
        fontFamily="Sora">

        <Title mb="2rem">
          Connect
        </Title>

        <BackButton mb="1rem" />

        <Center>
          <Text>
            Please share your information. We will invite you to a community slack channel where you can work with other researchers. 
          </Text>
        </Center>

        <Box paddingTop="3rem">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <Box marginTop="2rem">
              <label>Your Name:
                <Input borderColor="black"
                       size="md"
                       type="text"
                       name="name" />
              </label>
            </Box>
            <Box marginTop="2rem">
              <label>Your Email:
                <Input borderColor="black"
                       size="md"
                       type="email"
                       name="email" />
              </label>
            </Box>
            <Box marginTop="2rem">
              <label>Message:
                <Textarea borderColor="black"
                          size="md"
                          name="message">
                </Textarea>
              </label>
            </Box>

            <Box marginTop="1rem">
              <Button bg="#F1FF51" borderRadius="0px" marginX="auto" border="2px solid #000000" padding={{base: "15px", "2xl":"50px"}} type="submit">
                <Text fontSize={{base:"15px", sm:"15px", md:"15pxpx", lg:"15px", xl:"15px", "2xl":"50px"}}>
                  SEND
                </Text>
              </Button>
            </Box>
          </form>
        </Box>
      </BorderBox>
    </Center>
    </>
  )
}

export default form;

