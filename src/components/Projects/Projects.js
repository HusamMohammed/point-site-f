import React from "react"

import ProjectsSlider from "./Projects.Slider"

import Container from "../shared/Container"
import { Title, SubTitle, ContactBtn } from "../shared/StyledComponents"
import { Section } from "./styles"

const Projects = ({ projects, ltr }) => {
  return (
    <Section id="أعمالنا" className="projects">
      <Container>
        <Title
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {ltr ? "Our Projects" : "أعمالنا"}
        </Title>
        <SubTitle
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {projects.subTitle}
        </SubTitle>
        <ProjectsSlider projects={projects.projects.nodes} ltr={ltr} />
        <ContactBtn
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          {ltr ? "Contact Us" : "تواصل معنا"}
        </ContactBtn>
      </Container>
    </Section>
  )
}

export default Projects
