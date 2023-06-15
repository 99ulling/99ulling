export const color = {
  primary: "#F57D14",
  secondary: "#FFAA01",
  tertiary: "#FFC01D",

  lightest: "#FFFFFF",
  lighter: "#F7FAFC",
  light: "#EEF3F6",
  mediumlight: "#ECF4F9",
  medium: "#D9E8F2",
  mediumdark: "#73828C",
  dark: "#5C6870",
  darker: "#454E54",
  darkest: "#2E3438",
  tr10: "rgba(0, 0, 0, 0.1)",
  tr5: "rgba(0, 0, 0, 0.05)",

  border: "hsla(203, 50%, 30%, 0.15)",
} as const;

export const typography = {
  type: {
    primary: '"Noto Sans KR", sans-serif',
    bazzi: '"Bazzi", sans-serif',
  },
  weight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
  },
} as const;

export const SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
} as const;
