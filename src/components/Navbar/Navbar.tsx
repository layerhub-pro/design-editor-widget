import React from "react";
import { Box } from "@chakra-ui/react";
import { EVENTS } from "~/widgetManager/constants";
import { images } from "~/common/data";

const Navnar = () => {
  const makePublishData = () => {
    const editorElement = document.getElementById(
      "layerhub_editor_widget"
    ) as HTMLElement;
    const event = new CustomEvent(EVENTS.REQUEST_EDITOR_EXPORT_TO_JSON);
    editorElement.dispatchEvent(event);
  };

  const makeSetData = () => {
    const editorElement = document.getElementById(
      "layerhub_editor_widget"
    ) as HTMLElement;
    const event = new CustomEvent(EVENTS.REQUEST_SET_DATA, {
      detail: {
        type: "SET_IMAGES",
        data: images,
      },
    });
    editorElement.dispatchEvent(event);
  };

  return (
    <Box sx={{ height: "80px", backgroundColor: "#2c3e50", width: "100%" }}>
      <button onClick={makeSetData} style={{ background: "#ffffff" }}>
        SET IMAGES
      </button>
      <button onClick={makePublishData} style={{ background: "#ffffff" }}>
        EXPORT TO JSON
      </button>
    </Box>
  );
};

export default Navnar;
