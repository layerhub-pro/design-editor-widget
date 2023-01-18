import React from "react";
import { IScene } from "@layerhub-pro/types";
import { IDesign } from "~/common/interfaces";

interface GraphicEditorContext {
  scenes: IScene[];
  setScenes: (value: ((prevState: IScene[]) => IScene[]) | IScene[]) => void;
  currentScene: IScene | null;
  setCurrentScene: React.Dispatch<React.SetStateAction<IScene | null>>;
  currentDesign: IDesign;
  setCurrentDesign: React.Dispatch<React.SetStateAction<IDesign>>;
}

export const GraphicEditorContext = React.createContext<GraphicEditorContext>({
  scenes: [],
  setScenes: () => {},
  currentScene: null,
  setCurrentScene: () => {},
  currentDesign: {
    id: "",
    frame: {
      width: 0,
      height: 0,
      dpi: 300,
      id: "",
      unit: "PIXELS",
    },
    metadata: {},
    name: "",
    previews: [],
    scenes: [],
    type: "",
    published: false,
  },
  setCurrentDesign: () => {},
});

export const GraphicEditorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [scenes, setScenes] = React.useState<IScene[]>([]);
  const [currentScene, setCurrentScene] = React.useState<IScene | null>(null);
  const [currentDesign, setCurrentDesign] = React.useState<IDesign>({
    id: "",
    frame: {
      width: 0,
      height: 0,
      dpi: 300,
      id: "",
      unit: "PIXELS",
    },
    metadata: {},
    name: "",
    previews: [],
    scenes: [],
    type: "",
    published: false,
  });

  return (
    <GraphicEditorContext.Provider
      value={{
        scenes,
        setScenes,
        currentScene,
        setCurrentScene,
        currentDesign,
        setCurrentDesign,
      }}
    >
      {children}
    </GraphicEditorContext.Provider>
  );
};
