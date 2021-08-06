/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { createContext, Dispatch, SetStateAction } from 'react'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from './pages/Room'
import { AdminRoom } from './pages/AdminRoom'

import light from './styles/themes/light'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import usePersistedState from './hooks/usePersistedState'
// import { GlobalStyle } from './styles/global';

type CurrentThemeContextType = [
  CurrentTheme: DefaultTheme,
  setTheme: Dispatch<SetStateAction<DefaultTheme>>
]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CurrentThemeContext = createContext({} as CurrentThemeContextType)

function App() {
  const [CurrentTheme, setTheme] = usePersistedState<DefaultTheme>(
    'Theme',
    light
  )

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CurrentThemeContext.Provider value={[CurrentTheme, setTheme]}>
          <ThemeProvider theme={CurrentTheme}>
            <GlobalStyle />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/rooms/new" exact component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />
              <Route path="/admin/rooms/:id" component={AdminRoom} />
            </Switch>
          </ThemeProvider>
        </CurrentThemeContext.Provider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
