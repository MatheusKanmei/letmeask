import styled from 'styled-components'

export const ModalCss = styled.div`
  .modal {
    display: flex;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(45, 31, 31, 0.8);
    z-index: 99999;
    justify-content: center;
    align-items: center;

    .modal-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 60%;
      height: 60%;
      padding: 15px 20px;
      background: #fff;
      border-radius: 6px;

      img {
        width: 200px;
        height: 200px;
        margin: 5% 0;
      }

      .modal-footer {
        display: flex;
        align-self: stretch;
        justify-content: center;
        gap: 16px;

        button {
          height: 50px;
          border-radius: 8px;
          border: 0px;
          color: #fff;
          background: crimson;
          padding: 0 16px;
          transition: filter 0.2s;
          font-weight: 500;

          &:hover {
            filter: brightness(0.9);
          }
        }

        .cancel-button {
          padding: 0 35px;
          background: #835afd;
        }
      }
    }
  }

  @media (max-height: 550px) {
    .modal {
      .modal-content {
        width: 60%;
        height: 80vh;
      }
    }
  }

  @media (max-width: 650px) {
    .modal {
      .modal-content {
        width: 100%;
        height: 80vh;
      }
    }
  }
`
