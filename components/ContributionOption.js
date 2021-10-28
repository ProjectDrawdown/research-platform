import { Grid, GridItem, Image, Text, Button } from "@chakra-ui/react"

export default function Render ({
  title,
  buttonTitle,
  image,
  onClick
}) {
  return (
    <GridItem
      colStart={[1, 2]}
      colSpan={[3, 1]}
      mb={8}>
        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 1fr)">
            <GridItem rowSpan={2}>
              {image}
            </GridItem>
            <GridItem colSpan={2}>
              <Text>
                {title}
              </Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Button 
                border="2px solid #000000"
                background="#ffffff"
                onClick={onClick}>{buttonTitle}</Button>
            </GridItem>
        </Grid>
    </GridItem>
)
}
