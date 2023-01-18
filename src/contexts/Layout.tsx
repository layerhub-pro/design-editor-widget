import { useDisclosure } from "@chakra-ui/react"
import React from "react"

interface ILayoutContext {
  isPanelOpen: boolean
  setIsPanelOpen: (isOpen: boolean) => void
  isOpenScenes: boolean
  onOpenScenes: () => void
  onCloseScenes: () => void
  isPanelExtended: boolean
  contractPanel: () => void
  expandPanel: () => void
  closePanel: () => void
  openPanel: (panel: string) => void
  panel: string
  setPanel: (panel: string) => void
  activeToolbox: string
  setActiveToolbox: (toolbox: string) => void
}

export const LayoutContext = React.createContext<ILayoutContext>({
  isPanelOpen: false,
  isPanelExtended: false,
  isOpenScenes: false,
  onOpenScenes: () => {},
  onCloseScenes: () => {},
  setIsPanelOpen: () => {},
  contractPanel: () => {},
  expandPanel: () => {},
  closePanel: () => {},
  openPanel: () => {},
  panel: "",
  setPanel: () => {},
  activeToolbox: "",
  setActiveToolbox: () => {},
})

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPanelOpen, setIsPanelOpen] = React.useState<boolean>(false)
  const [isPanelExtended, setIsPanelExtended] = React.useState<boolean>(false)
  const [panel, setPanel] = React.useState<string>("TEMPLATES")
  const [activeToolbox, setActiveToolbox] = React.useState<string>("")
  const {
    isOpen: isOpenScenes,
    onOpen: onOpenScenes,
    onClose: onCloseScenes,
  } = useDisclosure()

  const openPanel = React.useCallback(
    (p: string) => {
      if (panel === p && isPanelOpen) {
        closePanel()
      } else {
        setPanel(p)
        setIsPanelOpen(true)
      }
    },
    [isPanelOpen, panel]
  )

  const closePanel = React.useCallback(() => {
    setIsPanelOpen(false)
    setIsPanelExtended(false)
  }, [])

  const expandPanel = React.useCallback(() => {
    setIsPanelExtended(true)
  }, [])

  const contractPanel = React.useCallback(() => {
    setIsPanelExtended(false)
  }, [])

  return (
    <LayoutContext.Provider
      value={{
        isPanelOpen,
        setIsPanelOpen,
        isPanelExtended,
        contractPanel,
        expandPanel,
        closePanel,
        openPanel,
        panel,
        setPanel,
        activeToolbox,
        setActiveToolbox,
        isOpenScenes,
        onCloseScenes,
        onOpenScenes,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
