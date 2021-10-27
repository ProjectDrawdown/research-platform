import React from "react"
import BackButton from "../components/BackButton"
import StyledButton from "../components/StyledButton";
import BorderBox from "../components/BorderBox";
import Title from "../components/Title";
import { Box, Center, Heading, Input, Text, Textarea} from "@chakra-ui/react"

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
            Please leave your information, and we will invite you to a community slack channel where you can work with other researchers.
          </Text>
        </Center>

        <Box paddingTop="3rem">
          <form name="contact" method="POST" data-netlify="true">
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
              <StyledButton type="submit" content={"Send"} />
            </Box>
          </form>
        </Box>
      </BorderBox>
    </Center>
    </>
  )
}

export default form;

