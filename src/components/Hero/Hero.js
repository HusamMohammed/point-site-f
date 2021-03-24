import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'

import {
	HeroSection,
	MainContainer,
	MainText,
	MainBtn,
	Curve,
	Overlay,
} from './styles'

const Hero = () => {
	const query = useStaticQuery(graphql`
		{
			hero: homeJson {
				mainText
			}

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

	return (
		<HeroSection id='الرئيسية'>
			<MainContainer>
				<MainText
					data-sal='slide-uphero'
					data-sal-delay='200'
					data-sal-duration='700'
					data-sal-easing='ease'>
					{query.hero.mainText}
				</MainText>

				<MainBtn
					data-sal='slide-uphero'
					data-sal-delay='600'
					data-sal-duration='400'
					data-sal-easing='ease-out'>
					تواصل معنا
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
