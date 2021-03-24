import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { MenuList, MenuListItem, MenuLink } from "./styles"

const HeaderMenu = () => {
  return (
    <MenuList id="menu">
      <MenuListItem>
        <MenuLink className="active" to="#الرئيسية">
          الرئيسية
        </MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink to="#عن_نقطة">عن نقطة</MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink to="#خدماتنا">خدماتنا</MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink to="#أعمالنا">أعمالنا</MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink to="#عملاؤنا">عملاؤنا</MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink to="#اتصل_بنا">اتصل بنا</MenuLink>
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
    </MenuList>
  )
}

export default HeaderMenu
