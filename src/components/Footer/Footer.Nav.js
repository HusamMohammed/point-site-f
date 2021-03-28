import React from "react"

import { NavWrapper, FooterHeading, Item, FooterLink } from "./styles"

const FooterNav = ({ ltr }) => {
  return (
    <NavWrapper>
      <FooterHeading
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="300"
        data-sal-easing="ease-out"
      >
        {ltr ? "Point" : "نقطة"}
      </FooterHeading>
      <ul>
        <Item
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          <FooterLink to="#عن_نقطة">{ltr ? "About" : "عن نقطة"}</FooterLink>
        </Item>
        <Item
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          <FooterLink to="#خدماتنا">{ltr ? "Services" : "خدماتنا"}</FooterLink>
        </Item>
        <Item
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          <FooterLink to="#أعمالنا">{ltr ? "Our Works" : "أعمالنا"}</FooterLink>
        </Item>
        <Item
          data-sal="slide-up"
          data-sal-delay="600"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          <FooterLink to="#عملاؤنا">
            {ltr ? "Our Clients" : "عملاؤنا"}
          </FooterLink>
        </Item>
        <Item
          data-sal="slide-up"
          data-sal-delay="700"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          <FooterLink to="#اتصل_بنا">
            {ltr ? "Contact Us" : " اتصل بنا"}
          </FooterLink>
        </Item>
      </ul>
    </NavWrapper>
  )
}

export default FooterNav
