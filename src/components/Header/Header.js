import React, { useEffect } from "react"

import Logo from "../shared/Logo"
import HeaderMenu from "./Header.Menu"
import HeaderMenuMobile from "./Header.Menu.Mobile"
import enableStickyHeader from "../../utils/enableStickyHeader"

import { HeaderWrapper, HeaderContainer, Nav, HeaderLogo } from "./styles"

const Header = ({ ltr }) => {
  useEffect(() => {
    enableStickyHeader("Header")
  }, [])

  return (
    <HeaderWrapper id="Header">
      <HeaderContainer>
        <Nav ltr={ltr}>
          <HeaderMenuMobile ltr={ltr} />
          <HeaderMenu ltr={ltr} />
        </Nav>
        <HeaderLogo ltr={ltr}>
          <Logo />
        </HeaderLogo>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
