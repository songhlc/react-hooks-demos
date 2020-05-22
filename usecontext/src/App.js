import React, { useState, useContext } from 'react'
import logo from './logo.svg'
import './App.css'

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

const ThemeContext = React.createContext(themes.light)

function App() {
  const [value, setValue] = useState(themes.dark)
  const change = () => {
    if (value === themes.dark) {
      setValue(themes.light)
    } else {
      setValue(themes.dark)
    }
  }
  return (
    <>
      <button onClick={change}>切换主题</button>
      <ThemeContext.Provider value={value}>
        <Toolbar />
      </ThemeContext.Provider>
    </>
  )
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton() {
  const theme = useContext(ThemeContext)
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  )
}

export default App
