import React from "react";
import { IStaticImage, IStaticVector } from "@layerhub-pro/types";
import { IComponent, IDesign } from "../common/interfaces";
import { stickers, templates, images as imagesData } from "~/common/data";

interface DataContext {
  images: Partial<IStaticImage>[];
  setImages: (v: IStaticImage[]) => void;
  designs: Partial<IDesign>[];
  setDesigns: (v: IDesign[]) => void;
  elements: Partial<IStaticVector>[];
  setElements: (v: IStaticVector[]) => void;
  components: Partial<IComponent>[];
  setComponents: (v: IComponent[]) => void;
}

export const DataContext = React.createContext<DataContext>({
  images: [],
  setImages: () => {},
  designs: [],
  setDesigns: () => {},
  elements: [],
  setElements: () => {},
  components: [],
  setComponents: () => {},
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [images, setImages] =
    // @ts-ignore
    React.useState<Partial<IStaticImage>[]>(imagesData);
  const [designs, setDesigns] = React.useState<Partial<IDesign>[]>(templates);
  const [elements, setElements] =
    React.useState<Partial<IStaticVector>[]>(stickers);
  const [components, setComponents] = React.useState<Partial<IComponent>[]>([]);

  return (
    <DataContext.Provider
      value={{
        images,
        setImages,
        designs,
        setDesigns,
        components,
        setComponents,
        elements,
        setElements,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
