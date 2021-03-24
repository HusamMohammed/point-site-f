import * as React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import AppProvider from "../../Contexts/AppProvider"

import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import theme from "../../styles/theme"

import "swiper/swiper.min.css"
import "swiper/swiper-bundle.min.css"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </>
      </ThemeProvider>
    </AppProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
