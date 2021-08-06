/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
import imgDelete from '../../assets/images/delete.svg'
import { ModalCss } from './modal'

type ModalProps = {
  isClose: () => void
  deleteQuestion: () => void
}

export function Modal({ isClose, deleteQuestion }: ModalProps) {
  function closeAcceptModal() {
    deleteQuestion()
  }

  function closeCancelModal() {
    isClose()
  }

  // return new Promise( (resolve,reject) => {})
  return (
    <ModalCss>
      <div className="modal">
        <div className="modal-content">
          <h2>Deseja Realmente Excluir Esta Pergunta ?</h2>
          <img src={imgDelete} alt="Imagens de Lixeira" />
          <div className="modal-footer">
            <button className="cancel-button" onClick={closeCancelModal}>
              Cancelar ação
            </button>
            <button className="delete-button" onClick={closeAcceptModal}>
              Excluir Menssagem
            </button>
          </div>
        </div>
      </div>
    </ModalCss>
  )
}
