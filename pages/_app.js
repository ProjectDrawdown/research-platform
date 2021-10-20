import React from "react";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/sora/700.css";

import Theme from "../components/Theme";

import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react";

function OpenCollaboratory({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default OpenCollaboratory;
