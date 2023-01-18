import React from "react"
import { Box } from "@chakra-ui/react"
import { useActiveObject, useEditor } from "@layerhub-pro/react"
import getSelectionType from "~/utils/get-selection-type"
import { ILayer } from "@layerhub-pro/types"
import useLayout from "~/hooks/useLayout"
import ImageBox from "./Image"
import VectorBox from "./Vector"
import TextBox from "./Text"
import PathBox from "./Path"
import Close from "~/components/Icons/Close"

const ITEMS = {
  StaticImage: ImageBox,
  StaticVector: VectorBox,
  StaticText: TextBox,
  StaticPath: PathBox,
}
const DEFAULT_TOOLBOX = "Canvas"

const Toolbox = () => {
  const [state, setState] = React.useState("Text")
  const activeObject = useActiveObject() as ILayer
  const editor = useEditor()
  const { activeToolbox, setActiveToolbox } = useLayout()

  React.useEffect(() => {
    const selectionType = getSelectionType(activeObject)
    if (selectionType) {
      if (selectionType.length > 1) {
        setState("Multiple")
        setActiveToolbox("Multiple")
      } else {
        setState(selectionType[0])
        setActiveToolbox(selectionType[0])
      }
    } else {
      setState(DEFAULT_TOOLBOX)
      setActiveToolbox("")
    }
  }, [activeObject])

  React.useEffect(() => {
    let watcher = async () => {
      if (activeObject) {
        // @ts-ignore
        const selectionType = getSelectionType(activeObject) as any

        if (selectionType.length > 1) {
          setState("Multiple")
          setActiveToolbox("Multiple")
        } else {
          setState(selectionType[0])
          setActiveToolbox(selectionType[0])
        }
      }
    }
    if (editor) {
      editor.on("history:changed", watcher)
    }
    return () => {
      if (editor) {
        editor.off("history:changed", watcher)
      }
    }
  }, [editor, activeObject])

  // @ts-ignore
  const Component = ITEMS[activeToolbox] ? ITEMS[activeToolbox] : ITEMS[state]

  return (
    <Box
      boxShadow={"md"}
      sx={{
        position: "absolute",
        zIndex: 1,
        height: "calc(100% - 130px)",
        background: "#ffffff",
        width: "320px",
        right: activeToolbox ? "0px" : "-320px",
        transition: "all 0.25s ease",
        display: "flex",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <Box sx={{ position: "relative", display: "flex", flex: 1 }}>
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            right: "1rem",
            cursor: "pointer",
          }}
        >
          <Close size={15} />
        </Box>
        {Component && <Component />}
      </Box>
    </Box>
  )
}

export default Toolbox
