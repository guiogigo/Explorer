import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyles from "./styles/global.js"
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'

import { Home } from './pages/Home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Home/>
    </ThemeProvider>
  </StrictMode>,
)
