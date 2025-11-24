import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <I18nextProvider i18n={i18n}>
      <App />
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>,
)
