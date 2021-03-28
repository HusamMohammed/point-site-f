import * as React from "react"
import { graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Services from "../components/Services/Services"
import Projects from "../components/Projects/Projects"
import Clients from "../components/Clients/Clients"
import SEO from "../components/SEO/SEO"

const Global = createGlobalStyle`
  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`

const IndexPage = ({ data }) => {
  const { hero, about, services1, services2, projects, subTitles } = data
  // console.log(projects)
  return (
    <Layout ltr>
      <SEO title="نقطة" lang="en" dir="ltr" />
      <Global />

      <Hero hero={hero} ltr />
      <About about={about} ltr />
      <Services
        services={{ services1, services2, subTitle: subTitles.services }}
        ltr
      />
      <Projects projects={{ projects, subTitle: subTitles.projects }} ltr />
      <Clients subTitle={subTitles.clients} ltr />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    hero: homeJson {
      mainText: mainText_en
    }

    about: aboutJson {
      title: title_en
      description: description_en
    }

    services1: allServices1Json {
      nodes {
        name: name_en
        description: description_en
        image {
          childImageSharp {
            gatsbyImageData(
              width: 200
              formats: [AUTO, WEBP, AVIF]
              quality: 85
              placeholder: BLURRED
            )
          }
        }
      }
    }
    services2: allServices2Json {
      nodes {
        name: name_en
        description: description_en
        image {
          childImageSharp {
            gatsbyImageData(
              width: 200
              formats: [AUTO, WEBP, AVIF]
              quality: 85
              placeholder: BLURRED
            )
          }
        }
      }
    }

    projects: allProjects1Json {
      nodes {
        title: title_en
        description: description_en
        isLink
        url
        image {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              quality: 85
              placeholder: BLURRED
            )
          }
        }
      }
    }

    subTitles: subTitesJson {
      services: services_en
      projects: projects_en
      clients: clients_en
    }
  }
`
