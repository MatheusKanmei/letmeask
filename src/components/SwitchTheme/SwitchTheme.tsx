import { useContext } from 'react'
import Switch from 'react-switch'
import { CurrentThemeContext } from '../../App'
import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'
// import { ThemeContext } from 'styled-components'

export function SwitchTheme() {
  const [currentTheme, setTheme] = useContext(CurrentThemeContext)

  function toggleTheme() {
    setTheme(currentTheme.title === 'light' ? dark : light)
  }

  return (
    <Switch
      onChange={() => {
        toggleTheme()
      }}
      checked={currentTheme.title === 'dark'}
      checkedIcon={currentTheme.title === 'dark'}
      uncheckedIcon={currentTheme.title === 'light'}
      height={20}
      width={40}
      handleDiameter={15}
      offColor={currentTheme.colors.primaryB}
      onColor={currentTheme.colors.primaryA}
      className="theme-switch"
    />
  )
}
