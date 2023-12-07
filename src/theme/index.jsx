import { extendTheme } from '@chakra-ui/react';
import Button from "./Button";

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

export const theme = extendTheme({
  config,
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif'
  },
  components: {
    Button,
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  colors: {
    blue: {
      50: "#E5F9FF",
      500: "#00BFFE",
    },
    primary: {
      50: "#dd5f5f33",
      500: "#d70040",
      600: "#E74949",
    },
    red: {
      50: "#FEF2F2",
      400: "#DD5F5F",
      500: "#FF2E2E",
    },
    neutral: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    gray: {
      50: "#F9FAFB",
      100: "#F8F8F8",
      500: "#9CA3AF",
    },
    success: {
      50: "#F0FDF4",
      100: "#DCFCE7",
      500: "#22C55E",
    },
    warning: {
      400: "#FBBF24",
      500: "#F59E0B",
    },
  },
});
