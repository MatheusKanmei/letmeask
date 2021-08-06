/* eslint-disable no-alert */
import { useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { database } from '../services/firebase'

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

// import '../'
import { AuthCss } from '../styles/auth'
import { SwitchTheme } from '../components/SwitchTheme/SwitchTheme'

export function Home() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Esta sala não existe')
      return
    }

    if (roomRef.val().closedAt) {
      alert('A sala já foi fechada')
      return
    }

    history.push(`rooms/${roomCode}`)
  }

  return (
    <AuthCss>
      <div id="page-auth">
        <aside>
          <img src={illustrationImg} alt="Imagem de fundo do lado" />
          <strong>Crie salas de Q&ampA ao vivo</strong>
          <p>Tire as dúvidas do povão em tempo real !</p>
        </aside>

        <main>
          <SwitchTheme />
          <div className="main-content">
            <img src={logoImg} alt="letmeask" />
            <button
              type="button"
              onClick={handleCreateRoom}
              className="create-room"
            >
              <img src={googleIconImg} alt="ícone do google" />
              Crie uma sala com o google
            </button>

            <div className="separator">Ou entre em uma sala</div>

            <form onSubmit={handleJoinRoom}>
              <input
                type="text"
                placeholder="Digite o código da sala"
                onChange={(event) => setRoomCode(event.target.value)}
                value={roomCode}
              />
              <Button type="submit">Entrar na sala</Button>
            </form>
          </div>
        </main>
      </div>
    </AuthCss>
  )
}
