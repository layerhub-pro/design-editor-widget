import React from "react"
import { Box } from "@chakra-ui/react"
import useData from "~/hooks/useData"
import Scrollable from "~/components/Scrollable"
import { IStaticVector } from "@layerhub-pro/types"
import { useActiveScene } from "@layerhub-pro/react"

const Elements = () => {
  const { elements } = useData()
  const scene = useActiveScene()

  const addObject = (options: Partial<IStaticVector>) => {
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
        Elements
      </Box>
      <Scrollable>
        <Box
          padding={"1rem"}
          sx={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          }}
        >
          {elements.map((item, index) => {
            return (
              <Box
                onClick={() => addObject(item)}
                key={index}
                sx={{ backgroundColor: "#ecf0f1", cursor: "pointer" }}
              >
                <img style={{ maxHeight: "120px" }} src={item.src} />
              </Box>
            )
          })}
        </Box>
      </Scrollable>
    </Box>
  )
}

export default Elements
