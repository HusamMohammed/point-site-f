import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { ContactWrapper, FooterHeading, Item } from "./styles"

const FooterContactInfo = ({ ltr }) => {
  const {
    contact: {
      location,
      email,
      phone,
      item4,
      item5,
      location_en,
      item4_en,
      item5_en,
    },
  } = useStaticQuery(graphql`
    {
      contact: contactJson {
        email
        phone
        location
        item4
        item5
        location_en
        item4_en
        item5_en
      }
    }
  `)
  return (
    <ContactWrapper>
      <FooterHeading
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="300"
        data-sal-easing="ease-out"
      >
        {ltr ? "Contact" : "تواصل"}
      </FooterHeading>
      <Item
        as="p"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="300"
        data-sal-easing="ease-out"
      >
        {ltr ? location_en : location}
      </Item>
      <Item
        as="p"
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="300"
        data-sal-easing="ease-out"
      >
        {phone}
      </Item>
      <Item
        as="p"
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-duration="300"
        data-sal-easing="ease-out"
      >
        {email}
      </Item>
      {item4 && (
        <Item
          as="p"
          data-sal="slide-up"
          data-sal-delay="600"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          {ltr ? item4_en : item4}
        </Item>
      )}
      {item5 && (
        <Item
          as="p"
          data-sal="slide-up"
          data-sal-delay="700"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          {ltr ? item5_en : item5}
        </Item>
      )}
    </ContactWrapper>
  )
}

export default FooterContactInfo
