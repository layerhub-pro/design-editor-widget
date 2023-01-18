import React from "react"
import { Canvas, fabric } from "@layerhub-pro/react"

export default function () {
  React.useEffect(() => {
    fabric.Object.prototype.transparentCorners = false
    fabric.Object.prototype.cornerColor = "#307aee"
    fabric.Object.prototype.cornerSize = 12
    fabric.Object.prototype.borderColor = "#307aee"
    fabric.Object.prototype.borderScaleFactor = 2.25
    fabric.Object.prototype.borderOpacityWhenMoving = 1
    // @ts-ignore
    fabric.Object.prototype.borderOpacity = 1
  }, [])
  return (
    <Canvas
      config={{
        // background: "#f1f2f6",
        // @ts-ignore
        margin: 130,
        // shadow: {
        //   blur: 1,
        //   color: "#747d8c",
        //   offsetX: 0,
        //   offsetY: 0,
        // },
      }}
    />
  )
}
