import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
html {
    /*a cada 1 ream serão considerados 10 px*/
    font-size: 62.5%;
}

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

body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
}

body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
}

`
