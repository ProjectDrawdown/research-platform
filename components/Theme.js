import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

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
  components: {
    Button: {
      baseStyle: {
        bg: "lightYellow",
        borderColor: "black",
        borderWidth: "3px",
        borderRadius: "1px",
        borderStyle: "solid",
        textTransform: "uppercase",
        paddingStart: 8,
        paddingEnd: 8
      }
    },
    Container: {
      baseStyle: {
        sizes: {
          xl: {
            w: "1280px"
          }
        },
      }
    }
  },
  colors: {
    lightYellow: "#f1ff51"
  }
});

export default theme;

