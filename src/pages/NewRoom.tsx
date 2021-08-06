import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
// import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button'
import { SwitchTheme } from '../components/SwitchTheme/SwitchTheme'

import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'
import { AuthCss } from '../styles/auth'

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      id: user?.id,
    })

    history.push(`/admin/rooms/${firebaseRoom.key}`)
  }

  return (
    <AuthCss>
      <div id="page-auth">
        <aside>
          <img src={illustrationImg} alt="Imagem de fundo do lado" />
          <strong>Crie salas de Q&amp;A ao vivo</strong>
          <p>Tire as dúvidas do povão em tempo real !</p>
        </aside>

        <main>
          <SwitchTheme />
          <div className="main-content">
            <img src={logoImg} alt="letmeask" />
            <h2>Criar uma nova sala</h2>
            <form onSubmit={handleCreateRoom}>
              <input
                type="text"
                placeholder="Nome da sala"
                onChange={(event) => setNewRoom(event.target.value)}
                value={newRoom}
              />
              <Button type="submit">Criar sala</Button>
            </form>
            <p>
              Quer entrar em uma sala já existente?{' '}
              <Link to="/"> Clique aqui</Link>{' '}
            </p>
          </div>
        </main>
      </div>
    </AuthCss>
  )
}
