import React from "react"

import { LinksWrapper, FooterBottomLink } from "./styles"

const FooterLinks = ({ ltr }) => {
  return (
    <LinksWrapper
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-duration="400"
      data-sal-easing="ease-out"
    >
      <FooterBottomLink to="/">
        {ltr ? "Commercial Registry " : "السجل التجاري"}
      </FooterBottomLink>
      <FooterBottomLink to="/">
        {ltr ? "Usage policy" : "شروط الاستخدام"}
      </FooterBottomLink>
      <FooterBottomLink to="/">
        {ltr ? "Privacy policy" : "سياسة الخصوصية"}
      </FooterBottomLink>
    </LinksWrapper>
  )
}

export default FooterLinks
