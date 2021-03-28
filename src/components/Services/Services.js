import React from "react"
// import { graphql, useStaticQuery } from "gatsby"

import ServicesSlider from "./Services.Slider"

import { Title, SubTitle } from "../shared/StyledComponents"
import { ServicesContainer, Section } from "./styles"

// const ServicesSlider = React.lazy(() => import("./Services.Slider"))

const Services = ({ services, ltr }) => {
  const { services1, services2, subTitle } = services

  return (
    <Section id="خدماتنا" className="services">
      <ServicesContainer>
        <Title
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {ltr ? "Our Services" : "خدماتنا"}
        </Title>
        <SubTitle
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {subTitle}
        </SubTitle>
        <ServicesSlider services={services1.nodes} ltr={ltr} />
        <ServicesSlider services={services2.nodes} ltr={ltr} />
      </ServicesContainer>
    </Section>
  )
}

export default Services
