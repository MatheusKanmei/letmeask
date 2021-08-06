import styled from 'styled-components'

export const RoomCss = styled.div`
  #page-room {
    header {
      padding: 24px;
      border-bottom: 1 px solid #e2e2e2;

      .header-admin {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          max-height: 45px;
        }

        .room-code-admin {
          margin-left: auto;
          margin-right: 1%;
        }

        > div {
          display: flex;
          justify-content: space-between;
          gap: 16px;

          button {
            height: 40px;
          }
        }
      }

      .header-room {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          max-height: 45px;
        }

        > div {
          display: flex;
          justify-content: space-between;
          gap: 16px;

          .theme-switch {
            margin-left: 30%;
          }

          button {
            height: 40px;
          }
        }
      }
    }

    main {
      max-width: 800px;
      margin: 0 auto;

      .room-title {
        margin: 32px 0 24px;
        display: flex;
        align-items: center;

        h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          color: ${(props) => props.theme.colors.text};
        }

        span {
          margin-left: 16px;
          background: #e559f9;
          border-radius: 999px;
          padding: 8px 16px;
          color: #fff;
          font-weight: 500px;
          font-size: 14px;
        }
      }
      form {
        textarea {
          width: 100%;
          border: 0;
          padding: 16px;
          border-radius: 8px;
          background: #fefefe;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
          resize: vertical;
          min-height: 130px;
        }

        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;

          span {
            font-size: 14px;
            color: #737380;
            font-weight: 500;

            button {
              background: transparent;
              border: 0;
              color: #835afd;
              text-decoration: underline;
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;
            }
          }

          .user-info {
            display: flex;
            align-items: center;

            img {
              width: 32px;
              height: 32px;
              border-radius: 50%;
            }

            span {
              margin-left: 8px;
              color: #29292e;
              font-weight: 500;
              font-size: 14px;
            }
          }
        }
      }

      .question-list {
        margin-top: 32px;
      }
    }
  }

  @media (max-width: 850px) {
    #page-room {
      header {
        .header-room {
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          .room-code-user {
            //margin-right: auto;
            order: -5;
            margin: 0;
          }
        }
        .header-admin {
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          .room-code-admin {
            //margin-right: auto;
            order: -5;
            margin: 0;
          }
        }

        .content {
          flex-direction: column-reverse;
          > img {
            margin-top: 3%;
          }
        }
      }

      main {
        .room-title {
          flex-direction: column;
          margin: 0 0 5% 0;
          h1 {
            text-align: center;
            margin: 0 3% 0 3%;
          }
          span {
            justify-content: center;
          }
        }

        form {
          display: flex;
          flex-direction: column;

          textarea {
            width: 90%;
            min-height: 90px;
            align-self: center;
          }

          .user-info {
            margin-left: 3%;
          }

          .own-button {
            margin-right: 3%;
          }
        }

        .question-list {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
`
