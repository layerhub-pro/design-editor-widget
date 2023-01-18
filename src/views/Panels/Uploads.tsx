import React from "react"
import { Box, Button } from "@chakra-ui/react"
import useData from "~/hooks/useData"
import { FontItem } from "~/common/interfaces"
import { useActiveScene, useEditor } from "@layerhub-pro/react"
import { loadFonts } from "~/utils/fonts"

const font: FontItem = {
  name: "Roboto-Regular",
  url: "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf",
}

const Text = () => {
  const { components } = useData()
  const editor = useEditor()
  const scene = useActiveScene()

  const makeAddTitle = React.useCallback(async () => {
    if (editor) {
      await loadFonts([font])
      scene.objects.add({
        type: "StaticText",
        text: "Your paragraph text",
        textAlign: "center",
        fontFamily: font.name,
        fontURL: font.url,
        fontSize: 52,
        width: 520,
      })
    }
  }, [scene])

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          fontWeight: "600",
          padding: "1rem 1rem 0rem",
        }}
      >
        Text
      </Box>
      <Box sx={{ padding: "1rem" }}>
        <Button
          borderRadius={"sm"}
          onClick={makeAddTitle}
          sx={{ width: "100%", height: "36px" }}
          colorScheme="brand"
          size={"sm"}
        >
          Add a textbox
        </Button>
      </Box>
    </Box>
  )
}

export default Text
