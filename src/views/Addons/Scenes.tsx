import React, { useRef } from "react"
import { Button, Box, Portal, useDisclosure } from "@chakra-ui/react"
import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react"
import { useActiveScene, useEditor, useScenes } from "@layerhub-pro/react"
import useOnClickOutside from "~/hooks/useClickOutside"
import useLayout from "~/hooks/useLayout"
import Scrollable from "~/components/Scrollable"
import Duplicate from "~/components/Icons/Duplicate"
import Close from "~/components/Icons/Close"
import Plus from "~/components/Icons/Plus"
import Ellipsis from "~/components/Icons/Ellipsis"

const sceneItemStyleBase: React.CSSProperties = {
  height: "140px",
  width: "208px",
  background: "#ecf0f1",
  border: "1px solid #bdc3c7",
  cursor: "pointer",
  flex: "none",
}

export default function () {
  const { isOpenScenes, onCloseScenes } = useLayout()
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  const editor = useEditor()
  const scenes = useScenes()
  const activeScene = useActiveScene()

  useOnClickOutside(ref, () => !isMenuOpen && onCloseScenes())

  const setActiveScene = React.useCallback(
    (id: string) => {
      if (editor) {
        editor.design.setActiveScene(id)
      }
    },
    [editor]
  )

  const addScene = React.useCallback(() => {
    if (editor) {
      editor.design.addScene()
    }
  }, [editor])

  return (
    <Box
      ref={ref}
      boxShadow={"md"}
      sx={{
        height: "230px",
        padding: "10px",
        position: "absolute",
        bottom: isOpenScenes ? "0" : "-230px",
        background: "#ffffff",
        width: "100%",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Button
          leftIcon={<Duplicate size={20} />}
          onClick={onCloseScenes}
          size={"md"}
          variant={"outline"}
          rightIcon={<Close size={16} />}
        >
          Scenes
        </Button>
      </Box>
      <Scrollable>
        <Box sx={{ display: "flex", gap: "1rem", paddingTop: "10px" }}>
          {scenes.map((scene, index) => {
            return (
              <SceneItem
                isActive={activeScene && activeScene.id === scene.id}
                id={scene.id}
                key={index}
                onClick={setActiveScene}
                preview={scene.preview}
                setIsMenuOpen={setIsMenuOpen}
              />
            )
          })}
          <Box
            onClick={addScene}
            sx={{
              ...sceneItemStyleBase,
              display: "grid",
              placeContent: "center",
            }}
          >
            <Plus size={26} />
          </Box>
        </Box>
      </Scrollable>
    </Box>
  )
}

interface SceneItemProps {
  onClick: (id: string) => void
  id: string
  isActive: boolean
  preview: string
  setIsMenuOpen: (v: boolean) => void
}
const SceneItem = ({
  onClick,
  id,
  preview,
  setIsMenuOpen,
  isActive,
}: SceneItemProps) => {
  const [isMenuHover, setIsMenuHover] = React.useState(false)
  const [isItemHover, setIsItemHover] = React.useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const openMenu = React.useCallback(() => {
    onOpen()
    setIsMenuOpen(true)
  }, [])

  const closeMenu = React.useCallback(() => {
    onClose()
    setIsMenuOpen(false)
  }, [])
  return (
    <Box
      onMouseEnter={() => setIsItemHover(true)}
      onMouseLeave={() => setIsItemHover(false)}
      onClick={() => !isMenuHover && !isOpen && onClick(id)}
      sx={{
        ...sceneItemStyleBase,
        position: "relative",
        border: "2px solid",
        borderColor: isActive ? "#307aee" : "#bdc3c7",
      }}
    >
      <Popover
        isOpen={isOpen}
        onOpen={openMenu}
        onClose={closeMenu}
        placement="top-end"
      >
        <PopoverTrigger>
          <Box
            onMouseEnter={() => setIsMenuHover(true)}
            onMouseLeave={() => setIsMenuHover(false)}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              height: "28px",
              width: "28px",
              borderRadius: "4px",
              backgroundColor: isMenuHover ? "#2d3436" : "#ffffff",
              color: isMenuHover ? "#ffffff" : "#333333",
              pointerEvents: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: isItemHover ? 1 : 0,
            }}
          >
            <Ellipsis size={20} />
          </Box>
        </PopoverTrigger>
        <Portal>
          <PopoverContent sx={{ width: "160px", padding: "0.5rem 0" }}>
            <SceneMenuItem
              onClick={() => console.log("hello")}
              text={"Add New Scene"}
            />
            <SceneMenuItem
              onClick={() => console.log("hello")}
              text={"Duplicate Scene"}
            />
            <SceneMenuItem
              onClick={() => console.log("hello")}
              text={"Delete Scene"}
            />
          </PopoverContent>
        </Portal>
      </Popover>

      <img style={{ height: "100%", margin: "auto" }} src={preview} />
    </Box>
  )
}

interface SceneMenuItemProps {
  onClick: () => void
  text: string
}
const SceneMenuItem = ({ text, onClick }: SceneMenuItemProps) => {
  return (
    <Box
      sx={{
        height: "32px",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        cursor: "pointer",
        padding: "0 1rem",
        ":hover": {
          background: "rgba(0,0,0,0.05)",
        },
      }}
      onClick={onClick}
    >
      {text}
    </Box>
  )
}
