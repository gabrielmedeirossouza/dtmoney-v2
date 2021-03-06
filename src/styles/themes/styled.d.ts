import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      [key: string]: string
      primary: string
      secondary: string

      background: string
      backgroundLight: string

      text: string
      textSmoothLight: string
      textLight: string

      positive: string
      negative: string
      attention: string
    }
  }
}
