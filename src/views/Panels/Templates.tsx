import React from "react"
import { Box } from "@chakra-ui/react"
import useData from "~/hooks/useData"
import Scrollable from "~/components/Scrollable"

const Templates = () => {
  const { designs } = useData()
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
        Templates
      </Box>
      <Scrollable>
        <Box
          padding={"1rem"}
          sx={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          }}
        >
          {designs.map((design, index) => {
            return (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#ecf0f1",
                  cursor: "pointer",
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ maxHeight: "120px" }}
                  src={design.previews![0].src}
                />
              </Box>
            )
          })}
        </Box>
      </Scrollable>
    </Box>
  )
}

export default Templates
