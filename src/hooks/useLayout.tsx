import React from "react"
import { LayoutContext } from "../contexts/Layout"

const useLayout = () => {
  const {
    closePanel,
    contractPanel,
    expandPanel,
    isPanelExtended,
    isPanelOpen,
    openPanel,
    setIsPanelOpen,
    panel,
    activeToolbox,
    setActiveToolbox,
    onCloseScenes,
    onOpenScenes,
    isOpenScenes,
  } = React.useContext(LayoutContext)
  return {
    closePanel,
    contractPanel,
    expandPanel,
    isPanelExtended,
    isPanelOpen,
    openPanel,
    setIsPanelOpen,
    panel,
    activeToolbox,
    setActiveToolbox,
    onCloseScenes,
    onOpenScenes,
    isOpenScenes,
  }
}

export default useLayout
