export const theme = {
  colors: {
    primary: '#2a1d69',
    lightShade: '#e6effb'
  }
} as const;

export type Theme = typeof theme;
