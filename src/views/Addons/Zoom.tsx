import React from "react"
import { Box } from "@chakra-ui/react"
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react"
import ZoomOut from "~/components/Icons/ZoomOut"
import ZoomIn from "~/components/Icons/ZoomIn"
import { useEditor, useZoomRatio } from "@layerhub-pro/react"

const Zoom = () => {
  const [state, setState] = React.useState({ zoom: 100 })
  const editor = useEditor()
  const zoomRatio = useZoomRatio()

  const zoomIn = React.useCallback(() => {
    if (editor) {
      editor.zoom.zoomIn()
    }
  }, [editor])

  const zoomOut = React.useCallback(() => {
    if (editor) {
      editor.zoom.zoomOut()
    }
  }, [editor])

  const onChangeZoom = React.useCallback(
    (v: number) => {
      if (editor) {
        setState({ zoom: v })
        editor.zoom.zoomToRatio(v / 100)
      }
    },
    [editor]
  )
  React.useEffect(() => {
    setState({ zoom: zoomRatio * 100 })
  }, [zoomRatio])

  return (
    <Box
      sx={{
        height: "40px",
        width: "240px",
        position: "absolute",
        zIndex: 1,
        bottom: "10px",
        background: "#ffffff",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        boxShadow: "md",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          onClick={zoomOut}
          sx={{ padding: "0.5rem 1rem", cursor: "pointer" }}
        >
          <ZoomOut size={24} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Slider
            onChange={(v) => onChangeZoom(v)}
            colorScheme={"blackAlpha"}
            aria-label="slider-zoom-controls"
            value={state.zoom}
            min={10}
            max={300}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Box
          onClick={zoomIn}
          sx={{ padding: "0.5rem 1rem", cursor: "pointer" }}
        >
          <ZoomIn size={24} />
        </Box>
      </Box>
    </Box>
  )
}

export default Zoom
