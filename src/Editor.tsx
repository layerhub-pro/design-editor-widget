import React from "react"
import { Box } from "@chakra-ui/react"

import Panels from "./views/Panels"
import Pagination from "./views/Addons/Pagination"
import Zoom from "./views/Addons/Zoom"
import Layers from "./views/Addons/Layers"
import Toolbox from "./views/Toolbox/Toolbox"
import Canvas from "./views/Canvas"

import Scenes from "./views/Addons/Scenes"
import History from "./views/Addons/History"

const Editor = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* <Navbar /> */}
      <Box sx={{ flex: 1, display: "flex", position: "relative" }}>
        <Zoom />
        <Pagination />
        <Panels />
        {/* <Layers /> */}
        <Toolbox />
        <Canvas />
        <History />
      </Box>
      <Scenes />
    </Box>
  )
}

export default Editor
