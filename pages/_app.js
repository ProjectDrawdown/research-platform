import React from "react";
import Head from "next/head"
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/sora/700.css";
import { Container } from "@chakra-ui/react"

import Theme from "../components/Theme";

import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react";

function OpenCollaboratory({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <ChakraProvider theme={Theme}>
        <Container maxW={["container.sm", "container.xl"]}>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </>
  )
}

export default OpenCollaboratory;
