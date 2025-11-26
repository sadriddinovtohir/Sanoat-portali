import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/i18n.ts'
import imgs from "./assets/img/navbg.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeadProvider, Meta, Title } from 'react-head'
import React from 'react'


createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
  <HeadProvider>
      <Title>Sanoat Portali</Title>
         <Meta property="og:title" content="Sanoat Portali" />
      <Meta property="og:description" content="Sanoat portali — korxonalar, ishlab chiqaruvchilar, investorlar va davlat tashkilotlarini birlashtiruvchi raqamli platforma." />
      <Meta property="og:image" content={imgs} />
      <Meta name="description" content="Sanoat portali — korxonalar, ishlab chiqaruvchilar, investorlar va davlat tashkilotlarini birlashtiruvchi raqamli platforma." />
        <BrowserRouter>
        <CssBaseline />
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
  </HeadProvider>
    </React.StrictMode>
)
