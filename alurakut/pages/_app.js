import { useState } from 'react';
import { createGlobalStyle, ThemeConsumer, ThemeProvider } from 'styled-components';
import DarkModeToggle from '../src/lib/DarkModeToggle';
import { AlurakutMenu, AlurakutStyles } from '../src/lib/AlurakutCommons';

const LightTheme = {
  paginaBackground: "#DDCCE1",
  navBg: "#68588F",
  barraPesquisa: "#A389C8",
  textoColor: "#000000",
  boxBg: "#ffffff",
  icon: "#DDCCE1"
}

const DarkTheme = {
  paginaBackground: "#363A5B",
  navBg: "#050A30",
  barraPesquisa: "#4E5482",
  textoColor: "#050A30",
  boxBg: "#ffffff",
  icon: "#363A5B"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}


const GlobalStyle = createGlobalStyle`
  /* Reset CSS */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${props => themes[props.theme].paginaBackground };
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`

export default function App({ Component, pageProps }) {
  const[theme, setTheme] = useState("light")
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={themes[theme]}>
        <DarkModeToggle theme={theme} setTheme = {setTheme} />
        <Component {...pageProps} theme = {themes[theme]} />
      </ThemeProvider>
    </>
  )
}
