import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyles from "./styles/global.js"
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'

import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
