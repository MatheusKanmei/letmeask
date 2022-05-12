/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import copyImg from '../assets/images/copy.svg'

// import '../styles/room-code.scss'
import { RoomCodeCss } from '../styles/roomCode'

type RoomCodeProps = {
  code: string
  roomCodeAdmin?: boolean
  roomCodeUser?: boolean
}

export function RoomCode({
  roomCodeUser = false,
  roomCodeAdmin = false,
  ...props
}: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <RoomCodeCss>
      <button
        className={`room-code ${roomCodeAdmin ? 'room-code-admin' : ''} 
        ${roomCodeUser ? 'room-code-user' : ''}`}
        onClick={copyRoomCodeToClipboard}
      >
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala #{props.code}</span>
      </button>
    </RoomCodeCss>
  )
}
