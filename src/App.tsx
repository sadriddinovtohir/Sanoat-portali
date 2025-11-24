import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "next-i18next";
import MainLayout from "./layout/Mainlayout";
// import { Index } from "./router";

const Home = lazy(()=>import("./page/public/home/home"))
const About = lazy(()=>import("./page/public/about/about"))
const Login = lazy(()=>import("./page/public/login/login"))




const App:React.FC = () => {
  const {i18n} = useTranslation()
  return (
    <>
  
    <Routes key={i18n.language}>
      <Route path="/" element={<MainLayout/>} >
    <Route index element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/login" element={<Login/>} />
      </Route>

    </Routes>

    </>
  )
}

export default App
