import React from 'react'
import AppContext from './AppContext'

const AppProvider = ({ children }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

	return (
		<AppContext.Provider
			value={{
				mobileMenu: isMobileMenuOpen,
				toggleMobileMenu,
			}}>
			{children}
		</AppContext.Provider>
	)
}

export default AppProvider
