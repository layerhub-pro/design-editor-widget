import React from "react";
import { useEditor } from "@layerhub-pro/react";
import { EVENTS } from "./widgetManager/constants";
import useData from "./hooks/useData";
import { Payload } from "./common/interfaces";

const Container = ({ children }: { children: React.ReactNode }) => {
  const editor = useEditor();
  const { setImages, setDesigns, setComponents } = useData();

  const updateData = (payload: Payload) => {
    if (payload.type === "SET_IMAGES") {
      setImages(payload.data);
    }
    if (payload.type === "SET_DESIGNS") {
      setDesigns(payload.data);
    }
    if (payload.type === "SET_COMPONENS") {
      setComponents(payload.data);
    }
  };

  React.useEffect(() => {
    if (editor) {
      const editorElement = document.getElementById(
        "layerhub_editor_widget"
      ) as HTMLElement;
      editorElement.addEventListener(
        EVENTS.REQUEST_SET_DATA,
        (payload: any) => {
          updateData(payload.detail);
        }
      );
    }
  }, [editor]);

  return <>{children}</>;
};

export default Container;
