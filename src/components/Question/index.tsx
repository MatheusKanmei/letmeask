/* eslint-disable react/require-default-props */
import { ReactNode } from 'react'
import cx from 'classnames'
import { QuestionCss } from './question'

type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isAnswered?: boolean
  isHighLighted?: boolean
}

export function Question({
  author,
  content,
  isAnswered = false,
  isHighLighted = false,
  children,
}: QuestionProps) {
  return (
    <QuestionCss>
      <div
        className={cx(
          'question',
          { answered: isAnswered },
          { highlighted: isAnswered ? '' : isHighLighted }
        )}
      >
        <p>{content}</p>
        <footer>
          <div className="user-info">
            <img
              src={author.avatar}
              alt={`imagem de perfil de ${author.name}`}
            />
            <span>{author.name}</span>
          </div>
          <div>{children}</div>
        </footer>
      </div>
    </QuestionCss>
  )
}
