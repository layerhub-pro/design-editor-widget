import { Box } from "@chakra-ui/react";
import Layer from "~/components/Icons/Layer";

const Layers = () => {
  return (
    <Box
      sx={{
        height: "40px",
        width: "100px",
        position: "absolute",
        zIndex: 1,
        bottom: "10px",
        background: "#ffffff",
        right: "10px",
        display: "flex",
        boxShadow: "md",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          cursor: "pointer",
        }}
      >
        <Box>
          <Layer size={24} />
        </Box>
        <Box>Layers</Box>
      </Box>
    </Box>
  );
};

export default Layers;
