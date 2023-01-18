import React from "react"
import { Box } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import ArrowRotateLeft from "~/components/Icons/ArrowRotateLeft"
import ArrowRotateRight from "~/components/Icons/ArrowRotateRight"
import { useActiveScene } from "@layerhub-pro/react"

const History = () => {
  const scene = useActiveScene()

  const makeUndo = React.useCallback(() => {
    if (scene) {
      scene.history.undo()
    }
  }, [scene])

  const makeRedo = React.useCallback(() => {
    if (scene) {
      scene.history.redo()
    }
  }, [scene])

  const makeStatus = React.useCallback(() => {
    if (scene) {
      console.log(scene.history.status)
    }
  }, [scene])

  return (
    <Box
      sx={{
        height: "40px",
        position: "absolute",
        zIndex: 1,
        bottom: "10px",
        background: "#ffffff",
        right: "10px",
        display: "flex",
        boxShadow: "md",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          cursor: "pointer",
        }}
      >
        <Box>
          <IconButton
            onClick={makeUndo}
            aria-label="undo"
            variant={"ghost"}
            icon={<ArrowRotateLeft size={20} />}
          />
          <IconButton
            onClick={makeRedo}
            aria-label="red"
            variant={"ghost"}
            icon={<ArrowRotateRight size={20} />}
          />
          <IconButton
            onClick={makeStatus}
            aria-label="red"
            variant={"ghost"}
            icon={<Box>SS</Box>}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default History
