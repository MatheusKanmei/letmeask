/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// import { FormEvent, useEffect } from 'react';
// import { useState } from 'react';
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg'
import deleteImg from '../assets/images/delete.svg'
import checkImg from '../assets/images/check.svg'
import answerImg from '../assets/images/answer.svg'

import { Button } from '../components/Button'
import { Question } from '../components/Question'
import { RoomCode } from '../components/RoomCode'
// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom'
import { database } from '../services/firebase'

import { Modal } from '../components/Modal'
import { RoomCss } from '../styles/room'
import { SwitchTheme } from '../components/SwitchTheme/SwitchTheme'

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const params = useParams<RoomParams>()
  // const { user } = useAuth();
  const roomId = params.id
  const { title, questions } = useRoom(roomId)
  const history = useHistory()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [deleteQuestion, setDeleteQuestion] = useState(false)

  function handleOPenModal() {
    setIsOpen(true)
  }

  async function handleDeleteQuestion(questionId: string) {
    setIsOpen(false)
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    })

    history.push('/')
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  async function handleHighLightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighLighted: true,
    })
  }

  return (
    <RoomCss>
      <div id="page-room">
        <header>
          <div className="header-admin">
            <img src={logoImg} alt="LetmeTask" />
            <SwitchTheme />
            <RoomCode code={roomId} roomCodeAdmin />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
          </div>
        </header>

        <main id="main">
          <div className="room-title">
            <h1>Sala: {title}</h1>
            {questions.length > 0 && (
              <span>{questions.length} pergunta(s)</span>
            )}
          </div>

          <div className="question-list">
            {questions.map((question) => (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighLighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>

                    <button
                      onClick={() => handleHighLightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                )}
                {modalIsOpen && (
                  <Modal
                    deleteQuestion={() => handleDeleteQuestion(question.id)}
                    isClose={() => setIsOpen(false)}
                  />
                )}
                <button onClick={() => handleOPenModal()}>
                  <img src={deleteImg} alt="remover pergunta" />
                </button>
              </Question>
            ))}
          </div>
        </main>
      </div>
    </RoomCss>
  )
}
