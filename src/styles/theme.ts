import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultSize,
} from "@chakra-ui/react";

export default extendTheme(
  {
    colors: {
      black: "#545465",
      white: "#fff",
      brand: {
        "50": "#cbdefb",
        "100": "#97bdf7",
        "200": "#649cf2",
        "300": "#307aee",
        "400": "#115ed5",
        "500": "#1055c0",
        "600": "#0a3981",
        "700": "#082b61",
        "800": "#051c40",
        "900": "#030e20",
      },
    },
    fonts: {
      body: `Outfit, ${base.fonts.body}`,
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: "normal",
          colorScheme: "brand",
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Tabs", "Slider", "Input"],
  }),
  withDefaultSize({
    size: "sm",
    components: ["Button", "Tabs", "Input", "Avatar"],
  })
);
