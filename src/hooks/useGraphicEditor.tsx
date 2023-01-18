import React from "react";
import { GraphicEditorContext } from "~/contexts/GraphicEditor";

const useGraphicEditor = () => {
  const {
    currentDesign,
    currentScene,
    scenes,
    setCurrentDesign,
    setCurrentScene,
    setScenes,
  } = React.useContext(GraphicEditorContext);
  return {
    currentDesign,
    currentScene,
    scenes,
    setCurrentDesign,
    setCurrentScene,
    setScenes,
  };
};

export default useGraphicEditor;
