import React from "react"
import { Box } from "@chakra-ui/react"
import useData from "~/hooks/useData"
import Scrollable from "~/components/Scrollable"
import { useActiveScene } from "@layerhub-pro/react"
import { IStaticImage } from "@layerhub-pro/types"

const Images = () => {
  const { images } = useData()
  const scene = useActiveScene()

  const addObject = (options: Partial<IStaticImage>) => {
    scene.objects.add(options)
  }

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
        Images
      </Box>
      <Scrollable>
        <Box
          sx={{
            display: "grid",
            gap: "1rem",
            padding: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          }}
        >
          {images.map((image, index) => {
            return (
              <Box
                onClick={() => addObject(image)}
                key={index}
                sx={{ backgroundColor: "#ecf0f1", cursor: "pointer" }}
              >
                <img style={{ maxHeight: "120px" }} src={image.preview} />
              </Box>
            )
          })}
        </Box>
      </Scrollable>
    </Box>
  )
}

export default Images
