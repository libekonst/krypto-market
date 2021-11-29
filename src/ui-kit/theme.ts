export const theme = {
  colors: {
    primary: '#2a1d69',
    lightShade: '#e6effb',
    darkShade: '#170b50',
    background: '#fbfbfe',
    positive: '#1ad159',
    negative: '#f05958'
  }
} as const;

export type Theme = typeof theme;
