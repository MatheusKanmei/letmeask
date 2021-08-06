import { css } from 'styled-components'

export const AuthCssHtml = css`
  @media (max-width: 800px) {
    html {
      font-size: 55%;
    }
  }

  @media (max-width: 500px) {
    html {
      font-size: 40%;
    }
    #page-auth main .main-content p {
      font-size: 2rem;
    }
  }
`
