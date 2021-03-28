import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import ProjectCard from "./Projects.Card"

const ProjectsSlider = ({ projects, ltr }) => {
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(!hasMounted)
    console.log("Mounted")
  }, [])

  return (
    <Swiper
      loop
      speed={600}
      slidesPerView={1}
      spaceBetween={0}
      dir={ltr ? "ltr" : "rtl"}
      breakpoints={{
        550: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1250: {
          slidesPerView: 4,
        },
      }}
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-duration="400"
      data-sal-easing="ease-out"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <ProjectCard project={project} ltr={ltr} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProjectsSlider
