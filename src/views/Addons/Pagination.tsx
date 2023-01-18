import { Box, Button, Divider, IconButton } from "@chakra-ui/react"
import AddNew from "~/components/Icons/AddNew"
import ArrowLeft from "~/components/Icons/ArrowLeft"
import ArrowRight from "~/components/Icons/ArrowRight"
import Delete from "~/components/Icons/Delete"
import Duplicate from "~/components/Icons/Duplicate"
import ViewAll from "~/components/Icons/ViewAll"
import useLayout from "~/hooks/useLayout"

const Pagination = () => {
  const { onOpenScenes } = useLayout()
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 1,
        bottom: "10px",
        background: "#ffffff",
        left: "10px",
        display: "flex",
        boxShadow: "md",
      }}
    >
      <Button
        leftIcon={<Duplicate size={20} />}
        onClick={onOpenScenes}
        size={"md"}
        variant={"outline"}
      >
        Scenes
      </Button>
    </Box>
  )
}

export default Pagination
