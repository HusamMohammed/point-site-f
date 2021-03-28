import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { MenuList, MenuListItem, MenuLink } from "./styles"

const HeaderMenu = ({ ltr }) => {
  return (
    <MenuList id="menu">
      <MenuListItem ltr={ltr}>
        <MenuLink className="active" to="#الرئيسية">
          {ltr ? "Home" : "الرئيسية"}
        </MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink to="#عن_نقطة">{ltr ? "About" : "عن نقطة"}</MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink to="#خدماتنا">{ltr ? "Services" : "خدماتنا"}</MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink to="#أعمالنا">{ltr ? "Our Works" : "أعمالنا"}</MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink to="#عملاؤنا">{ltr ? "Our Clients" : "عملاؤنا"}</MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink to="#اتصل_بنا">{ltr ? "Contact Us" : " اتصل بنا"}</MenuLink>
      </MenuListItem>
      <MenuListItem ltr={ltr}>
        {ltr ? (
          <MenuLink to="/">
            <StaticImage
              src="../../../content/assets/usa-flag.png"
              alt="flag"
              placeholder="blurred"
              layout="fixed"
              width={45}
            />
          </MenuLink>
        ) : (
          <MenuLink to="/en">
            {ltr ? (
              <StaticImage
                src="../../../content/assets/usa-flag.png"
                alt="flag"
                placeholder="blurred"
                layout="fixed"
                width={45}
              />
            ) : (
              <StaticImage
                src="../../../content/assets/usa-flag.png"
                alt="flag"
                placeholder="blurred"
                layout="fixed"
                width={45}
              />
            )}
          </MenuLink>
        )}
      </MenuListItem>
    </MenuList>
  )
}

export default HeaderMenu
