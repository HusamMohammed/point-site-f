import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"

import Container from "../shared/Container"
import { Title, SubTitle } from "../shared/StyledComponents"
import { Section } from "./styles"

import ClientSlide from "./Client"

SwiperCore.use([Navigation])

const Clients = ({ subTitle, ltr }) => {
  const { clients } = useStaticQuery(graphql`
    {
      clients: allClientsJson(sort: { fields: image___base }) {
        nodes {
          name
          image {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                quality: 90
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `)

  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(!hasMounted)
    console.log("Mounted")
  }, [])

  return (
    <Section id="عملاؤنا" className="clients">
      <Container>
        <Title
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {ltr ? "Our Clients" : "عملاؤنا"}
        </Title>
        <SubTitle
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {subTitle}
        </SubTitle>
        <Swiper
          navigation
          loop
          speed={900}
          slidesPerView={1}
          spaceBetween={0}
          dir="rtl"
          breakpoints={{
            521: {
              slidesPerView: 2,
            },
            990: {
              slidesPerView: 3,
            },
          }}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {clients.nodes.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <ClientSlide client={client} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Container>
    </Section>
  )
}

export default Clients
