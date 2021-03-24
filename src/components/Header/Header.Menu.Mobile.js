import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import AppContext from "../../Contexts/AppContext"

import {
  MobileMenuWrapper,
  MobileMenuList,
  MenuListItem,
  MenuLink,
} from "./styles"

import ToggleButton from "../shared/ToggleButton"

const HeaderMenuMobile = () => {
  const { mobileMenu, toggleMobileMenu } = React.useContext(AppContext)

  const toggleHandler = e => {
    toggleMobileMenu(!mobileMenu)
  }
  const removeMenu = () => {
    toggleMobileMenu(false)
  }
  const handler = e => {
    if (e.target.nodeName === "A") {
      document
        .getElementById("mobileMenu")
        .querySelectorAll("a")
        .forEach(el => el.classList.remove("active"))
      e.target.classList.add("active")
    }
  }

  return (
    <MobileMenuWrapper>
      <ToggleButton
        state={mobileMenu ? "close" : "default"}
        onClick={toggleHandler}
      />
      <MobileMenuList
        id="mobileMenu"
        className={`sidebar ${mobileMenu ? "active" : ""}`}
        onClick={handler}
      >
        <MenuListItem>
          <MenuLink to="#الرئيسية" className="active" onClick={removeMenu}>
            الرئيسية
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={removeMenu} to="#عن_نقطة">
            عن نقطة
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={removeMenu} to="#خدماتنا">
            خدماتنا
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={removeMenu} to="#أعمالنا">
            أعمالنا
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={removeMenu} to="#عملاؤنا">
            عملاؤنا
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={removeMenu} to="#اتصل_بنا">
            اتصل بنا
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink to="/">
            <StaticImage
              src="../../../content/assets/usa-flag.png"
              alt="flag"
              placeholder="blurred"
              layout="fixed"
              width={45}
            />
          </MenuLink>
        </MenuListItem>
      </MobileMenuList>
    </MobileMenuWrapper>
  )
}

export default HeaderMenuMobile
