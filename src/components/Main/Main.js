import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
// import Particles from "react-particles-js"

import AppContext from "../../Contexts/AppContext"
// import particlesConfig from "./particles-config"

const Main = ({ children, ltr }) => {
  const { mobileMenu } = React.useContext(AppContext)
  // const [fs, setFs] = React.useState(false)

  // React.useEffect(() => {
  //   console.log("ltr", ltr)
  //   setFs(!fs)
  // }, [ltr])

  // console.log("Main")

  return (
    <MainW isMobileMenuOpen={mobileMenu}>
      {/* <Particles height="100%" width="100%" params={particlesConfig} /> */}
      {/* <Helmet>
        <script src="/js/tsparticles.js" type="text/javascript" defer></script>
      </Helmet> */}

      <div id="tsparticles"></div>
      {children}
    </MainW>
  )
}

const MainW = styled.main`
  position: relative;
  transition: filter 400ms ease-out;
  z-index: 1;
  filter: ${props => (props.isMobileMenuOpen ? "blur(4px)" : "blur(0px)")};
`

export default Main
