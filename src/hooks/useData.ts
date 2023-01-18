import React from "react";
import { DataContext } from "~/contexts/Data";

const useData = () => {
  const {
    components,
    designs,
    images,
    setComponents,
    setDesigns,
    setImages,
    elements,
    setElements,
  } = React.useContext(DataContext);
  return {
    components,
    designs,
    images,
    setComponents,
    setDesigns,
    setImages,
    elements,
    setElements,
  };
};

export default useData;
