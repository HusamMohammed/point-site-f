import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

import {
  HeroSection,
  MainContainer,
  MainText,
  MainBtn,
  Curve,
  Overlay,
} from "./styles"

const Hero = ({ hero, ltr }) => {
  const query = useStaticQuery(graphql`
    {
      backgrounds: allFile(
        filter: { relativePath: { regex: "/^home.*(png|jpeg|jpg)$/" } }
        sort: { fields: base }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1920, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  const ref = React.useRef()

  React.useEffect(() => {
    setTimeout(() => {
      ref.current.style.opacity = "1"
      ref.current.style.animation = "none"
      console.log("donen")
    }, 2600)
  }, [])

  return (
    <HeroSection id="الرئيسية">
      <MainContainer>
        <MainText
          // data-sal='slide-uphero'
          // data-sal-delay='200'
          // data-sal-duration='700'
          // data-sal-easing='ease'
          style={{ "--anme-delay": "1s" }}
        >
          {hero.mainText}
        </MainText>
        <MainBtn
          // data-sal='slide-uphero'
          // data-sal-delay='600'
          // data-sal-duration='400'
          // data-sal-easing='ease-out'
          ref={ref}
          style={{ "--anme-delay": "1.5s" }}
        >
          {ltr ? "Contact Us" : "تواصل معنا"}
        </MainBtn>
      </MainContainer>

      <BackgroundSlider
        query={query}
        initDelay={5}
        transition={5}
        duration={8}
      />
      <Overlay></Overlay>
    </HeroSection>
  )
}

export default Hero
