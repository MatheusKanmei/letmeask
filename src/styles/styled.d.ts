import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primaryA: string
      primaryB: string

      background: string
      text: string
      textLight: string
    }
  }
}
