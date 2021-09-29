import React from "react";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
});

function OpenCollaboratory({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default OpenCollaboratory;
