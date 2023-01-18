import { ChakraProvider } from "@chakra-ui/react";
import { Provider as LayerhubProvider } from "@layerhub-pro/react";
import { DataProvider } from "./contexts/Data";
import { GraphicEditorProvider } from "./contexts/GraphicEditor";
import { LayoutProvider } from "./contexts/Layout";
import theme from "./styles/theme";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <GraphicEditorProvider>
        <DataProvider>
          <LayoutProvider>
            <LayerhubProvider>{children}</LayerhubProvider>
          </LayoutProvider>
        </DataProvider>
      </GraphicEditorProvider>
    </ChakraProvider>
  );
};

export default Provider;
