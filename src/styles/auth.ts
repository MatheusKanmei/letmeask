import styled from 'styled-components'

export const AuthCss = styled.div`
  html {
    /*a cada 1 ream serão considerados 10 px*/
    font-size: 62.5%;
  }
  #page-auth {
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
      flex: 7;

      background-color: ${(props) => props.theme.colors.primaryB};
      color: #ffff;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 7% 5%;
    }

    img {
      max-width: 320px;
    }

    strong {
      font: 700 3.2rem 'poppins', sans-serif;
      line-height: 4.2rem;
      margin-top: 1%;
    }

    p {
      line-height: 4.2rem;
      margin-top: 1%;
      color: ${(props) => props.theme.colors.textLight};
    }

    main {
      flex: 8;
      padding: 0% 5%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .theme-switch {
      align-self: center;
      margin: -20vh 0 20vh 0;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 320px;
      align-items: stretch;
      text-align: center;
      align-self: center;

      > img {
        align-self: center;
      }

      h2 {
        font-size: 2.4rem;
        margin: 8% 0 7%;
        font-family: 'Poppins', sans-serif;
      }

      form {
        input {
          height: 5rem;
          border-radius: 8px;
          padding: 0px 16px;
          background-color: #fff;
          border: 1px solid #a8a8b3;
        }

        button {
          margin-top: 4%;
        }
        button,
        input {
          width: 100%;
        }
      }

      p {
        font-size: 1.4rem;
        color: #737380;
        margin-top: 1%;

        a {
          color: #e559f9;
        }
      }

      .create-room {
        margin-top: 5%;
        height: 5rem;
        border-radius: 8px;
        font-weight: 500;
        background: #ea4335;
        color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        border: 0;

        transition: filter 0.2s;
        img {
          margin-right: 1%;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }

      .separator {
        font-size: 1.4rem;
        color: #a8a8b3;

        margin: 5% 0;
        display: flex;
        align-items: center;

        &::before {
          content: '';
          flex: 1;
          height: 1px;
          background: #a8a8b3;
          margin-right: 2%;
        }
        &::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #a8a8b3;
          margin-left: 2%;
        }
      }
    }
  }

  @media (max-width: 800px) {
    html {
      font-size: 55%;
    }
  }

  @media (max-width: 730px) {
    #page-auth {
      flex-direction: column;

      aside {
        width: 100vw;
        max-height: 100px;

        img {
          display: none;
        }
      }

      strong {
        text-align: center;
      }

      p {
        text-align: center;
        font-size: 2.2rem;
      }

      main {
        align-items: stretch;

        .theme-switch {
          align-self: auto;
          margin: 0;
        }

        .main-content {
          flex-direction: column;
          justify-content: center;

          > img {
            margin: 0 0 8%;
          }

          h2 {
            font-size: 3.5rem;
            margin: 5% 0 10%;
          }

          .create-room {
            height: 50px;
          }

          .separator {
            font-size: 16px;
          }

          form {
            input {
              height: 50px;
            }
          }
        }
      }
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
