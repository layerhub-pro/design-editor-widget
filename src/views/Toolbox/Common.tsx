import { Box, Button, IconButton } from "@chakra-ui/react"
import BringForward from "~/components/Icons/BringForward"
import BringFront from "~/components/Icons/BringFront"

import ObjectsAlignBottom from "~/components/Icons/ObjectsAlignBottom"
import ObjectsAlignCenter from "~/components/Icons/ObjectsAlignCenter"
import ObjectsAlignLeft from "~/components/Icons/ObjectsAlignLeft"
import ObjectsAlignMiddle from "~/components/Icons/ObjectsAlignMiddle"
import ObjectsAlignRight from "~/components/Icons/ObjectsAlignRight"
import ObjectsAlignTop from "~/components/Icons/ObjectsAlignTop"
import SendBack from "~/components/Icons/SendBack"
import SendBackward from "~/components/Icons/SendBackward"

export const ObjectsAlign = () => {
  return (
    <Box sx={{ padding: "1rem", width: "100%" }}>
      <Box fontSize={"14px"} paddingBottom={"0.5rem"}>
        POSITION
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          <Box
            fontSize={"12px"}
            color="#333333"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Button minWidth={0} padding={0} width="100%">
              <ObjectsAlignLeft size={24} />
            </Button>
            <Box>Left</Box>
          </Box>

          <Box
            fontSize={"12px"}
            color="#333333"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              padding: "0 1px",
            }}
          >
            <Button minWidth={0} padding={0} width="100%">
              <ObjectsAlignCenter size={24} />
            </Button>
            <Box>Center</Box>
          </Box>
          <Box
            fontSize={"12px"}
            color="#333333"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              padding: "0 1px",
            }}
          >
            <Button minWidth={0} padding={0} width="100%">
              <ObjectsAlignRight size={24} />
            </Button>
            <Box>Right</Box>
          </Box>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <Box
            fontSize={"12px"}
            color="#333333"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              padding: "0 1px",
            }}
          >
            <Button minWidth={0} padding={0} width="100%">
              <ObjectsAlignTop size={24} />
            </Button>
            <Box>Top</Box>
          </Box>

          <Box
            fontSize={"12px"}
            color="#333333"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              padding: "0 1px",
            }}
          >
            <Button minWidth={0} padding={0} width="100%">
              <ObjectsAlignMiddle size={24} />
            </Button>
            <Box>Middle</Box>
          </Box>
          <Box
            fontSize={"12px"}
            color="#333333"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              padding: "0 1px",
            }}
          >
            <Button minWidth={0} padding={0} width="100%">
              <ObjectsAlignBottom size={24} />
            </Button>
            <Box>Bottom</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export const Order = () => {
  return (
    <Box sx={{ padding: "0rem 1rem", width: "100%" }}>
      <Box fontSize={"14px"} paddingBottom={"0.5rem"}>
        ORDER
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        <Box
          fontSize={"12px"}
          color="#333333"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Button minWidth={0} padding={0} width="100%">
            <BringForward size={24} />
          </Button>
          <Box>Forward</Box>
        </Box>

        <Box
          fontSize={"12px"}
          color="#333333"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            padding: "0 1px",
          }}
        >
          <Button minWidth={0} padding={0} width="100%">
            <SendBackward size={24} />
          </Button>
          <Box>Backward</Box>
        </Box>
        <Box
          fontSize={"12px"}
          color="#333333"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            padding: "0 1px",
          }}
        >
          <Button minWidth={0} padding={0} width="100%">
            <BringFront size={24} />
          </Button>
          <Box>To font</Box>
        </Box>
        <Box
          fontSize={"12px"}
          color="#333333"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            padding: "0 1px",
          }}
        >
          <Button minWidth={0} padding={0} width="100%">
            <SendBack size={24} />
          </Button>
          <Box>To back</Box>
        </Box>
      </Box>
    </Box>
  )
}
