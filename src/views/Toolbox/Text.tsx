import { Box } from "@chakra-ui/react"
import { ObjectsAlign, Order } from "./Common"

export default function () {
  return (
    <Box width={"100%"}>
      <Box padding={"1rem 1rem 0"}>Edit text</Box>
      <ObjectsAlign />
      <Order />
    </Box>
  )
}
