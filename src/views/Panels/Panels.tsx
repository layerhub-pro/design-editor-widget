import { PanelItemContainer, PanelListContainer } from "./Container";
import { Box } from "@chakra-ui/react";
import useLayout from "~/hooks/useLayout";

// Panel Items
import Elements from "./Elements";
import Images from "./Images";
import Templates from "./Templates";
import Text from "./Text";
import Uploads from "./Uploads";

// Panel Icons
import TemplatesIcon from "~/components/Icons/Templates";
import TextIcon from "~/components/Icons/Text";
import ImagesIcon from "~/components/Icons/Images";
import ElementsIcon from "~/components/Icons/Elements";
import UploadsIcon from "~/components/Icons/Uploads";

const Items = {
  IMAGES: Images,
  TEMPLATES: Templates,
  TEXT: Text,
  ELEMENTS: Elements,
  UPLOADS: Uploads,
};

const Panels = () => {
  return (
    <>
      <PanelItem />
      <PanelList />
    </>
  );
};

const PanelList = () => {
  // console.log("RENDERING PANEL LIST");
  const { openPanel } = useLayout();

  return (
    <PanelListContainer>
      <Box
        onClick={() => openPanel("TEMPLATES")}
        sx={{
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TemplatesIcon size={24} />
      </Box>
      <Box
        onClick={() => openPanel("TEXT")}
        sx={{
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextIcon size={24} />
      </Box>
      <Box
        onClick={() => openPanel("IMAGES")}
        sx={{
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImagesIcon size={24} />
      </Box>
      <Box
        onClick={() => openPanel("ELEMENTS")}
        sx={{
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ElementsIcon size={24} />
      </Box>
      <Box
        onClick={() => openPanel("UPLOADS")}
        sx={{
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UploadsIcon size={24} />
      </Box>
    </PanelListContainer>
  );
};

const PanelItem = () => {
  const { panel } = useLayout();
  const ITEM = Items[panel as "TEXT"];
  return (
    <PanelItemContainer>
      <ITEM />
    </PanelItemContainer>
  );
};

export default Panels;
