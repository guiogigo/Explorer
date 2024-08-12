import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyles from "./styles/global.js"
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'

import { Details } from './pages/Details/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Details />
    </ThemeProvider>
  </StrictMode>,
)
